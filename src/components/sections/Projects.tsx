
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "MERN Stack Chat App",
    description: "A feature-rich real-time chat application using the MERN stack and Socket.io, enabling users to register, connect, and have private one-on-one conversations.",
    image: `/lovable-uploads/5a2f1494-0dd7-4b26-a662-e7d2ba7dffd7.png`,
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://mernstack-chat-app-1.onrender.com/",
    githubUrl: "https://github.com/sanjaykumar-git/mernstack-chat-app",
  },
  {
    title: "Pain Compass Journal",
    description: "A healthcare-focused web application to help users track, manage, and reflect on their pain experiences, featuring secure authentication and data journaling.",
    image: `/lovable-uploads/a1add859-12b7-4798-9036-7f22ce72eca4.png`,
    tags: ["React.js", "Tailwind CSS", "Supabase", "Lovable.dev"],
    liveUrl: "https://pain-compass-journal.lovable.app/auth",
    githubUrl: "#",
  }
];

export function Projects() {
  const { ref, inView } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="projects" 
      ref={ref}
      className={cn(
        "py-24 bg-card opacity-0",
        inView && "animate-fade-in-up"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">My Projects</h2>
        <div className="flex flex-wrap justify-center -m-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 w-full md:w-1/2 lg:w-1/3">
              <Card className="flex flex-col h-full overflow-hidden hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-display text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex w-full justify-between items-center">
                      <Button asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                      </Button>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github />
                      </a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
