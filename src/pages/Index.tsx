
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/8cdee727-74fa-4d9b-9b5f-3445ce19a78d.png" 
            alt="AI Workflow Daily Logo" 
            className="w-20 h-20 mx-auto mb-6 rounded-2xl"
          />
          <h1 className="text-5xl font-bold text-white mb-4 font-space-grotesk">
            AI Workflow Daily
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Something amazing is coming soon. AI workflows, tools, and systems for productivity-obsessed creators and founders.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            asChild
            size="lg" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium w-full sm:w-auto"
          >
            <a 
              href="https://linktr.ee/aiworkflowdaily" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Visit Our Linktree
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          
          <div className="flex justify-center space-x-4 pt-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-slate-400 hover:text-white"
              asChild
            >
              <a 
                href="https://www.tiktok.com/@aiworkflowdaily" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 AI Workflow Daily. Made with ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
