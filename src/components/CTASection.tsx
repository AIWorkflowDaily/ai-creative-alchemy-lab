
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, ShoppingCart, FileText } from "lucide-react";

const CTASection = () => {
  const ctaItems = [
    {
      icon: Mail,
      label: "🚀 Get the Free AI Stack",
      description: "Essential tools and workflows",
      variant: "primary" as const,
      link: "https://aiworkflowdaily.substack.com/subscribe"
    },
    {
      icon: ShoppingCart,
      label: "🛒 Browse AI Templates",
      description: "Ready-to-use templates",
      variant: "secondary" as const,
      link: "https://gumroad.com/aiworkflowdaily"
    },
    {
      icon: FileText,
      label: "📁 Notion Vault",
      description: "Complete resource library",
      variant: "secondary" as const,
      link: "https://www.notion.so/AI-Tool-Vault"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ctaItems.map((item, index) => (
            <Card key={index} className="p-6 hover-scale cursor-pointer group border-2 hover:border-blue-200 transition-all duration-300">
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  item.variant === 'primary' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'bg-slate-100 group-hover:bg-blue-50'
                }`}>
                  <item.icon className={`w-6 h-6 ${
                    item.variant === 'primary' ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'
                  }`} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">{item.label}</h3>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                <Button 
                  className={item.variant === 'primary' 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full" 
                    : "w-full"
                  }
                  variant={item.variant === 'primary' ? 'default' : 'outline'}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
                    {item.variant === 'primary' ? 'Get Free Access' : 'Explore Now'}
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
