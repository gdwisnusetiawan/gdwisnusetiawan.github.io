export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span className="font-bold text-white">Gede Wisnu Setiawan</span>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                System status: online
            </span>
            <span className="hidden md:inline text-white/10">|</span>
            <span>Engineered in Indonesia &copy; 2026</span>
        </div>
        <div className="flex gap-4">
            <a href="https://github.com/gdwisnusetiawan" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/gdwisnusetiawan" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://instagram.com/gdwisnusetiawan" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <a href="https://x.com/gdwisnusetiawan" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">X</a>
        </div>
      </div>
    </footer>
  )
}

