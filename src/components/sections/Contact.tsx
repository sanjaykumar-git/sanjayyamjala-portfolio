
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { ref, inView } = useScrollAnimation<HTMLElement>();
  const email = "sanjayyamjala3@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className={cn(
        "py-24 opacity-0",
        inView && "animate-fade-in-up"
      )}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-display font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="mb-12">Say Hello</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Send me a message</DialogTitle>
              <DialogDescription>
                I'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <ContactForm />
          </DialogContent>
        </Dialog>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/sanjaykumar-git" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={32}/></a>
          <a href="https://linkedin.com/in/sanjay-yamjala" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={32}/></a>
          <button onClick={handleCopyEmail} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Copy email address">
            <Mail size={32}/>
          </button>
        </div>
      </div>
    </section>
  );
}
