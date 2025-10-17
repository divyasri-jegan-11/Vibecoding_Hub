import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectShowcase = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Full-featured admin panel with real-time analytics, inventory management, and order tracking.",
      tags: ["React", "TypeScript", "Supabase", "Charts"],
      gradient: "from-purple-500 to-blue-500",
      buildTime: "45 minutes",
    },
    {
      title: "AI Chat Interface",
      description: "Conversational UI with streaming responses, message history, and markdown rendering.",
      tags: ["React", "AI", "WebSockets", "Markdown"],
      gradient: "from-pink-500 to-purple-500",
      buildTime: "30 minutes",
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio builder with drag-and-drop, custom themes, and export functionality.",
      tags: ["React", "DnD", "Theming", "Export"],
      gradient: "from-blue-500 to-cyan-500",
      buildTime: "1 hour",
    },
    {
      title: "Task Management App",
      description: "Collaborative task board with drag-and-drop, filters, assignments, and real-time sync.",
      tags: ["React", "Real-time", "Auth", "Database"],
      gradient: "from-orange-500 to-pink-500",
      buildTime: "50 minutes",
    },
  ];

  return (
    <section className="py-24 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built with
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Vibecoding</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects built entirely through conversation. No traditional coding required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden backdrop-blur-sm bg-card/50 border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group"
            >
              {/* Gradient Header */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    Built in <span className="font-semibold text-foreground">{project.buildTime}</span>
                  </span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
