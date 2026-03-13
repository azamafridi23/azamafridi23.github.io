import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllBlogs, getAllCategories, BlogPost } from "@/lib/blog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const blogs = getAllBlogs();
  const categories = getAllCategories();

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Technical Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Notes, tutorials, and deep dives into AI, Data Science, and Software Development.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-10 animate-fade-in">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer text-sm py-1 px-3"
            onClick={() => setSelectedCategory(null)}
          >
            All Posts
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer text-sm py-1 px-3"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog: BlogPost) => (
              <Link to={`/blog/${blog.slug}`} key={blog.slug}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 group bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-secondary/50">
                        {blog.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground font-medium">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed line-clamp-3 mb-4">
                      {blog.description}
                    </CardDescription>
                    <div className="flex items-center text-sm font-medium text-primary">
                      Read more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground border border-dashed rounded-lg">
              No posts found for this category yet.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
