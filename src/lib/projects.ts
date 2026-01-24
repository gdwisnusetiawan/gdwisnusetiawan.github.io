import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'src/content/projects')

export type ProjectParams = {
  slug: string
}

export type ProjectFrontmatter = {
  title: string
  category: string
  summary: string
  role: string
  year: string
  tech: string[]
  links?: {
    demo?: string
    repo?: string
  }
}

export type Project = {
  slug: string
  meta: ProjectFrontmatter
  content: string
}

export function getProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }))
}

export function getProjectBySlug(slug: string): Project | undefined {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      meta: data as ProjectFrontmatter,
      content,
    }
  } catch (error) {
    return undefined
  }
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug.slug))
    .filter((project): project is Project => project !== undefined)
    .sort((a, b) => parseInt(b.meta.year) - parseInt(a.meta.year))

  return projects
}

export function getNextProject(currentSlug: string): Project | undefined {
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex((p) => p.slug === currentSlug)
  
  if (currentIndex === -1 || currentIndex === allProjects.length - 1) {
    return allProjects[0] // Loop back to start
  }
  
  return allProjects[currentIndex + 1]
}
