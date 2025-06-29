
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email });
    // Handle form submission here
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            [INSERT MAIN HEADLINE]
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto font-medium">
            [INSERT SUBHEADLINE]
          </p>
          
          {/* Email Capture Form */}
          <Card className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-300"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-300"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 text-lg"
              >
                [INSERT CTA TEXT] <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
            <p className="text-sm text-slate-400 mt-4">
              [INSERT SHORT DISCLAIMER]
            </p>
          </Card>
          
          {/* Social Proof */}
          <p className="text-lg text-slate-300 mb-12 font-medium">
            [INSERT SOCIAL PROOF]
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-white text-lg mb-4 font-medium">
              "INSERT TESTIMONIAL 1"
            </blockquote>
            <cite className="text-slate-300">— [INSERT NAME 1]</cite>
          </Card>
          
          <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-white text-lg mb-4 font-medium">
              "INSERT TESTIMONIAL 2"
            </blockquote>
            <cite className="text-slate-300">— [INSERT NAME 2]</cite>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
