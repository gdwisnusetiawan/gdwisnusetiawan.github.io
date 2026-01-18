import metrics from '@/data/dashboard-metrics.json'
import { VelocityChart } from '@/components/charts/VelocityChart'
import { DistributionChart } from '@/components/charts/DistributionChart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Clock, Zap, BarChart2 } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12 space-y-8">
      {/* Header */}
        <div className="space-y-1">
            <h1 className="text-3xl font-bold">Engineering Overview</h1>
            <p className="text-muted-foreground text-sm">Real-time metrics derived from work logs.</p>
        </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Metric 1 */}
        <Card className="bg-neutral-900/50 border-white/5 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Deep Work</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-white">{metrics.total_hours.toLocaleString()} <span className="text-xs text-muted-foreground font-sans">hrs</span></div>
            <p className="text-xs text-muted-foreground mt-1">Logged active coding time</p>
          </CardContent>
        </Card>
        
         {/* Metric 2 */}
        <Card className="bg-neutral-900/50 border-white/5 backdrop-blur">
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Tickets</CardTitle>
            <Zap className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-white">{metrics.total_tickets.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Tasks completed to production</p>
          </CardContent>
        </Card>
        
        {/* Metric 3 */}
         <Card className="bg-neutral-900/50 border-white/5 backdrop-blur">
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Weekly Velocity</CardTitle>
            <BarChart2 className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-white">
                {Math.round(metrics.total_hours / (metrics.ticket_velocity.length * 4.3))} <span className="text-xs text-muted-foreground font-sans">hrs</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 text-green-400">Consistent throughput</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Velocity Chart */}
        <Card className="col-span-full lg:col-span-4 bg-neutral-900/50 border-white/5 backdrop-blur">
          <CardHeader>
            <CardTitle>Ticket Velocity Trend (Monthly)</CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-[300px] w-full">
                <VelocityChart data={metrics.ticket_velocity} />
            </div>
          </CardContent>
        </Card>
        
        {/* Distribution Chart */}
        <Card className="col-span-full lg:col-span-3 bg-neutral-900/50 border-white/5 backdrop-blur">
          <CardHeader>
            <CardTitle>Work Distribution</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="h-[300px] w-full">
                <DistributionChart data={metrics.work_distribution} />
             </div>
          </CardContent>
        </Card>
      </div>
      
    </div>
  )
}
