import { Card } from "@/components/ui/card";
import { Brain, Layers, Rocket, Sparkles, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Natural Language",
      description: "Describe what you want in plain English. No need to memorize syntax or frameworks.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Feedback",
      description: "See changes in real-time as you refine your ideas. Iterate at the speed of thought.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full Stack Ready",
      description: "Frontend, backend, database—build complete applications without context switching.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Production Quality",
      description: "Generate clean, maintainable code following best practices and modern patterns.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Type Safety",
      description: "Built-in TypeScript support ensures reliability and catches errors early.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Beautiful Defaults",
      description: "Responsive designs with modern UI components that look great out of the box.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ background: 'var(--gradient-glow)' }}
      ></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Vibecoding</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Break free from traditional development constraints. Build faster, iterate smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 backdrop-blur-sm bg-card/50 border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group"
            >
              <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
