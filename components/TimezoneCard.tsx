
import React, { useState } from 'react';
import { TimezoneData } from '../types';

interface Props {
  timezone: TimezoneData;
  now: number;
}

const IconInfo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

const IconMapPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const IconSparkles = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M21 17v4"/><path d="M19 19h4"/></svg>
);

const IconCheck = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const TimezoneCard: React.FC<Props> = ({ timezone, now }) => {
  const [showFact, setShowFact] = useState(false);

  const timeLeft = timezone.celebrationTime - now;
  const isPast = timeLeft <= 0;
  const isActive = !isPast && timeLeft < 3600000;

  const formatTime = (ms: number) => {
    if (ms <= 0) return "00:00:00";
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`relative group p-6 rounded-2xl transition-all duration-300 border ${
      isActive 
        ? 'bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] ring-2 ring-purple-500' 
        : isPast
          ? 'bg-slate-900/40 border-slate-800 opacity-60'
          : 'bg-slate-800/40 border-slate-700 hover:border-slate-500'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${isPast ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
              UTC {timezone.offset >= 0 ? '+' : ''}{timezone.offset}
            </span>
            {isActive && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-500/20 text-red-400 animate-pulse">
                <IconSparkles /> Live Countdown
              </span>
            )}
            {isPast && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400">
                <IconCheck /> Celebrated
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {timezone.label}
          </h3>
        </div>
        <button 
          onClick={() => setShowFact(!showFact)}
          className={`p-2 rounded-full transition-colors ${showFact ? 'bg-purple-500 text-white' : 'hover:bg-white/10 text-slate-400 hover:text-white'}`}
          title="Cultural information"
        >
          <IconInfo />
        </button>
      </div>

      <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
        <IconMapPin />
        <span className="truncate">{timezone.majorCities.join(', ')}</span>
      </div>

      <div className="mt-auto">
        <div className={`text-4xl font-display tracking-wider ${isPast ? 'text-slate-500' : isActive ? 'text-white' : 'text-slate-200'}`}>
          {isPast ? "HAPPY NEW YEAR!" : formatTime(timeLeft)}
        </div>
        {!isPast && (
          <div className="w-full bg-slate-700 h-1 rounded-full mt-2 overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${isActive ? 'bg-purple-500' : 'bg-slate-500'}`}
              style={{ width: `${Math.min(100, (3600000 - timeLeft) / 3600000 * 100)}%` }}
            />
          </div>
        )}
      </div>

      {showFact && (
        <div className="mt-4 p-3 rounded-lg bg-black/30 border border-white/10 animate-in slide-in-from-top-2 duration-300">
          <p className="text-purple-400 font-bold mb-1">{timezone.greeting}!</p>
          <p className="text-xs text-slate-300 italic">"{timezone.fact}"</p>
        </div>
      )}
    </div>
  );
};

export default TimezoneCard;
