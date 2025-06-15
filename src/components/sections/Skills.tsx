
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Database, Server, Smartphone, Brush } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const skillsData = [
  { icon: Code, title: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"] },
  { icon: Server, title: "Backend", skills: ["Node.js", "Express", "Python", "REST APIs"] },
  { icon: Database, title: "Databases", skills: ["PostgreSQL", "MongoDB", "Firebase"] },
  { icon: Brush, title: "UI/UX Design", skills: ["Figma", "Responsive Design", "Prototyping"] },
];

export function Skills() {
  const { ref, inView } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="skills" 
      ref={ref}
      className={cn(
        "py-24 opacity-0",
        inView && "animate-fade-in-up"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <Card key={index} className="bg-card hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center">
                <category.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="font-display text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-muted-foreground">
                  {category.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
