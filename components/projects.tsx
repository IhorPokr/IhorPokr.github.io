export function Projects() {
  const projects = [
    {
      name: "To-do App",
      description: "A simple, clean task management app built in Swift. This project documents my journey learning iOS development from scratch - designing the UI, implementing core functionality, testing on real devices, and navigating the App Store submission process.",
      tech: "Swift, UIKit, CoreData, XCode",
      link: "#",
      status: "in-progress"
    }
  ]

  return (
    <div className="space-y-4 my-2">
      <h2 className="text-xl text-[var(--apple-blue)] font-bold">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-[var(--apple-border)] p-3 rounded">
            <div className="flex items-center">
              <div className="text-[var(--apple-blue)] font-bold">{project.name}</div>
              {project.status === "in-progress" && (
                <div className="ml-3 inline-flex items-center">
                  <span className="text-xs bg-[var(--apple-header)] rounded px-2 py-0.5 text-[var(--apple-warning)] relative">
                    coming soon
                    <span className="absolute top-0 right-0 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--apple-warning)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--apple-warning)]"></span>
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="text-sm mt-1">{project.description}</div>
            <div className="text-xs text-[var(--apple-subtle)] mt-2">Tech: {project.tech}</div>
            <div className="text-[var(--apple-blue)] text-sm mt-2 inline-block italic">
              Development in progress - will share link when available
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

