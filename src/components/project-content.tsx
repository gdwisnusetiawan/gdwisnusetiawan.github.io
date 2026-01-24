import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'

import { AlertTriangle, CheckCircle, Cpu, Image as ImageIcon, Terminal } from 'lucide-react'

const CustomH2 = (props: any) => {
  const text = props.children?.toString() || ''
  
  // Determine Icon based on keywords
  let Icon = Terminal
  if (text.includes('Problem')) Icon = AlertTriangle
  if (text.includes('Solution')) Icon = CheckCircle
  if (text.includes('Engineering Highlight') || text.includes('Technical')) Icon = Cpu
  if (text.includes('Visuals') || text.includes('Gallery') || text.includes('Demo')) Icon = ImageIcon

  return (
    <h2 {...props} className="text-2xl font-bold text-white flex items-center gap-3 mb-6 mt-12 group">
       <span className="p-2 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-5 w-5" />
       </span>
       {props.children}
    </h2>
  )
}

import { BentoGallery } from '@/components/mdx/bento-gallery'

const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-3xl font-bold text-white mb-6 mt-10" />
  ),
  h2: CustomH2,
  p: (props: any) => (
    <p {...props} className="text-[#8e8e8e] leading-relaxed mb-6" />
  ),
  ul: (props: any) => (
    <ul {...props} className="space-y-2 mb-6 text-[#8e8e8e] pl-1" />
  ),
  li: (props: any) => (
    <li {...props} className="flex items-start gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
      <span>{props.children}</span>
    </li>
  ),
  pre: (props: any) => (
    <pre {...props} className="bg-[#111] p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono border border-white/5" />
  ),
  code: (props: any) => (
    <code {...props} className="bg-white/10 rounded px-1.5 py-0.5 text-sm font-mono text-primary" />
  ),
  BentoGallery,
}

import rehypeSlug from 'rehype-slug'

const options = {
  theme: 'one-dark-pro',
  keepBackground: false,
}

export function ProjectContent({ source }: { source: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
          },
        }}
      />
    </div>
  )
}
