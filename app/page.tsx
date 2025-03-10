"use client"

import { useState, useEffect, useRef } from "react"
import { Terminal } from "@/components/terminal"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import type { JSX } from "react/jsx-runtime"

export default function Home() {
  const [history, setHistory] = useState<Array<{ command: string; output: JSX.Element | string; showPrompt: boolean }>>([])
  const terminalRef = useRef<HTMLDivElement>(null)
  const [activeCommand, setActiveCommand] = useState<string | null>(null)
  const [showInput, setShowInput] = useState(true)

  const commands = [
    { name: "about", description: "Learn more about me" },
    { name: "projects", description: "View my portfolio projects" },
    { name: "skills", description: "See my technical skills" },
    { name: "contact", description: "Get my contact information" },
    { name: "clear", description: "Clear the terminal" },
  ]

  // Welcome message component to be reused
  const welcomeMessage = {
    command: "",
    output: (
      <div className="mb-4">
        <div className="text-[var(--apple-blue)] font-bold text-xl mb-2">Hey, my name is <span className="text-[var(--apple-blue)]">Ihor</span>!</div>
        <div className="text-[var(--apple-foreground)] mb-4">
          <p>You can navigate in two ways:</p>
          <p>1. Click on commands in the <span className="text-[var(--apple-blue)]">Docs</span> menu on the left</p>
          <p>2. Type commands directly in this terminal<span className="text-[var(--apple-subtle)]"> Example: about</span></p>
        </div>
        <div className="mt-4 text-[var(--apple-subtle)]">Type a command and press Enter to execute.</div>
      </div>
    ),
    showPrompt: true
  }

  useEffect(() => {
    // Add welcome message on initial load
    setHistory([welcomeMessage])
  }, [])

  useEffect(() => {
    // Scroll to bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (command: string) => {
    // Temporarily hide the input field while processing
    setShowInput(false)
    
    const cmd = command.trim().toLowerCase()
    let output: JSX.Element | string

    switch (cmd) {
      case "about":
        output = <About />
        setActiveCommand("about")
        break
      case "projects":
        output = <Projects />
        setActiveCommand("projects")
        break
      case "skills":
        output = <Skills />
        setActiveCommand("skills")
        break
      case "contact":
        output = <Contact />
        setActiveCommand("contact")
        break
      case "clear":
        // Reset to only show the welcome message instead of clearing everything
        setHistory([welcomeMessage])
        setActiveCommand(null)
        setShowInput(true)
        return
      case "":
        output = ""
        break
      default:
        output = <span className="text-[var(--apple-error)]">Command not found: {command}. Check the docs menu for available commands.</span>
    }

    // Add the command and its output to history
    setHistory((prev) => [...prev, { command, output, showPrompt: true }])
    
    // Show the input field again after a small delay to ensure renders are complete
    setTimeout(() => {
      setShowInput(true)
    }, 10)
  }

  const runCommand = (command: string) => {
    handleCommand(command)
  }

  return (
    <main className="flex h-screen overflow-hidden items-center justify-between p-4 bg-[var(--apple-background)] text-[var(--apple-foreground)] font-mono">
      <div className="w-full max-w-6xl mx-auto flex flex-col h-full">
        <div className="flex h-full gap-4 relative">
          {/* Sidebar */}
          <div className="w-64 bg-[var(--apple-header)] rounded-md overflow-hidden shrink-0 border border-[var(--apple-border)] h-full flex flex-col">
            <div className="bg-[var(--apple-header)] p-3 border-b border-[var(--apple-border)] flex-shrink-0">
              <h2 className="text-[var(--apple-foreground)] font-bold">Docs</h2>
            </div>
            <div className="p-2 overflow-y-auto flex-grow">
              {commands.map((cmd) => (
                <button
                  key={cmd.name}
                  onClick={() => runCommand(cmd.name)}
                  className={`w-full text-left p-2 rounded mb-1 transition-colors hover:bg-[var(--apple-background)] flex items-center ${
                    activeCommand === cmd.name ? "bg-[var(--apple-background)] text-[var(--apple-blue)]" : "text-[var(--apple-foreground)]"
                  }`}
                >
                  <span className="mr-2">{activeCommand === cmd.name ? "→" : "⌘"}</span>
                  <div>
                    <div className={activeCommand === cmd.name ? "text-[var(--apple-blue)]" : "text-[var(--apple-blue)]"}>
                      {cmd.name}
                    </div>
                    <div className="text-xs text-[var(--apple-subtle)]">{cmd.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Terminal */}
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            <div className="bg-[var(--apple-header)] rounded-t-md p-2 flex items-center gap-2 border-b border-[var(--apple-border)] flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[var(--apple-error)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--apple-warning)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--apple-success)]"></div>
              <div className="mx-auto text-sm text-[var(--apple-foreground)]">terminal — bash — 80×24</div>
            </div>

            <div ref={terminalRef} className="flex-1 bg-[var(--apple-background)] p-4 overflow-y-auto rounded-b-md border-x border-b border-[var(--apple-border)]">
              {history.map((item, index) => (
                <div key={index} className="mb-2">
                  {item.command && (
                    <div className="flex">
                      <span className="text-[var(--apple-terminal-prompt)] mr-2">user@mac:~$</span>
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div className="ml-0 mt-1 mb-3">{item.output}</div>
                </div>
              ))}

              {showInput && <Terminal onCommand={handleCommand} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

