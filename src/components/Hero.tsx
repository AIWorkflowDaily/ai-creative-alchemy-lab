
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-32 px-4">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
          <span className="text-blue-700 text-sm font-medium">Welcome to AI Workflow Daily</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight animate-fade-in">
          Tools, guides, and systems to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            10x your creative output
          </span>{" "}
          using AI
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto animate-fade-in">
          Discover powerful workflows, templates, and resources designed to supercharge your productivity with artificial intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 group">
            <a href="https://alert-brian-aa5.notion.site/AI-Workflow-Daily-Free-Vault-21e277cd38a78074a4f6f86dda6c7daa?source=copy_link" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
              🚀 Get the Free AI Stack
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover-scale">
            <a href="https://gumroad.com/aiworkflowdaily" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Zap className="mr-2 w-5 h-5" />
              Browse AI Templates
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
