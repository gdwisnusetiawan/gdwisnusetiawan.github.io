import { getProjectBySlug, getProjectSlugs, getNextProject } from '@/lib/mdx'
import { MDXContent } from '@/components/mdx-content'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, ArrowUpRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({
    slug: slug.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { meta, content } = project
  const nextProject = getNextProject(slug)

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
       {/* Back Link */}
      <div className="mb-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            BACK_TO_WORKS
          </Link>
      </div>

      <header className="mb-16 border-b border-white/10 pb-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
          <div className="space-y-6 max-w-3xl">
             <div className="space-y-2">
                <span className="text-primary font-mono text-xs tracking-wider uppercase">{meta.category}</span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{meta.title}</h1>
             </div>
             
             <p className="text-xl text-white font-medium leading-relaxed border-l-4 border-primary pl-6">
               "{meta.summary}"
             </p>
             
             <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-primary/70 mb-1">Role</span>
                    <span className="font-mono text-white">{meta.role}</span>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-primary/70 mb-1">Year</span>
                    <span className="font-mono text-white">{meta.year}</span>
                </div>
             </div>
          </div>

          <div className="flex md:flex-col gap-4 shrink-0">
            {meta.links?.demo && (
              <Button asChild variant="outline" className="border-primary/20 hover:border-primary/50 text-white bg-primary/10 hover:bg-primary/20 w-full md:w-auto justify-between group">
                <a href={meta.links.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            )}
            {meta.links?.repo && (
              <Button asChild variant="ghost" className="hover:bg-white/5 text-muted-foreground hover:text-white w-full md:w-auto justify-between group">
                <a href={meta.links.repo} target="_blank" rel="noopener noreferrer">
                   Source Code
                  <Github className="h-4 w-4 ml-2" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Tech Stack</span>
          <div className="flex flex-wrap gap-2">
            {meta.tech.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white hover:border-primary/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mb-24">
        <MDXContent source={content} />
      </main>

      {/* Next Project Footer */}
      {nextProject && (
        <div className="border-t border-white/10 pt-12">
            <Link href={`/projects/${nextProject.slug}`} className="group block">
                <span className="text-sm font-mono text-muted-foreground mb-2 block">NEXT_PROJECT</span>
                <div className="flex items-center justify-between">
                    <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                        {nextProject.meta.title}
                    </h3>
                    <ArrowRight className="h-8 w-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </div>
            </Link>
        </div>
      )}
    </div>
  )
}
