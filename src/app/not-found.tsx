import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      {/* Large 404 */}
      <h1 className="text-[10rem] font-bold font-mono tracking-tighter text-white/5 leading-none select-none">
        404
      </h1>

      {/* JSON Error Block */}
      <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-xl p-6 font-mono text-sm text-left my-12 backdrop-blur-sm relative group hover:border-primary/30 transition-colors">
         {/* Decorator Dots */}
         <div className="flex gap-2 mb-4 opacity-50">
             <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
         </div>
         
         <pre className="text-muted-foreground overflow-x-auto">
            <code>
{`{
  "error": "404_NOT_FOUND",
  "message": "The requested route does not exist.",
  "status": "TERMINATED",
  "path": "window.location.pathname"
}`}
            </code>
         </pre>
      </div>

      {/* Return Home Button */}
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono font-bold tracking-wide">
        <Link href="/">
          RETURN_HOME
        </Link>
      </Button>
    </div>
  )
}
