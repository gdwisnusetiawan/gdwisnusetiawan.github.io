import { Rocket, Globe, Briefcase, Layers, MapPin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 space-y-24">
       {/* Hero Section */}
       <section className="text-center max-w-4xl mx-auto space-y-6">
           <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
               <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
               SYSTEM_STATUS: ONLINE
           </div>
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
             From Solo Founder to <br/>
             <span className="text-muted-foreground">Distributed Systems Engineer</span>
           </h1>
           <p className="text-xl text-muted-foreground">
             Turning complex business problems into elegant solutions.
           </p>
           <div className="flex justify-center gap-4 text-xs font-mono text-muted-foreground items-center">
                <MapPin className="h-4 w-4 text-primary" />
                <span>SURABAYA</span>
                <span>/</span>
                <span>BALI</span>
                <span>/</span>
                <span>LOMBOK</span>
           </div>
       </section>
       
       {/* The Journey Section */}
       <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="text-2xl font-bold tracking-widest uppercase"><span className="text-primary">//</span> THE_JOURNEY</h2>
          </div>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12 pb-12">
             {/* Item 1 */}
             <div className="relative pl-8 md:pl-12 group">
                 <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all"></div>
                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-primary font-mono text-xl font-bold min-w-[140px]">2022-Present</span>
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
                 <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-transparent border-2 border-muted-foreground ring-4 ring-background transition-all"></div>
                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-primary font-mono text-xl font-bold min-w-[140px]">2021</span>
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
                 <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-transparent border-2 border-muted-foreground ring-4 ring-background transition-all"></div>
                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-primary font-mono text-xl font-bold min-w-[140px]">2020</span>
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
                 <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-transparent border-2 border-muted-foreground ring-4 ring-background transition-all"></div>
                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-primary font-mono text-xl font-bold min-w-[140px]">2019</span>
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
       
       {/* Experience Section */}
       <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
             <h2 className="text-2xl font-bold tracking-widest uppercase"><span className="text-primary">[</span> EXPERIENCE <span className="text-primary">]</span></h2>
          </div>
          
          <div className="space-y-8">
              {[
                {
                    role: "Software Engineer",
                    company: "McEasy",
                    logo: "/assets/logos/mceasy.png",
                    type: "Full-time",
                    date: "Aug 2022 - Present",
                    duration: "3 yrs 7 mos", // Based on 2026 current date
                    location: "Surabaya, East Java, Indonesia",
                    mode: "On-site"
                },
                {
                    role: "Lead Full Stack Software Engineer",
                    company: "PT Energi Djiwa Muda",
                    logo: "/assets/logos/edm.jpg",
                    type: "Full-time",
                    date: "Jul 2021 - Aug 2022",
                    duration: "1 yr 2 mos",
                    location: "Denpasar, Bali, Indonesia",
                    mode: "On-site"
                },
                {
                    role: "Software Engineer",
                    company: "CV Sinar Laut (Trackscope)",
                    logo: "/assets/logos/trackscope.png",
                    type: "Full-time",
                    date: "Nov 2020 - Jun 2021",
                    duration: "8 mos",
                    location: "Surabaya, East Java, Indonesia",
                    mode: "On-site"
                },
                {
                    role: "Software Engineer",
                    company: "PT. Tatacipta Teknologi Indonesia",
                    logo: "/assets/logos/tati.png",
                    type: "Internship",
                    date: "Aug 2020 - Oct 2020",
                    duration: "3 mos",
                    location: "Surabaya, East Java, Indonesia",
                    mode: "On-site"
                }
              ].map((job, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                      <div className="h-12 w-12 rounded bg-white flex items-center justify-center shrink-0 border border-white/10 overflow-hidden">
                          <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                          <h3 className="text-lg font-bold text-white">{job.role}</h3>
                          <div className="text-sm font-medium text-white/90">
                            {job.company} · {job.type}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 font-mono">
                            {job.date} · {job.duration}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                              {job.location} · {job.mode}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
       </section>
       
       {/* Education Section */}
       <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
             <h2 className="text-2xl font-bold tracking-widest uppercase"><span className="text-primary">{'{'}</span> EDUCATION <span className="text-primary">{'}'}</span></h2>
          </div>
          
           <div className="space-y-8">
              {[
                {
                    school: "Institut Teknologi Sepuluh Nopember (ITS)",
                    logo: "/assets/logos/its.png",
                    degree: "Magister Manajemen Teknologi, Information Technology Project Management",
                    date: "Aug 2022 - Feb 2025"
                },
                {
                    school: "Universitas Surabaya (UBAYA)",
                    logo: "/assets/logos/ubaya.png",
                    degree: "Sarjana Komputer, Information Technology",
                    date: "2016 - 2021"
                }
              ].map((edu, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                      <div className="h-12 w-12 rounded bg-white flex items-center justify-center shrink-0 border border-white/10 overflow-hidden">
                          <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain p-1" />
                      </div>
                      <div className="flex-1">
                          <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                          <div className="text-sm font-medium text-white/90">
                            {edu.degree}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 font-mono">
                            {edu.date}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
       </section>
       
       {/* Philosophy Section */}
       <section className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
             <h2 className="text-2xl font-mono font-bold tracking-widest text-center text-white">
                <span className="text-primary">&lt;</span> HOW_I_WORK <span className="text-primary">/&gt;</span>
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  { title: 'Business First', icon: Briefcase, desc: 'Code is a liability until it solves a user problem.' },
                  { title: 'Clean Architecture', icon: Layers, desc: 'Building robust systems that survive scale.' },
                  { title: 'Adventure Anywhere', icon: Globe, desc: 'Balancing high-performance engineering with a life well-lived.' },
              ].map((item, i) => (
                  <div key={i} className="group p-8 rounded-xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-white/10 transition-all">
                      <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
       </section>
       
       {/* The Story Section */}
       <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
             <h2 className="text-2xl font-bold tracking-widest uppercase"><span className="text-primary">/*</span> THE_STORY <span className="text-primary">*/</span></h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
             <p>
                I’m a Software Engineer with over 6 years of experience from solo founder to distributed systems engineer in the Surabaya startup ecosystem, specializing in transforming complex business challenges into intuitive, scalable digital solutions.
             </p>
             <p>
                My journey is unique—it has taken me from the fast-paced tech scenes of Surabaya to the beginning of my business in Bali. This background gives me a distinct perspective: I don't just look at code syntax; I look at market needs, operational efficiency, and how a product actually works for real people.
             </p>
             <p>
                Currently, I spend my time building robust backend systems (Go, Python, TypeScript) and crafting modern frontends (Next.js, Nuxt.js). Whether it's developing a custom ERP for a beauty clinic or an online psychological test platform for schools, I am driven by one goal: creating value through technology.
             </p>
             <p>
                Beside coding, I'm exploring entrepreneurial ideas, and designing digital solutions.
             </p>
          </div>
       </section>
       
       {/* Closing CTA */}
       <section className="text-center py-12">
           <div className="relative h-24 w-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_20px_rgba(46,204,113,0.3)]">
                <img src="/assets/profile.png" alt="Profile" className="w-full h-full object-cover" />
           </div>
           <p className="text-lg font-medium text-white mb-8">"When I'm not coding, I'm enjoying life with my wife."</p>
           <Button size="lg" className="font-mono text-xs border border-primary text-primary bg-transparent hover:bg-primary/10 gap-2" asChild>
              <a href="/files/resume.pdf" download="Gede_Wisnu_Setiawan_Resume.pdf">
                <Download className="h-4 w-4" />
                Get My Resume
              </a>
           </Button>
       </section>
    </div>
  )
}
