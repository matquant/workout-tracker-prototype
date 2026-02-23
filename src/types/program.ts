export type SetType = 'warmup' | 'working' | 'accessory';

export interface SetSchema {
  key: string; // unique identifier within exercise
  type: SetType;
  reps: string; // e.g., "8", "8-10", "AMRAP"
  suggestedRpe?: number;
  restSeconds?: number;
}

export interface ExerciseSchema {
  key: string; // unique identifier within day
  name: string;
  note?: string;
  sets: SetSchema[];
}

export interface DaySchema {
  key: string; // e.g., "wk1_day1"
  week: number;
  dayNumber: number;
  name: string; // e.g., "Full Body 1"
  exercises: ExerciseSchema[];
}

export interface ProgramSchema {
  version: string;
  name: string;
  weeks: number;
  days: DaySchema[];
}
