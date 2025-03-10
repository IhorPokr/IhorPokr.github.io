export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Swift", "C++", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "SwiftUI", "UIKit"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Xcode", "Figma"],
    },
    {
      category: "Other",
      skills: ["RESTful APIs", "OpenAI API", "Supabase", "Stripe"],
    },
  ]

  return (
    <div className="space-y-4 my-2">
      <h2 className="text-xl text-[var(--apple-blue)] font-bold">Skills</h2>
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-[var(--apple-blue)] font-bold">{category.category}:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="px-2 py-1 bg-[var(--apple-header)] rounded text-sm border border-[var(--apple-border)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

