'use client';

import Link from 'next/link';
import { activeProgram } from '../programs';
import { cn } from '../lib/utils';
import { Calendar, Play, BarChart2 } from 'lucide-react';

export default function Home() {
  // In real app, we would calculate "next workout" from DB history.
  // For prototype, we default to Week 1, Day 1.
  const nextWorkout = activeProgram.days[0];

  return (
    <main className="flex min-h-screen flex-col items-center p-4 max-w-md mx-auto">
      <header className="w-full flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Lifting Log</h1>
        <div className="flex gap-2">
           <Link href="/history" className="p-2 bg-secondary rounded-full"><BarChart2 size={20}/></Link>
        </div>
      </header>

      {/* Hero: Start Next Workout */}
      <div className="w-full bg-card border rounded-2xl p-6 mb-8 shadow-sm">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Up Next</h2>
        <div className="text-2xl font-bold mb-1">{nextWorkout.name}</div>
        <div className="text-sm text-muted-foreground mb-4">Week {nextWorkout.week} • {nextWorkout.exercises.length} Exercises</div>
        
        <Link 
          href={`/workout/${nextWorkout.key}`}
          className="flex items-center justify-center w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl gap-2 hover:opacity-90 transition-opacity"
        >
          <Play fill="currentColor" size={20} />
          Start Workout
        </Link>
      </div>

      {/* Week View */}
      <div className="w-full">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Calendar size={18} />
          Current Week (Week 1)
        </h3>
        <div className="space-y-3">
          {activeProgram.days.slice(0, 5).map(day => (
            <Link 
              href={`/workout/${day.key}`} 
              key={day.key}
              className={cn(
                "block p-4 rounded-xl border bg-card hover:bg-accent transition-colors",
                day.key === nextWorkout.key ? "border-primary/50" : ""
              )}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{day.name}</div>
                  <div className="text-xs text-muted-foreground">{day.exercises.length} exercises</div>
                </div>
                {/* Status indicator would go here */}
                <div className="w-2 h-2 rounded-full bg-muted"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
