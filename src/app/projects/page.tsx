"use client"
import { useState } from 'react'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Search, Command, LayoutGrid, Server, Database, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const categories = ["All", "SaaS", "GovTech", "Enterprise", "Open Source"]

const ProjectIcon = ({ category }: { category: string }) => {
    switch(category) {
        case "SaaS": return <Globe className="h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors" />
        case "GovTech": return <LayoutGrid className="h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors" />
        case "Enterprise": return <Database className="h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors" />
        default: return <Command className="h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors" />
    }
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")

  const filteredProjects = projects.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 min-h-screen">
        <div className="mb-12 space-y-4">
            <h1 className="text-3xl font-bold">Selected Work (2019-2026)</h1>
            <p className="text-muted-foreground max-w-2xl">
                A collection of scalable systems, open source contributions, and architectural experiments specializing in high-performance computing.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-8">
                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm font-medium transition-all border",
                                filter === cat 
                                    ? "bg-primary text-black border-primary shadow-[0_0_10px_rgba(46,204,113,0.3)]" 
                                    : "bg-transparent text-muted-foreground border-white/10 hover:border-white/20 hover:text-white"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                
                {/* Search */}
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input 
                        placeholder="Search projects..." 
                        className="flex h-10 w-full rounded-md border border-white/10 bg-neutral-900/50 px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="absolute right-3 top-2.5 text-[10px] text-muted-foreground border border-white/10 px-1 rounded bg-neutral-800">⌘K</div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="group relative rounded-xl border border-white/5 bg-neutral-900/20 p-6 hover:bg-neutral-900/40 transition-colors cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="h-12 w-12 rounded-lg bg-neutral-800/50 border border-white/5 flex items-center justify-center">
                                <ProjectIcon category={project.category} />
                            </div>

                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-secondary-foreground/70 mb-6 h-10 line-clamp-2">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t, i) => (
                                <Badge key={i} variant="secondary" className="bg-neutral-800/50 border-white/5 text-neutral-400 hover:text-white font-mono text-[10px] px-2">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                        
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 border border-primary/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[0_0_20px_rgba(46,204,113,0.1)]" />
                    </motion.div>
                ))}
            </AnimatePresence>
            
            {/* Add New Placeholder/Archive Link */}
            <motion.div 
               layout
               className="rounded-xl border border-dashed border-white/10 bg-transparent p-6 flex flex-col items-center justify-center min-h-[250px] text-muted-foreground hover:bg-white/5 transition-colors cursor-pointer"
            >
               <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-2xl font-light hover:bg-white/10 transition-colors">+</div>
               <span className="text-sm">Explore archived projects</span>
            </motion.div>
        </div>
    </div>
  )
}
