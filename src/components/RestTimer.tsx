'use client';

import { useState, useEffect } from 'react';
import { Play, RotateCcw, X, Volume2, VolumeX } from 'lucide-react';

interface RestTimerProps {
  duration: number; // in seconds
  onClose: () => void;
  onFinish?: () => void;
}

export function RestTimer({ duration, onClose, onFinish }: RestTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (soundEnabled) {
            try {
              const audio = new Audio('/beep.mp3');
              audio.play();
            } catch (e) {
              console.error("Audio play failed", e);
            }
          }
          if (onFinish) onFinish();
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, onFinish, soundEnabled]);

  const progress = ((duration - timeLeft) / duration) * 100;
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm text-white">
      <div className="absolute top-6 right-6">
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10">
          <X size={32} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-8 w-full max-w-sm px-8">
        {/* Progress Ring */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r="45"
              fill="none" stroke="currentColor" strokeWidth="8"
              className="text-gray-800"
            />
            <circle
              cx="50" cy="50" r="45"
              fill="none" stroke="currentColor" strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              className="text-green-500 transition-all duration-1000 ease-linear"
              strokeLinecap="round"
            />
          </svg>
          <div className="text-6xl font-mono font-bold tracking-tighter tabular-nums">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-6">
          <button 
            onClick={() => {
              setTimeLeft(duration);
              setIsRunning(true);
            }}
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <RotateCcw size={24} />
          </button>
          
          <button 
            onClick={() => setIsRunning(!isRunning)}
            className="p-6 rounded-full bg-green-600 hover:bg-green-500 transition-colors shadow-lg shadow-green-900/50"
          >
            {isRunning ? <span className="block w-6 h-6 bg-white rounded-sm" /> : <Play fill="currentColor" size={24} />}
          </button>
          
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        </div>
        
        <div className="text-center text-gray-400 mt-4">
          {timeLeft === 0 ? "Rest Complete!" : "Recovering..."}
        </div>
        
        {timeLeft === 0 && (
          <button 
            onClick={onClose}
            className="w-full py-4 bg-white text-black font-bold rounded-xl text-lg animate-pulse"
          >
            Back to Workout
          </button>
        )}
      </div>
    </div>
  );
}
