import { getAllProjects } from '@/lib/mdx'
import Link from 'next/link'
import { ArrowUpRight, Search } from 'lucide-react'

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="container mx-auto px-6 md:px-12 py-24 min-h-screen">
      {/* Header */}
      <div className="mb-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Works</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A collection of projects that showcase my technical expertise and creative problem-solving skills.
        </p>
        
        {/* Search Input */}
        <div className="relative max-w-md">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
           <input 
             type="text" 
             placeholder="Search projects..." 
             className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
           />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="group block p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(46,204,113,0.1)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Accent Decorator */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-primary" />
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.meta.title}</h3>
                  <div className="h-1 w-8 bg-primary/20 mt-2 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
              </div>
              <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded">
                {project.meta.year}
              </span>
            </div>
            
            <span className="text-xs font-mono text-primary/80 mb-3 block">
               {project.meta.category?.split('•')[0].trim() || 'Software'}
            </span>

            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
              {project.meta.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.meta.tech.slice(0, 3).map((tech) => (
                <span 
                  key={tech} 
                  className="text-[10px] font-mono px-2 py-1 rounded bg-black/40 text-primary/80 border border-primary/20"
                >
                  {tech}
                </span>
              ))}
              {project.meta.tech.length > 3 && (
                 <span className="text-[10px] font-mono px-2 py-1 rounded bg-black/40 text-muted-foreground border border-white/5">
                   +{project.meta.tech.length - 3}
                 </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
