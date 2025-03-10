"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface TerminalProps {
  onCommand: (command: string) => void
}

export function Terminal({ onCommand }: TerminalProps) {
  const [input, setInput] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [cursorPosition, setCursorPosition] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalLineRef = useRef<HTMLDivElement>(null)

  // Focus input when component mounts or updates
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      
      // Ensure the terminal input is in view
      terminalLineRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530) // Mac Terminal cursor blink speed

    return () => clearInterval(interval)
  }, [])

  // Handle click anywhere to focus input
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Only process if there's input
    if (input.trim()) {
      onCommand(input)
      setInput("")
      setCursorPosition(0)
    } else {
      // If empty command, still show a new prompt
      onCommand("")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setCursorPosition(e.target.selectionStart || 0)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Update cursor position on arrow keys, clicking, etc.
    setTimeout(() => {
      if (inputRef.current) {
        setCursorPosition(inputRef.current.selectionStart || 0)
      }
    }, 0)
  }

  const handleClick = () => {
    if (inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart || 0)
    }
  }

  return (
    <div className="flex items-start" ref={terminalLineRef}>
      <span className="text-[var(--apple-terminal-prompt)] mr-2">user@mac:~$</span>
      <form onSubmit={handleSubmit} className="flex-1">
        <div className="flex items-center relative font-mono">
          <div className="relative w-full">
            <span className="whitespace-pre text-[var(--apple-foreground)] inline-flex items-center">
              {input.substring(0, cursorPosition)}
              <span 
                className={`relative inline-block w-[7px] h-[14px] bg-[var(--apple-terminal-prompt)] ${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100 align-middle`}
                style={{ 
                  transform: 'translateY(1px)', 
                  marginLeft: '-1px', 
                  marginRight: '-1px' 
                }}
              ></span>
              {input.substring(cursorPosition)}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              className="absolute top-0 left-0 w-full opacity-0 bg-transparent outline-none border-none font-mono"
              aria-label="Terminal input"
              autoFocus
            />
          </div>
        </div>
      </form>
    </div>
  )
}

