import { BentoGrid, BentoItem } from '@/components/bento/BentoGrid'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Server, Layout, Database, TrendingUp, 
  Terminal, Globe, Palette, Layers, Box, Cpu
} from 'lucide-react'
import Link from 'next/link'

// Tech Category Component
const TechCategory = ({ title, techs, icon: Icon }: { title: string, techs: string[], icon: any }) => (
    <div className="p-6 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon size={20} />
            </div>
            <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {techs.map((tech, i) => (
                <Badge key={i} variant="secondary" className="bg-white/5 hover:bg-white/10 text-neutral-300 font-mono text-xs">
                    {tech}
                </Badge>
            ))}
        </div>
    </div>
)

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 space-y-32">
       {/* Hero Section */}
       <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-8">
          {/* Left Content */}
          <div className="space-y-8 max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Software Engineer <br/>
                <span className="text-muted-foreground">Build from Home</span><br/>
                Adventure Anywhere
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Bridging the gap between robust code, strategic design, and business value.
              </p>
              <div className="flex gap-4">
                  <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold" asChild>
                    <Link href="/projects">View My Work</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5" asChild>
                    <Link href="/about">Read My Story</Link>
                  </Button>
              </div>
          </div>
          
          {/* Right Visual - Code Block */}
          <div className="w-full max-w-md bg-[#0a0a0a] rounded-xl border border-white/10 p-6 font-mono text-sm relative overflow-hidden shadow-2xl shadow-primary/5 hidden lg:block">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
             <div className="text-emerald-400">package main</div>
             <br/>
             <div className="text-purple-400">type System struct {'{'}</div>
             <div className="pl-4 text-yellow-300">Uptime <span className="text-white">float64</span></div>
             <div className="pl-4 text-yellow-300">Status <span className="text-white">string</span></div>
             <div className="text-purple-400">{'}'}</div>
             <br/>
             <div className="text-blue-400">func main() {'{'}</div>
             <div className="pl-4 text-white">s := System{'{'}</div>
             <div className="pl-8 text-white">Uptime: <span className="text-green-400">99.99</span>,</div>
             <div className="pl-8 text-white">Status: <span className="text-green-400">"Online"</span>,</div>
             <div className="pl-4 text-white">{'}'}</div>
             <div className="text-blue-400">{'}'}</div>
             <div className="absolute bottom-4 right-4 text-xs text-white/20">sys_diagram.svg</div>
          </div>
       </section>
       
       {/* Selected Works Section */}
       <section>
          <div className="mb-10 border-l-4 border-primary pl-6">
             <h2 className="text-3xl font-bold text-white mb-2">Selected Works</h2>
             <p className="text-muted-foreground">A curated list of technical ventures and system optimizations.</p>
          </div>
          
          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-auto">
             {/* Card 1: McEasy TMS */}
             <BentoItem 
                className="col-span-1 border-white/5 hover:border-primary/50 transition-colors group/item h-full min-h-[220px]"
                title="McEasy TMS"
                icon={<Server className="h-4 w-4 text-primary" />}
                description={
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 text-xs">
                             <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Since 2022</Badge>
                             <Badge variant="outline">Golang</Badge>
                             <Badge variant="outline">TypeScript</Badge>
                             <Badge variant="outline">Python</Badge>
                             <Badge variant="outline">Microservices</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            McEasy is a leading logistics SaaS platform in Indonesia. Unlike my solo projects, here I work as part of a larger engineering squad, contributing to the backend microservices that power enterprise-level fleet management.
                        </p>
                    </div>
                }
                header={<></>}
             />
             
             {/* Card 2: Uptoday */}
             <BentoItem 
                className="col-span-1 border-white/5 hover:border-primary/50 transition-colors group/item h-full min-h-[220px]"
                title="Uptoday"
                icon={<Layout className="h-4 w-4 text-primary" />}
                description={
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 text-xs">
                             <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Since 2022</Badge>
                             <Badge variant="outline">Laravel</Badge>
                             <Badge variant="outline">Bootstrap</Badge>
                             <Badge variant="outline">PostgreSQL</Badge>
                             <Badge variant="outline">PDF</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A specialized school management and psychometric testing platform that digitizes standard psychological assessments (like VARK & SPM) to provide automated, instant student performance insights.
                        </p>
                    </div>
                }
                header={<></>}
             />
             
             {/* Card 3: Benning Clinic */}
             <BentoItem 
                className="col-span-1 border-white/5 hover:border-primary/50 transition-colors group/item h-full min-h-[220px]"
                title="Benning Clinic"
                icon={<Database className="h-4 w-4 text-primary" />}
                description={
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 text-xs">
                             <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Since 2021</Badge>
                             <Badge variant="outline">Laravel</Badge>
                             <Badge variant="outline">Bootstrap CSS</Badge>
                             <Badge variant="outline">MySQL</Badge>
                             <Badge variant="outline">SatuSehat</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            An all-in-one clinic management ecosystem that unifies internal operations (EMR, Pharmacy, Finance) while automating compliance with Indonesia's national SatuSehat (FHIR) health data platform.
                        </p>
                    </div>
                }
                header={<></>}
             />
             
             {/* Card 4: Uptoo */}
             <BentoItem 
                className="col-span-1 border-white/5 hover:border-primary/50 transition-colors group/item h-full min-h-[220px]"
                title="Uptoo ERP"
                icon={<TrendingUp className="h-4 w-4 text-primary" />}
                description={
                     <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 text-xs">
                             <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Since 2021</Badge>
                             <Badge variant="outline">Laravel</Badge>
                             <Badge variant="outline">PostgreSQL</Badge>
                             <Badge variant="outline">Datatables</Badge>
                             <Badge variant="outline">RBAC</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                             A battle-tested ERP solution integrating Point of Sale, Inventory, and Financial Accounting, used in production across 6 medium-to-small enterprises in Bali.
                        </p>
                    </div>
                }
                header={<></>}
             />
          </BentoGrid>
       </section>
       
       {/* Technical Toolkit Section */}
       <section>
          <div className="mb-10 border-l-4 border-primary pl-6">
             <h2 className="text-3xl font-bold text-white mb-2">Technical Toolkit</h2>
             <p className="text-muted-foreground">The arsenal behind the architecture.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TechCategory 
                title="Backend"
                icon={Terminal}
                techs={["Go (Golang)", "Python", "PHP", "Node.js (Express)"]}
              />
              <TechCategory 
                title="Frontend"
                icon={Layout}
                techs={["Next.js", "Nuxt.js", "React", "TypeScript"]}
              />
              <TechCategory 
                title="Data & Ops"
                icon={Database}
                techs={["PostgreSQL", "MySQL", "Docker"]}
              />
              <TechCategory 
                title="Design"
                icon={Palette}
                techs={["Canva", "Adobe Photoshop", "Adobe Illustrator"]}
              />
          </div>
       </section>
    </div>
  )
}
