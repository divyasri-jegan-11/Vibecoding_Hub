import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Play, Pause, Code, Eye } from "lucide-react";

const DemoShowcase = () => {
  const [activeDemo, setActiveDemo] = useState<string>("counter");
  const [counterValue, setCounterValue] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const demos = [
    {
      id: "counter",
      name: "Interactive Counter",
      description: "A simple counter with smooth animations",
      prompt: "Create a counter with increment and decrement buttons",
    },
    {
      id: "gradient",
      name: "Gradient Generator",
      description: "Live gradient preview and customization",
      prompt: "Build a gradient generator with color pickers",
    },
    {
      id: "todo",
      name: "Task Manager",
      description: "Add, complete, and delete tasks with state",
      prompt: "Make a todo list with add and delete functionality",
    },
  ];

  const codeExample = `// Built with vibecoding
const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="space-y-4">
      <div className="text-4xl font-bold 
        bg-gradient-to-r from-primary 
        to-accent bg-clip-text 
        text-transparent">
        {count}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
        <Button onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </div>
    </div>
  );
};`;

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            See It
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Live</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive demos built entirely through natural language prompts. Click to explore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Demo Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Choose a Demo</h3>
            {demos.map((demo) => (
              <Card
                key={demo.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-elegant)] border-2 ${
                  activeDemo === demo.id
                    ? "border-primary bg-card/50"
                    : "border-border bg-card/30"
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold mb-2">{demo.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {demo.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs">
                      <Code className="w-3 h-3" />
                      <span className="font-mono">{demo.prompt}</span>
                    </div>
                  </div>
                  {activeDemo === demo.id && (
                    <Play className="w-5 h-5 text-primary animate-pulse" />
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Live Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Live Preview</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCode(!showCode)}
              >
                {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
                {showCode ? "View" : "Code"}
              </Button>
            </div>

            <Card className="p-8 min-h-[400px] backdrop-blur-sm bg-card/50 border-2 border-border">
              {showCode ? (
                <div className="h-full">
                  <pre className="text-xs bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                  {/* Counter Demo */}
                  {activeDemo === "counter" && (
                    <>
                      <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {counterValue}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="hero"
                          onClick={() => setCounterValue(counterValue - 1)}
                        >
                          Decrement
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setCounterValue(0)}
                        >
                          Reset
                        </Button>
                        <Button
                          variant="hero"
                          onClick={() => setCounterValue(counterValue + 1)}
                        >
                          Increment
                        </Button>
                      </div>
                    </>
                  )}

                  {/* Gradient Demo Placeholder */}
                  {activeDemo === "gradient" && (
                    <div className="w-full h-64 rounded-lg bg-gradient-to-br from-primary via-accent to-primary animate-[gradient_8s_ease_infinite]"></div>
                  )}

                  {/* Todo Demo Placeholder */}
                  {activeDemo === "todo" && (
                    <div className="w-full space-y-3">
                      <div className="text-center text-muted-foreground mb-4">
                        Task Manager Demo
                      </div>
                      {["Design hero section", "Add animations", "Deploy to production"].map((task, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border"
                        >
                          <input type="checkbox" className="w-4 h-4" />
                          <span className="flex-1">{task}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoShowcase;
