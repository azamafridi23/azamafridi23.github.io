import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
// Important: highlight.js CSS provides the colors for code blocks
import 'highlight.js/styles/atom-one-dark.css'; 
import { getBlogBySlug } from "@/lib/blog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";

// The prose typography styles will be custom written in index.css to give you 
// maximum control without strictly depending on @tailwindcss/typography plugin issues.

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) return <Navigate to="/blog" replace />;

  const post = getBlogBySlug(slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 animate-fade-in">
        <Link 
          to="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all posts
        </Link>
        
        {/* Post Header */}
        <header className="mb-12 border-b border-border/40 pb-10">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary" className="px-3 py-1">
              {post.category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Markdown Content Rendering */}
        <article className="prose prose-slate dark:prose-invert lg:prose-lg max-w-none">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              // Add custom formatting overrides if needed
              img: (({node, ...props}) => <img className="rounded-lg border border-border shadow-md my-8 w-full" {...props} />),
              a: (({node, ...props}) => <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
