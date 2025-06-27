import { Button } from "@/components/ui/button";
import { Mail, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/placeholder.svg" 
                alt="AI Workflow Daily Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-bold text-xl">AI Workflow Daily</span>
            </div>
            <p className="text-slate-400">
              Empowering creators with AI-powered productivity tools and workflows.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AI Tool Vault</a></li>
              <li><a href="https://gumroad.com/aiworkflowdaily" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://www.tiktok.com/@aiworkflowdaily" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="https://www.youtube.com/@AIWorkflowDaily" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://github.com/aiworkflowdaily" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-slate-400 mb-4">Get the latest AI workflows and tools.</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full">
              <a href="https://mailchi.mp/3aa20d05c424/ai-workflow-daily" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
                <Mail className="mr-2 w-4 h-4" />
                Subscribe
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 AI Workflow Daily. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <a href="https://www.youtube.com/@AIWorkflowDaily" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
