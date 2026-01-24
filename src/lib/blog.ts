import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'src/content/blog')

export type BlogPostFrontmatter = {
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime?: number
}

export type BlogPost = {
  slug: string
  meta: BlogPostFrontmatter
  content: string
}

export function getBlogCalls() {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }
  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }))
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const wordCount = content.split(/\s+/g).length
    const readingTime = Math.ceil(wordCount / 200)
    
    return {
      slug,
      meta: { ...data, readingTime } as BlogPostFrontmatter,
      content,
    }
  } catch (error) {
    return undefined
  }
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(blogDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const wordCount = content.split(/\s+/g).length
    const readingTime = Math.ceil(wordCount / 200)
    
    return {
      slug,
      meta: { ...data, readingTime } as BlogPostFrontmatter,
      content,
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.meta.date < b.meta.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getNextBlogPost(currentSlug: string): BlogPost | undefined {
  const allPosts = getBlogPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === currentSlug)
  
  if (currentIndex === -1 || currentIndex === allPosts.length - 1) {
    return allPosts[0] // Loop back to start
  }
  
  return allPosts[currentIndex + 1]
}
