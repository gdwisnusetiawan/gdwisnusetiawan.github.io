import { getAllProjects } from '@/lib/projects'
import { ProjectsList } from '@/components/projects-list'


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
      </div>

      {/* Projects Grid */}
      <ProjectsList projects={projects} />
    </div>
  )
}
