import { Card } from "@/components/ui/card";
import { MessageSquare, Wand2, Eye, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Describe Your Vision",
      description: "Tell the AI what you want to build in plain English. Be as specific or high-level as you like.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "AI Generates Code",
      description: "Watch as production-ready code materializes instantly, following best practices and modern patterns.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Preview & Refine",
      description: "See your app live immediately. Tweak, adjust, and iterate through natural conversation.",
      color: "from-cyan-500 to-green-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deploy Instantly",
      description: "Ship your application to production with a single click. From idea to live app in minutes.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment in four simple steps. No setup, no configuration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
              )}

              <Card className="relative z-10 p-6 backdrop-blur-sm bg-card/50 border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-primary-foreground shadow-lg">
                  {index + 1}
                </div>

                {/* Icon with Gradient */}
                <div className="mb-4 mt-2">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${step.color} text-white group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
