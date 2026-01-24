"use client"

import { Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react'
import { useState } from 'react'

export function ShareButtons({ title, slug }: { title: string, slug: string }) {
  const [copied, setCopied] = useState(false)
  
  const url = `https://gdwisnusetiawan.com/blog/${slug}`

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mr-2">Share</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all"
          title={`Share on ${link.name}`}
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="p-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all"
        title="Copy Link"
      >
        {copied ? (
           <Check className="h-4 w-4 text-primary" />
        ) : (
           <LinkIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}
