# Azam Afridi - Portfolio

A modern, responsive, and beautifully designed personal portfolio website.

## 🚀 Tech Stack

This project is built with a modern frontend stack to ensure fast performance and an excellent developer experience:

- **Framework:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (using Radix UI Primitives)
- **Routing:** [React Router](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📥 Local Development Setup

Follow these steps to run the portfolio locally on your machine.

### Prerequisites
Make sure you have Node.js and npm installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/azamafridi23/azamafridi23.github.io.git
cd azamafridi23.github.io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:8080` to see the application running.

## 🏗️ Project Structure

- `src/components/`: Reusable UI components (Hero, Experience, Projects, etc.)
- `src/components/ui/`: shadcn/ui base components
- `src/pages/`: Main page layouts (Index, Blog, BlogPost, NotFound)
- `src/contexts/`: React context providers (e.g., ThemeContext for Dark/Light mode)
- `src/lib/`: Utility functions (`utils.ts`, `blog.ts` for markdown parsing)
- `src/content/blogs/`: All blog post Markdown (`.md`) files
- `public/blog-images/`: Images used in blog posts, organized by post slug
- `public/`: Static assets (Favicon, robots.txt, etc.)

## ✍️ Adding a New Blog Post

The blog system reads `.md` files from `src/content/blogs/` automatically. No code changes are needed to add a post.

### Step 1: Create the Markdown file

Create a new `.md` file inside `src/content/blogs/`. The filename becomes the URL slug.

**Example:** `src/content/blogs/my-new-post.md` → accessible at `/blog/my-new-post`

### Step 2: Add YAML Frontmatter

Every post **must** start with a YAML frontmatter block. Copy this template to the top of your file:

```markdown
---
title: "Your Post Title Here"
date: "2024-03-15"
category: "Machine Learning"
description: "A short one-sentence summary that appears on the blog listing page."
---

# Your post content starts here...
```

| Field | Description |
|-------|-------------|
| `title` | The full title of your post |
| `date` | Publication date in `YYYY-MM-DD` format |
| `category` | Used to group posts in the filter menu. If a new category name is used, it will automatically appear as a new filter button |
| `description` | Short summary shown on the blog listing card |

### Step 3: Add Images (Optional)

If your post includes images:

1. Create a folder at `public/blog-images/<your-post-slug>/`
2. Copy your images into that folder
3. Reference them in your Markdown using an absolute path from the root:

```markdown
![Alt text for the image](/blog-images/my-new-post/my-image.png)
```

### Step 4: Write your content

Write standard Markdown below the frontmatter. The following are fully supported:

- **Headings** (`#`, `##`, `###`)
- **Bold**, *italic*, `inline code`
- Ordered and unordered lists
- **Code blocks** with syntax highlighting (specify the language after the opening ` ``` `):

  ````markdown
  ```python
  def hello():
      print("Hello World")
  ```
  ````

- **Images** (see Step 3)
- **Links**

### Step 5: Commit and push

Once done, commit your changes and deploy:

```bash
git add .
git commit -m "Add blog post: Your Post Title"
git push origin main
```

## 🛠️ Available Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the application for production (outputs to `dist/`).
- `npm run lint` - Runs ESLint to find code issues.
- `npm run preview` - Previews the production build locally.
- `npm run deploy` - Builds the app and deploys it to GitHub Pages.

## 📄 License & Credits

Designed and developed by Azam Afridi. All rights reserved.
