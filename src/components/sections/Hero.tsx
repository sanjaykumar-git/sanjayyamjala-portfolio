
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import AnimatedBackground from '@/components/layout/AnimatedBackground';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden text-primary-foreground">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm -z-10" />
      <AnimatedBackground />

      <div className="container mx-auto text-center px-4 z-10">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm Yamjala Sanjay Kumar
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Full-Stack Developer looking for Web and Software Development roles.
        </p>
        <p className="max-w-3xl mx-auto text-primary-foreground/70 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          I’m a passionate full-stack developer with hands-on experience building MERN stack apps. I enjoy solving real-world problems and constantly explore new technologies in web and cloud.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/sanjay-resume.pdf" download="Sanjay_Kumar_Resume.pdf">Download Resume</a>
          </Button>
        </div>
        <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a href="https://github.com/sanjaykumar-git" aria-label="Github" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Github size={28} /></a>
          <a href="https://linkedin.com/in/sanjay-yamjala" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Linkedin size={28} /></a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce z-10">
        <ArrowDown className="text-primary-foreground" size={24} />
      </a>
    </section>
  );
}
