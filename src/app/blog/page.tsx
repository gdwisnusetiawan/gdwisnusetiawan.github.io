import { getBlogPosts } from '@/lib/blog'
import { BlogList } from '@/components/blog-list'

export const metadata = {
  title: 'Engineering Log | Wisnu Setiawan',
  description: 'Documenting my technical journey, decisions, and learnings as a Backend Engineer.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="container mx-auto px-6 md:px-12 py-24 min-h-screen">
      {/* Header */}
      <div className="mb-20 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Engineering Log
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Documenting my technical journey, decisions, and learnings as a Software Engineer. <span className="text-white/80">Less polished, more honest.</span>
        </p>
      </div>

      {/* BlogList takes full width of the container */}
      <div className="w-full">
        <BlogList posts={posts} />
      </div>
    </div>
  )
}
