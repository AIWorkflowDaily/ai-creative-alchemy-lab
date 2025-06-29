
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const BlogTeaserSection = () => {
  const blogPosts = [
    {
      title: "[INSERT POST TITLE]",
      imageUrl: "[INSERT IMAGE LINK OR PLACEHOLDER]",
      summary: "[INSERT POST SUMMARY]",
      slug: "[KEYWORD-SLUG]"
    },
    {
      title: "[INSERT POST TITLE]",
      imageUrl: "[INSERT IMAGE LINK OR PLACEHOLDER]",
      summary: "[INSERT POST SUMMARY]",
      slug: "[KEYWORD-SLUG]"
    },
    {
      title: "[INSERT POST TITLE]",
      imageUrl: "[INSERT IMAGE LINK OR PLACEHOLDER]",
      summary: "[INSERT POST SUMMARY]",
      slug: "[KEYWORD-SLUG]"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Latest AI Workflows
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stay ahead with cutting-edge strategies and actionable insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 overflow-hidden hover:border-indigo-500 transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-slate-600 flex items-center justify-center">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-slate-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>New Post</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-300 mb-4 line-clamp-3">
                  {post.summary}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-indigo-400 hover:text-indigo-300 p-0 h-auto"
                  onClick={() => window.location.href = `/blog/${post.slug}`}
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            View All Posts <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaserSection;
