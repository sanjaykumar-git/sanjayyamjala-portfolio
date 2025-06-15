
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, a shopping cart, and a checkout process.",
    image: `https://images.unsplash.com/photo-1556740738-b6a63e2775d2?w=600`,
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat App",
    description: "A web application enabling users to chat in real-time in different rooms, built with WebSockets.",
    image: `https://images.unsplash.com/photo-1553678324-f84674bd7b24?w=600`,
    tags: ["React", "Socket.IO", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with various chart types and filters.",
    image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600`,
    tags: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
}
