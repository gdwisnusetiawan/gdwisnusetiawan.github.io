"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Search } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'
import { EmptyState } from '@/components/empty-state'

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase()
    return (
      post.meta.title.toLowerCase().includes(query) ||
      post.meta.excerpt.toLowerCase().includes(query) ||
      post.meta.tags.some((tag) => tag.toLowerCase().includes(query))
    )
  })

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center w-full min-h-[50vh]">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
             <h3 className="text-xl font-bold text-white mb-2">System Log Empty</h3>
             <p className="text-muted-foreground font-mono text-sm">No engineering logs have been initialized yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <div className="relative max-w-md">
         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
         <input 
           type="text" 
           placeholder="Search articles..." 
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
           className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
         />
      </div>

      {/* Blog List - Grid or Vertical Stack with separation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article 
              key={post.slug} 
              className="group relative flex flex-col space-y-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                  {/* Date */}
                  <div className="text-sm text-muted-foreground font-mono">
                    {new Date(post.meta.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.meta.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                {post.meta.excerpt}
              </p>

              {/* Read more & Tags */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-2 relative z-10"> 
                  {post.meta.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-black/20 text-neutral-300 font-mono text-xs px-2 py-0.5 border border-white/5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full">
            <EmptyState onClear={() => setSearchQuery('')} query={searchQuery} />
          </div>
        )}
      </div>
    </div>
  )
}
