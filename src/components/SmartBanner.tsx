
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const SmartBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReturningVisitor, setIsReturningVisitor] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('ai-workflow-visited');
    if (hasVisited) {
      setIsReturningVisitor(true);
      setIsVisible(true);
    } else {
      localStorage.setItem('ai-workflow-visited', 'true');
    }
  }, []);

  if (!isVisible || !isReturningVisitor) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-center">
        <p className="font-medium mr-4">
          👋 Welcome back! Ready for today's workflow?
        </p>
        <Button 
          size="sm" 
          variant="ghost" 
          className="text-white hover:bg-white/20 mr-2"
          onClick={() => window.location.href = '/vault'}
        >
          [INSERT RETURN CTA] <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-white hover:bg-white/20 p-1"
          onClick={() => setIsVisible(false)}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SmartBanner;
