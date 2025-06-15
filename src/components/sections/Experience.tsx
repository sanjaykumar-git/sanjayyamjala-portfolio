
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "BrightLearn (BrightGeeks Technologies Pvt. Ltd.)",
    period: "Feb 2024 – May 2024",
    location: "Remote",
    description: [
      "Developed a scalable E-Commerce web app using the MERN stack, improving performance by 40% and increasing user engagement by 30%.",
      "Implemented JWT authentication and role-based access, reducing security vulnerabilities by 60%.",
      "Tuned MongoDB queries to optimize API response times by 35%."
    ]
  }
];

export function Experience() {
  const { ref, inView } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="experience" 
      ref={ref}
      className={cn(
        "py-24 opacity-0",
        inView && "animate-fade-in-up"
      )}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-l-4 border-primary">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <div>
                    <CardTitle className="font-display text-2xl">{exp.role}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">{exp.company}</CardDescription>
                  </div>
                  <div className="text-left sm:text-right text-sm text-muted-foreground whitespace-nowrap">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
