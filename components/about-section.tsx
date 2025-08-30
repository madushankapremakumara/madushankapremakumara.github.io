import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions through creative thinking.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams to deliver exceptional results.",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and frameworks in the ever-evolving tech landscape.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            I'm a passionate software engineer with 5+ years of experience building scalable web applications and
            leading development teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development began with a curiosity about how things work under the hood. This
              curiosity has driven me to master both frontend and backend technologies, always staying current with
              industry best practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in React, Node.js, and cloud technologies, with a strong focus on creating user-centric
              applications that solve real-world problems. When I'm not coding, you'll find me contributing to open
              source projects or mentoring junior developers.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
