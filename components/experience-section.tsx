import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Lead a team of 5 developers in building scalable web applications. Architected microservices infrastructure that improved system performance by 40%. Mentored junior developers and established coding standards.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing applications. Implemented CI/CD pipelines that reduced deployment time by 60%. Collaborated with design team to create pixel-perfect user interfaces.",
      technologies: ["Vue.js", "Python", "Docker", "MongoDB", "Redis"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description:
        "Built responsive web applications for various clients. Optimized application performance resulting in 50% faster load times. Worked closely with UX designers to implement interactive user experiences.",
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            My professional journey showcasing growth, leadership, and technical expertise across different roles and
            companies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{experience.title}</CardTitle>
                    <div className="text-lg font-semibold text-primary">{experience.company}</div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
