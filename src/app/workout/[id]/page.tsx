'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { activeProgram } from '../../../programs';
import { RestTimer } from '../../../components/RestTimer';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Types for logs (would match Prisma schema ideally)
interface SetLog {
  exerciseKey: string;
  setIndex: number;
  weight: number;
  reps: number;
  rpe?: number;
  completedAt: Date;
}

export default function WorkoutPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const day = activeProgram.days.find(d => d.key === params.id);
  
  const [logs, setLogs] = useState<SetLog[]>([]);
  const [restTimer, setRestTimer] = useState<{ active: boolean; duration: number } | null>(null);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`workout_progress_${params.id}`);
    if (!saved) return;

    try {
      const parsed: SetLog[] = JSON.parse(saved);
      if (parsed.length) {
        // initialize state once on mount without cascading renders
        setLogs(parsed);
      }
    } catch (e) {
      console.error("Failed to load progress", e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem(`workout_progress_${params.id}`, JSON.stringify(logs));
  }, [logs, params.id]);

  if (!day) return <div className="p-8 text-center">Workout not found</div>;

  const handleLogSet = (exerciseKey: string, setIndex: number, data: { weight: number, reps: number, rpe?: number }, restTime: number) => {
    const newLog: SetLog = {
      exerciseKey,
      setIndex,
      ...data,
      completedAt: new Date(),
    };
    
    // Remove existing log for this set if any (overwrite)
    const filtered = logs.filter(l => !(l.exerciseKey === exerciseKey && l.setIndex === setIndex));
    setLogs([...filtered, newLog]);

    // Start Rest Timer
    setRestTimer({ active: true, duration: restTime });
  };

  const getLog = (exerciseKey: string, setIndex: number) => {
    return logs.find(l => l.exerciseKey === exerciseKey && l.setIndex === setIndex);
  };

  const finishWorkout = () => {
    if (confirm("Finish workout? This will clear local progress.")) {
      // Here we would sync to DB
      localStorage.removeItem(`workout_progress_${params.id}`);
      router.push('/');
    }
  };

  return (
    <div className="pb-24 bg-background min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b px-4 py-3 flex items-center justify-between">
        <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-muted">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="font-bold text-sm uppercase tracking-wide truncate max-w-[200px]">{day.name}</h1>
        <div className="w-8" /> {/* Spacer */}
      </div>

      <div className="p-4 space-y-6 max-w-md mx-auto">
        {day.exercises.map((exercise) => (
          <div key={exercise.key} className="bg-card border rounded-xl overflow-hidden shadow-sm">
            <div className="bg-muted/30 px-4 py-3 border-b flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{exercise.name}</h3>
                {exercise.note && <p className="text-xs text-muted-foreground mt-1">{exercise.note}</p>}
              </div>
              <div className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border">
                {exercise.sets.length} sets
              </div>
            </div>

            <div className="p-2">
              <div className="grid grid-cols-[30px_1fr_1fr_1fr_40px] gap-2 px-2 py-1 text-[10px] text-muted-foreground uppercase font-bold text-center">
                <div>#</div>
                <div>kg</div>
                <div>Reps</div>
                <div>RPE</div>
                <div></div>
              </div>

              {exercise.sets.map((set, setIdx) => {
                const log = getLog(exercise.key, setIdx);
                return (
                  <SetRowComponent 
                    key={set.key}
                    index={setIdx}
                    target={set}
                    log={log}
                    onSave={(data) => handleLogSet(exercise.key, setIdx, data, set.restSeconds || 90)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
        <button 
          onClick={finishWorkout}
          className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <CheckCircle size={20} />
          Finish Workout
        </button>
      </div>

      {/* Rest Timer Overlay */}
      {restTimer && restTimer.active && (
        <RestTimer 
          duration={restTimer.duration} 
          onClose={() => setRestTimer(null)} 
        />
      )}
    </div>
  );
}

// Inner Component for Row Logic
interface SetRowProps {
  index: number;
  target: {
    reps: string;
    suggestedRpe?: number;
    restSeconds?: number;
  };
  log?: SetLog;
  onSave: (d: { weight: number; reps: number; rpe?: number }) => void;
}

function SetRowComponent({ index, target, log, onSave }: SetRowProps) {
  const [weight, setWeight] = useState(log?.weight?.toString() || '');
  const [reps, setReps] = useState(log?.reps?.toString() || target.reps.toString().replace(/[^\d]/g, '')); 
  const [rpe, setRpe] = useState(log?.rpe?.toString() || '');
  const [isEditing, setIsEditing] = useState(!log);

  const handleSave = () => {
    if (!weight || !reps) return;
    onSave({
      weight: parseFloat(weight),
      reps: parseInt(reps),
      rpe: rpe ? parseFloat(rpe) : undefined
    });
    setIsEditing(false);
  };

  if (!isEditing && log) {
    return (
      <div 
        onClick={() => setIsEditing(true)}
        className="grid grid-cols-[30px_1fr_1fr_1fr_40px] gap-2 items-center py-3 px-2 rounded-lg bg-green-500/10 border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-colors mb-1"
      >
        <div className="text-center font-bold text-green-600 text-sm">{index + 1}</div>
        <div className="text-center font-bold">{log.weight}</div>
        <div className="text-center font-bold">{log.reps}</div>
        <div className="text-center text-sm text-muted-foreground">{log.rpe || '-'}</div>
        <div className="flex justify-center text-green-600"><CheckCircle size={18} /></div>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-[30px_1fr_1fr_1fr_40px] gap-2 items-center py-2 px-2 mb-1 rounded-lg transition-colors", isEditing ? "bg-muted/30" : "")}>
      <div className="text-center text-sm font-bold text-muted-foreground">{index + 1}</div>
      
      <input 
        type="number" 
        inputMode="decimal"
        placeholder="kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full bg-background border rounded-md py-2 text-center text-lg font-bold focus:ring-2 focus:ring-primary outline-none"
      />

      <input 
        type="number" 
        inputMode="numeric"
        placeholder={target.reps}
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="w-full bg-background border rounded-md py-2 text-center text-lg font-bold focus:ring-2 focus:ring-primary outline-none"
      />

      <input 
        type="number" 
        inputMode="decimal"
        placeholder={target.suggestedRpe?.toString() ?? "-"}
        value={rpe}
        onChange={(e) => setRpe(e.target.value)}
        className="w-full bg-background border rounded-md py-2 text-center text-lg font-medium text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
      />

      <button 
        onClick={handleSave}
        disabled={!weight}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-all"
      >
        <CheckCircle size={20} />
      </button>
    </div>
  );
}
