
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Youtube, Music } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // Handle newsletter signup
  };

  return (
    <footer className="bg-slate-900 text-white py-16 px-4 border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/8cdee727-74fa-4d9b-9b5f-3445ce19a78d.png" 
                alt="AI Workflow Daily Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-bold text-xl">AI Workflow Daily</span>
            </div>
            <p className="text-slate-400 mb-6">
              Empowering creators with AI-powered productivity tools and workflows.
            </p>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white"
                required
              />
              <Button type="submit" size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-slate-500 mt-2">
              [INSERT EMAIL PLATFORM CODE]
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="[INSERT ABOUT LINK]" className="hover:text-white transition-colors">About</a></li>
              <li><a href="[INSERT CONTACT LINK]" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/vault" className="hover:text-white transition-colors">Prompt Vault</a></li>
              <li><a href="/workflows" className="hover:text-white transition-colors">Workflows</a></li>
              <li><a href="/templates" className="hover:text-white transition-colors">Templates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 mb-6">
              <li><a href="[INSERT LEGAL LINKS]" className="hover:text-white transition-colors">Terms & Privacy</a></li>
            </ul>
            
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <a href="[INSERT SOCIAL LINKS]" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                <a href="https://www.tiktok.com/@aiworkflowdaily" target="_blank" rel="noopener noreferrer">
                  <Music className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © [INSERT YEAR] AIWorkflowDaily. Made with ❤️ by [YOU/TEAM NAME]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
