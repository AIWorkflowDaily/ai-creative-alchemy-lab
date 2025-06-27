
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
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
            <a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">Tool Vault</a>
            <a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">Newsletter</a>
            <a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">Templates</a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="text-white">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
