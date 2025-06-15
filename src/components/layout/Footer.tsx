
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-card">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-center md:text-left mb-4 md:mb-0">
          © 2025 Yamjala Sanjay Kumar. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/sanjaykumar-git" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
          <a href="https://linkedin.com/in/sanjay-yamjala" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
          <a href="mailto:sanjayyamjala3@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail /></a>
        </div>
      </div>
    </footer>
  );
}
