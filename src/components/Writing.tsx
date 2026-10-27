import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getAllBlogs } from "@/lib/blog";

const series = [
  { title: "Statistics", prefix: "stats-", slug: "stats-p1-z-scores", description: "A 20-part learning series covering distributions, sampling, regression, and hypothesis testing." },
  { title: "Linear Algebra", prefix: "linear_algebra-", slug: "linear_algebra-p1", description: "A 10-part learning series exploring vectors, transformations, matrix operations, and eigenvalues." },
];
const Writing = () => {
  const posts = getAllBlogs();
  return (
    <section id="writing" className="portfolio-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-10"><h2 className="mb-4">Selected Writing</h2><p className="text-muted-foreground">Learning notes on the mathematical foundations behind my work.</p></div>
        <div className="grid sm:grid-cols-2 gap-6">{series.map(item => <Link key={item.slug} to={`/blog/${item.slug}`}><Card className="p-6 h-full card-hover"><p className="text-sm text-accent mb-3">{posts.filter(post => post.slug.startsWith(item.prefix)).length} learning notes</p><h3 className="text-xl mb-3">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p><span className="inline-flex items-center gap-2 text-sm font-medium">Start reading<ArrowRight className="h-4 w-4" /></span></Card></Link>)}</div>
        <div className="text-center mt-6"><Link to="/blog" className="text-sm text-accent underline underline-offset-4">Browse all writing</Link></div>
      </div>
    </section>
  );
};
export default Writing;
