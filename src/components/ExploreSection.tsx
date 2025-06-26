
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Mail, ShoppingCart, BookOpen, ArrowRight } from "lucide-react";

const ExploreSection = () => {
  const exploreItems = [
    {
      icon: Wrench,
      title: "🛠️ AI Tool Vault",
      description: "Comprehensive collection of AI tools and platforms",
      link: "View the Vault",
      url: "https://www.notion.so/AI-Tool-Vault"
    },
    {
      icon: Mail,
      title: "📩 Weekly Newsletter",
      description: "Latest AI workflows and productivity tips",
      link: "Subscribe",
      url: "https://aiworkflowdaily.substack.com"
    },
    {
      icon: ShoppingCart,
      title: "🛒 Gumroad Store",
      description: "Premium templates and resources",
      link: "Shop Templates",
      url: "https://gumroad.com/aiworkflowdaily"
    },
    {
      icon: BookOpen,
      title: "📘 AI for Creators Guide",
      description: "Complete guide to AI-powered creativity",
      link: "Read Now",
      url: "https://www.notion.so/AI-for-Creators-Guide"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">🔗 Explore</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Dive deeper into our ecosystem of AI-powered productivity resources
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {exploreItems.map((item, index) => (
            <Card key={index} className="p-8 hover-scale cursor-pointer group border hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto group/btn">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      {item.link}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
