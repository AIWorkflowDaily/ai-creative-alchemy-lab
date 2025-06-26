
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">⭐ What Creators Say</h2>
          <p className="text-xl text-slate-600">
            Join thousands of creators who've transformed their workflow
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
            <div className="text-center">
              <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <blockquote className="text-2xl font-medium text-slate-800 mb-6 leading-relaxed">
                "These templates saved me from burnout."
              </blockquote>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <cite className="text-slate-600 font-medium">— @someone</cite>
            </div>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-4 mt-8 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-slate-600">Active Users</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-slate-600">Templates</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-slate-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
