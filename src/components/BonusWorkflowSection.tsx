
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Gift, ArrowRight } from "lucide-react";

const BonusWorkflowSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-indigo-900">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-12 bg-white/10 backdrop-blur-md border-white/20 text-center">
          <div className="mb-8">
            <Gift className="w-16 h-16 text-coral-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              [INSERT LEAD MAGNET TITLE]
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              [INSERT DOWNLOAD DESCRIPTION]
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            <Button size="lg" className="bg-coral-500 hover:bg-coral-600 text-white font-bold px-8 py-4 text-lg">
              <Download className="mr-2 w-5 h-5" />
              [INSERT LINK OR EMBED CODE]
            </Button>
            
            <div className="text-slate-400">
              <p className="mb-2">Want even more advanced workflows?</p>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                [INSERT PAID UPGRADE OR LINK] <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BonusWorkflowSection;
