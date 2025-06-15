
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function About() {
  const { ref, inView } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="about" 
      ref={ref}
      className={cn(
        "py-24 bg-card opacity-0",
        inView && "animate-fade-in-up"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop`}
              alt="John Doe" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-primary"
            />
          </div>
          <div className="w-full md:w-2/3 text-lg text-muted-foreground space-y-4 text-center md:text-left">
            <p>
              Hello! I'm John, a developer with a passion for creating clean, efficient, and user-friendly applications. My journey into web development started years ago, and I've been hooked ever since.
            </p>
            <p>
              I thrive on solving complex problems and learning new technologies. When I'm not coding, you can find me exploring the great outdoors, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </p>
            <p>
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
