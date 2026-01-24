import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { BlogPostFrontmatter, BlogPost } from '@/lib/blog'
import { TableOfContents } from '@/components/table-of-contents'
import { ShareButtons } from '@/components/share-buttons'
import type { Heading } from '@/lib/toc'
import { Badge } from '@/components/ui/badge'

interface BlogFrameProps {
  frontmatter: BlogPostFrontmatter
  nextPost?: BlogPost
  headings?: Heading[]
  slug: string // Added slug prop for sharing
  children: React.ReactNode
}

export function BlogFrame({ frontmatter, nextPost, headings = [], slug, children }: BlogFrameProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
        
        {/* Navigation */}
        <div className="mb-12">
           <Link 
             href="/blog" 
             className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors group"
           >
             <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
             BACK_TO_LOGS
           </Link>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="col-span-1 lg:col-span-9">
                
                {/* Header (Now inside grid) */}
                <header className="mb-16 border-b border-white/10 pb-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                      {frontmatter.title}
                    </h1>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        {/* Meta & Tags */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                               <span>
                                  {new Date(frontmatter.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                               </span>
                               <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                               <span>{frontmatter.readingTime || 5} min read</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {frontmatter.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="bg-white/5 text-neutral-400 hover:text-white border-white/10 font-mono text-xs font-normal">
                                        #{tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Share Buttons */}
                        <ShareButtons title={frontmatter.title} slug={slug} />
                    </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-loose prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
                  {children}
                </div>
                
                {/* Next Post Footer */}
                {nextPost && (
                    <div className="border-t border-white/10 pt-12 mt-24">
                        <Link href={`/blog/${nextPost.slug}`} className="group block">
                            <span className="text-sm font-mono text-muted-foreground mb-2 block">NEXT_LOG</span>
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                                    {nextPost.meta.title}
                                </h3>
                                <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block lg:col-span-3">
                 {/* Sticky positioning works best if parent has height */}
                 <div className="sticky top-12">
                     <TableOfContents headings={headings} />
                 </div>
            </aside>
        </div>
        
      </div>
    </div>
  )
}
