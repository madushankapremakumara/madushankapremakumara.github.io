import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "AWS/Vercel", level: 85 },
        { name: "Docker", level: 82 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 78 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A comprehensive overview of my technical skills and proficiency levels across different technologies and
            frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "GraphQL",
              "Redis",
              "Kubernetes",
              "Terraform",
              "Jest",
              "Cypress",
              "Figma",
              "Prisma",
              "Supabase",
              "Firebase",
              "Stripe",
              "WebRTC",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
