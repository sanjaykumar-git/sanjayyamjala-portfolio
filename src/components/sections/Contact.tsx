
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-display font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <Button size="lg" asChild className="mb-12">
          <a href="mailto:hello@johndoe.com">Say Hello</a>
        </Button>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={32}/></a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={32}/></a>
          <a href="mailto:hello@johndoe.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={32}/></a>
        </div>
      </div>
    </section>
  );
}
