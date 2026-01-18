import { Rocket, Globe, Briefcase, Network, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 space-y-24">
       {/* Header */}
       <section className="text-center max-w-3xl mx-auto space-y-6">
           <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
               SYSTEM_STATUS: ONLINE
           </div>
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
             From Solo Founder to <br/>
             <span className="text-muted-foreground">Distributed Systems Engineer</span>
           </h1>
           <p className="text-xl text-muted-foreground">
             Building scalable architectures across the archipelago. Turning complex business problems into elegant, distributed solutions.
           </p>
           <div className="flex justify-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> SURABAYA</span>
                <span>/</span>
                <span>BALI</span>
                <span>/</span>
                <span>LOMBOK</span>
           </div>
       </section>
       
       {/* Timeline Section */}
       <section>
          <div className="flex items-center gap-4 mb-12">
             <div className="h-8 w-1 bg-primary rounded-full"></div>
             <h2 className="text-2xl font-bold tracking-widest uppercase">The_Journey</h2>
          </div>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12 pb-12">
             {/* Item 1 */}
             <div className="relative pl-8 md:pl-12 group">
                 <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all"></div>
                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-primary font-mono text-xl font-bold">2022-Present</span>
                    <div>
                        <h3 className="text-2xl font-bold">The Scaler</h3>
                        <p className="text-sm font-mono text-muted-foreground mb-2">ACT IV</p>
                        <p className="text-muted-foreground max-w-xl">
                            Now focused on high-traffic distributed systems. Leveraging experience from the full lifecycle to build tools that scale across teams, timezones, and tech stacks.
                        </p>
                    </div>
                 </div>
             </div>
             
             {/* Item 2 */}
             <div className="relative pl-8 md:pl-12 group">
                 <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-600 ring-4 ring-background border border-black transition-all"></div>
                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-white/60 font-mono text-xl font-bold">2021-2022</span>
                    <div>
                        <h3 className="text-2xl font-bold">The Founder</h3>
                        <p className="text-sm font-mono text-muted-foreground mb-2">ACT III</p>
                        <p className="text-muted-foreground max-w-xl">
                            Built and launched a product from zero. Wore every hat: PM, Designer, Dev, and Support. Learned the hard constraints of business and the value of pragmatism.
                        </p>
                    </div>
                 </div>
             </div>
             
             {/* Item 3 */}
             <div className="relative pl-8 md:pl-12 group">
                 <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-600 ring-4 ring-background border border-black transition-all"></div>
                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-primary font-mono text-xl font-bold">2020</span>
                    <div>
                        <h3 className="text-2xl font-bold">The Architect</h3>
                        <p className="text-sm font-mono text-muted-foreground mb-2">ACT II</p>
                        <p className="text-muted-foreground max-w-xl">
                            Transitioned from writing scripts to designing systems. Deep dived into backend patterns, database optimization, and the art of clean, maintainable architecture.
                        </p>
                    </div>
                 </div>
             </div>
             
             {/* Item 4 */}
             <div className="relative pl-8 md:pl-12 group">
                 <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background border border-black transition-all"></div>
                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-primary font-mono text-xl font-bold">2019</span>
                    <div>
                        <h3 className="text-2xl font-bold">The Builder</h3>
                        <p className="text-sm font-mono text-muted-foreground mb-2">ACT I</p>
                        <p className="text-muted-foreground max-w-xl">
                            Started with pure curiosity. Spent sleepless nights mastering full-stack fundamentals, shipping MVP after MVP, and learning that "code that works" is just the beginning.
                        </p>
                    </div>
                 </div>
             </div>
          </div>
       </section>
       
       {/* Philosophy Section */}
       <section>
          <div className="flex items-center justify-center gap-4 mb-16">
             <h2 className="text-2xl font-mono font-bold tracking-widest text-center text-muted-foreground">
                &lt; HOW_I_WORK /&gt;
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                  { title: 'Business First', icon: Briefcase, desc: 'Pragmatic engineering over over-engineering. Code is a liability until it solves a user problem.' },
                  { title: 'System Thinking', icon: Network, desc: 'Seeing the forest and the trees. Understanding how micro-decisions affect the macro-architecture.' },
                  { title: 'Remote Native', icon: Globe, desc: 'Async communication mastery. Documenting decisions to allow teams to move fast without meetings.' },
                  { title: 'Continuous Ship', icon: Rocket, desc: 'CI/CD as a lifestyle. Small, frequent deployments reduce risk and increase feedback velocity.' }
              ].map((item, i) => (
                  <div key={i} className="group p-8 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/10 transition-all">
                      <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
       </section>
       
       {/* Footer CTA */}
       <section className="text-center py-12">
           <div className="relative h-24 w-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_20px_rgba(46,204,113,0.3)]">
                {/* Placeholder Avatar */}
                <div className="bg-neutral-800 w-full h-full flex items-center justify-center text-primary font-bold text-2xl">GW</div>
           </div>
           <p className="text-lg font-medium text-white mb-8">"When I'm not coding, I'm exploring the hidden beaches of Bali."</p>
           <Button size="lg" className="font-mono text-xs border border-primary text-primary bg-transparent hover:bg-primary/10">
              DOWNLOAD_RESUME
           </Button>
       </section>
    </div>
  )
}
