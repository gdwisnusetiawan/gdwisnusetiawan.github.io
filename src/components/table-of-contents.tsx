"use client"

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Heading } from '@/lib/toc'

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0% -80% 0%' }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-32 w-full">
      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
        On This Page
      </h4>
      <ul className="space-y-3 border-l border-white/10">
        {headings.map((heading) => (
          <li key={heading.id} className="relative">
             <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth'
                })
                setActiveId(heading.id)
              }}
              className={cn(
                "block pl-4 text-sm transition-colors border-l-2 -ml-[1px]",
                activeId === heading.id
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-white"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
