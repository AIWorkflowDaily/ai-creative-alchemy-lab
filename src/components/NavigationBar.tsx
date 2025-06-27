
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/placeholder.svg" 
              alt="AI Workflow Daily Logo" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-bold text-xl text-slate-800">AI Workflow Daily</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">Tool Vault</a>
            <a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">Newsletter</a>
            <a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">Templates</a>
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
