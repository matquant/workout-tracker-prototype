'use client';

import { useState } from 'react';
import { Check, Edit2, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SetSchema } from '@/types/program';

interface SetRowProps {
  setIndex: number;
  set: SetSchema;
  isLogged: boolean;
  onLog: (data: { weight: number; reps: number; rpe?: number }) => void;
  onRest: () => void;
}

export function SetRow({ setIndex, set, isLogged, onLog, onRest }: SetRowProps) {
  const [weight, setWeight] = useState<string>('');
  const [reps, setReps] = useState<string>(set.reps.toString()); // Pre-fill target if number
  const [rpe, setRpe] = useState<string>('');
  const [isEditing, setIsEditing] = useState(!isLogged);

  const handleLog = () => {
    if (!weight || !reps) return;
    onLog({
      weight: parseFloat(weight),
      reps: parseInt(reps),
      rpe: rpe ? parseFloat(rpe) : undefined,
    });
    setIsEditing(false);
    onRest();
  };

  if (isLogged && !isEditing) {
    return (
      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg mb-2">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
            {setIndex + 1}
          </div>
          <div className="text-sm">
            <span className="font-semibold">{weight}</span> <span className="text-muted-foreground">kg</span>
            <span className="mx-2 text-muted-foreground">×</span>
            <span className="font-semibold">{reps}</span> <span className="text-muted-foreground">reps</span>
            {rpe && <span className="ml-2 text-xs text-muted-foreground">@ RPE {rpe}</span>}
          </div>
        </div>
        <button onClick={() => setIsEditing(true)} className="p-2 text-muted-foreground hover:text-foreground">
          <Edit2 size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-2 items-center mb-2 p-2 rounded-lg", isEditing ? "bg-card border shadow-sm" : "")}>
      <div className="text-xs font-bold text-muted-foreground w-6 text-center">{setIndex + 1}</div>
      
      <div className="flex flex-col">
        <label className="text-[10px] text-muted-foreground uppercase">kg</label>
        <input 
          type="number" 
          placeholder="0"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full bg-transparent border-b border-muted focus:border-primary outline-none py-1 text-center font-mono"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-[10px] text-muted-foreground uppercase">Reps</label>
        <input 
          type="number" 
          placeholder={set.reps.toString()}
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full bg-transparent border-b border-muted focus:border-primary outline-none py-1 text-center font-mono"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-[10px] text-muted-foreground uppercase">RPE</label>
        <input 
          type="number" 
          placeholder={set.suggestedRpe?.toString() || "-"}
          value={rpe}
          onChange={(e) => setRpe(e.target.value)}
          className="w-full bg-transparent border-b border-muted focus:border-primary outline-none py-1 text-center font-mono text-muted-foreground placeholder:text-muted/50"
        />
      </div>

      <button 
        onClick={handleLog}
        disabled={!weight || !reps}
        className="h-10 w-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center disabled:opacity-50 hover:bg-primary/90 transition-colors"
      >
        <Check size={20} />
      </button>
    </div>
  );
}
