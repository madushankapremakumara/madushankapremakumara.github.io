import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "A data visualization platform that uses machine learning to provide insights and predictions from business data.",
      image: "/analytics-dashboard.png",
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Mobile Banking App",
      description:
        "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
      image: "/mobile-banking-app.png",
      technologies: ["React Native", "Node.js", "JWT", "Redis", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A showcase of my recent work, demonstrating expertise across different technologies and problem domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
