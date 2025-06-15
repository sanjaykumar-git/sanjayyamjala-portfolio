
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto text-center px-4">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm John Doe
        </h1>
        <p className="text-xl md:text-2xl text-primary mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          A passionate Software Developer from Earth.
        </p>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          I specialize in building exceptional and accessible digital experiences. Currently, I'm focused on building web applications with React and modern web technologies.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#">Download Resume</a>
          </Button>
        </div>
        <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors"><Github size={28} /></a>
          <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={28} /></a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce">
        <ArrowDown className="text-primary" size={24} />
      </a>
    </section>
  );
}
