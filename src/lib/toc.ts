export type Heading = {
  id: string
  text: string
  level: number
}

export function extractHeadings(source: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.*)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(source)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    // Simple slugify: lowercase, replace spaces with dashes, remove non-alphanumeric chars
    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')
    
    headings.push({ id, text, level })
  }

  return headings
}
