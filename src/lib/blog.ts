import yaml from 'js-yaml';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content: string;
}

// Fetch all markdown files from the blogs directory
// We use import.meta.glob with eager: true to get the raw content at build time.
const markdownFiles = import.meta.glob('/src/content/blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

/**
 * A safe string parser for YAML frontmatter in the browser.
 * This replaces `gray-matter` which relies on Node.js Buffer.
 */
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (match) {
    const yamlString = match[1];
    const content = match[2];
    try {
      const data = yaml.load(yamlString) as Record<string, any>;
      return { data, content };
    } catch (e) {
      console.error("Error parsing YAML frontmatter:", e);
      return { data: {}, content: fileContent };
    }
  }

  // If no frontmatter is found, return the whole file as content
  return { data: {}, content: fileContent };
}


export function getAllBlogs(): BlogPost[] {
  const posts: BlogPost[] = Object.entries(markdownFiles).map(([filepath, rawContent]) => {
    // Extract the filename without the .md extension to use as a URL slug
    const slug = filepath.replace('/src/content/blogs/', '').replace('.md', '');
    
    const fileString = String(rawContent);
    const { data, content } = parseFrontmatter(fileString);

    return {
      slug,
      title: data?.title || 'Untitled Post',
      date: data?.date || '',
      category: data?.category || 'Uncategorized',
      description: data?.description || '',
      content: content,
    };
  });

  // Sort posts by date, descending (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const posts = getAllBlogs();
  return posts.find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  const posts = getAllBlogs();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}
