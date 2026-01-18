"use client"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

export function VelocityChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
        <XAxis 
             dataKey="month" 
             stroke="#888888" 
             fontSize={12} 
             tickLine={false} 
             axisLine={false}
             tickFormatter={(value) => value.split('-')[1]} // Show MM
        />
        <YAxis 
             stroke="#888888" 
             fontSize={12} 
             tickLine={false} 
             axisLine={false} 
             tickFormatter={(value) => `${value}`} 
        />
        <Tooltip 
             contentStyle={{ backgroundColor: "#1a1a1a", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px" }} 
             itemStyle={{ color: "#fff" }}
             cursor={{ stroke: 'rgba(255,255,255,0.2)' }}
        />
        <Line 
             type="monotone" 
             dataKey="tickets" 
             stroke="#2ecc71" 
             strokeWidth={2} 
             dot={{ r: 3, fill: "#2ecc71" }} 
             activeDot={{ r: 6, fill: "#2ecc71" }} 
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
