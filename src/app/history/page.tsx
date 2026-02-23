'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background p-4 max-w-md mx-auto">
      <header className="flex items-center gap-4 mb-6">
        <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-muted">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold">Workout History</h1>
      </header>

      <div className="space-y-4">
        <div className="bg-card border rounded-xl p-4 opacity-50">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-bold">Full Body 1</div>
              <div className="text-xs text-muted-foreground">Yesterday</div>
            </div>
            <div className="bg-green-500/10 text-green-500 text-xs px-2 py-1 rounded font-bold">Completed</div>
          </div>
          <div className="text-sm">
            <div>Volume: 12,450 kg</div>
            <div>Duration: 1h 15m</div>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground py-8 text-sm">
          No other history found. Start a workout to see it here!
        </div>
      </div>
    </div>
  );
}
