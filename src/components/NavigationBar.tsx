
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/8cdee727-74fa-4d9b-9b5f-3445ce19a78d.png" 
              alt="AI Workflow Daily Logo" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-bold text-xl text-white">AI Workflow Daily</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/blog" className="text-slate-300 hover:text-indigo-400 transition-colors font-medium">Blog</a>
            <a href="/vault" className="text-slate-300 hover:text-indigo-400 transition-colors font-medium">Vault</a>
            <a href="/workflows" className="text-slate-300 hover:text-indigo-400 transition-colors font-medium">Workflows</a>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
