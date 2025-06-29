
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";

const PromptVaultSection = () => {
  const promptCards = [
    {
      title: "[INSERT PROMPT TITLE]",
      toolType: "[INSERT TOOL TYPE]",
      useCase: "[INSERT USE CASE]",
      workflowValue: "[INSERT VALUE PROP]"
    },
    {
      title: "[INSERT PROMPT TITLE]",
      toolType: "[INSERT TOOL TYPE]",
      useCase: "[INSERT USE CASE]",
      workflowValue: "[INSERT VALUE PROP]"
    },
    {
      title: "[INSERT PROMPT TITLE]",
      toolType: "[INSERT TOOL TYPE]",
      useCase: "[INSERT USE CASE]",
      workflowValue: "[INSERT VALUE PROP]"
    },
    {
      title: "[INSERT PROMPT TITLE]",
      toolType: "[INSERT TOOL TYPE]",
      useCase: "[INSERT USE CASE]",
      workflowValue: "[INSERT VALUE PROP]"
    },
    {
      title: "[INSERT PROMPT TITLE]",
      toolType: "[INSERT TOOL TYPE]",
      useCase: "[INSERT USE CASE]",
      workflowValue: "[INSERT VALUE PROP]"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Prompt Vault Preview
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get a taste of our battle-tested AI prompts that save hours every day
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {promptCards.map((prompt, index) => (
            <Card key={index} className="p-6 bg-slate-700/50 border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <Badge className="bg-indigo-600 text-white mb-2">
                  {prompt.toolType}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">
                  {prompt.title}
                </h3>
              </div>
              
              <div className="space-y-3 text-slate-300">
                <div>
                  <span className="font-semibold text-white">Use Case:</span>
                  <p className="text-sm">{prompt.useCase}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-white">Value:</span>
                  <p className="text-sm">{prompt.workflowValue}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-600">
                <div className="flex items-center text-indigo-400">
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Premium Prompt</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 text-lg">
            [INSERT UNLOCK CTA] <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromptVaultSection;
