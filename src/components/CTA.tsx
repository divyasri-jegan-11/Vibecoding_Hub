import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-glow)' }}
      ></div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to Build the
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Future of Apps?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers who are building production applications through conversation. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto group">
              Start Building Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            Used by developers at top companies worldwide
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
