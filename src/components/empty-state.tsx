import { Terminal, SearchX } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EmptyStateProps {
  onClear: () => void
  query?: string
}

export function EmptyState({ onClear, query }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center animate-in fade-in zoom-in-95 duration-300 w-full">
      {/* Icon */}
      <div className="bg-white/5 p-4 rounded-full mb-6 relative">
          <Terminal className="h-12 w-12 text-muted-foreground opacity-50" />
          <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1">
              <SearchX className="h-4 w-4 text-muted-foreground" />
          </div>
      </div>

      {/* Main Heading */}
      <h3 className="text-xl font-bold text-white mb-3">No results found</h3>

      {/* Subtext Code Style */}
      <div className="bg-black/40 border border-white/10 rounded px-3 py-1.5 mb-8">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary mr-2">{'>'}</span>
          Query "{query}" returned 0 records.
        </p>
      </div>

      {/* Clear Button */}
      <Button 
        variant="outline" 
        onClick={onClear}
        className="border-white/10 text-muted-foreground hover:text-white hover:bg-white/5 hover:border-primary/50 transition-all"
      >
        Clear Search
      </Button>
    </div>
  )
}
