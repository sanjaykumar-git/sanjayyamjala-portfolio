
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
              src={`/lovable-uploads/e5a6c7a2-7194-4632-b5b4-990d64de2fde.png`}
              alt="Yamjala Sanjay Kumar" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-primary"
            />
          </div>
          <div className="w-full md:w-2/3 text-lg text-muted-foreground space-y-4 text-center md:text-left">
            <p>
              Hello! I'm Sanjay, a passionate full-stack developer. My journey into web development has been driven by a desire to solve real-world problems and build meaningful applications.
            </p>
            <p>
              I have hands-on experience building MERN stack applications and I thrive on the challenge of learning and implementing new technologies, especially in web and cloud environments.
            </p>
            <p>
              I am currently looking for new opportunities in web and software development. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
