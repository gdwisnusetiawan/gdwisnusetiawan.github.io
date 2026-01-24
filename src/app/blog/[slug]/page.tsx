import { getBlogPostBySlug, getBlogCalls, getNextBlogPost } from '@/lib/blog'
import { BlogFrame } from '@/components/blog-frame'
import { notFound } from 'next/navigation'
import { ProjectContent } from '@/components/project-content'
import { extractHeadings } from '@/lib/toc'

export async function generateStaticParams() {
  const posts = getBlogCalls()
  
  if (posts.length === 0) {
    return [{ slug: 'no-posts' }]
  }

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Handle the dummy slug for empty state
  if (slug === 'no-posts') {
    notFound()
  }

  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const nextPost = getNextBlogPost(slug)
  const headings = extractHeadings(post.content)

  return (
    <BlogFrame frontmatter={post.meta} nextPost={nextPost} headings={headings} slug={slug}>
      <ProjectContent source={post.content} />
    </BlogFrame>
  )
}
