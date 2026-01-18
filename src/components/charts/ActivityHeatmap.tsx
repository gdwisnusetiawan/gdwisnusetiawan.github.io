"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

// Helper to get color intensity
const getColor = (count: number) => {
  if (count === 0) return "bg-white/5"
  if (count < 3) return "bg-emerald-900"
  if (count < 6) return "bg-emerald-700"
  if (count < 9) return "bg-emerald-500"
  return "bg-emerald-400"
}

export function ActivityHeatmap({ data }: { data: { date: string, count: number }[] }) {
  // Generate last 365 days
  const today = new Date()
  const days = []
  const dataMap = new Map(data.map(d => [d.date, d.count]))

  for (let i = 364; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split('T')[0]
    days.push({
      date: dateStr,
      count: dataMap.get(dateStr) || 0
    })
  }

  return (
    <div className="flex flex-wrap gap-1 max-w-full overflow-hidden">
        {days.map((day) => (
            <TooltipProvider key={day.date}>
                <Tooltip>
                    <TooltipTrigger>
                        <div 
                            className={cn("w-3 h-3 rounded-sm", getColor(day.count))}
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{day.date}: {day.count} contributions</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        ))}
    </div>
  )
}
