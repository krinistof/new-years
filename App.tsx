
import React, { useState, useEffect, useMemo } from 'react';
import { TIMEZONES } from './constants';
import TimezoneCard from './components/TimezoneCard';
import CelebrationOverlay from './components/CelebrationOverlay';

const IconGlobe = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);

const IconActivity = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
);

const IconZap = () => (
  <svg width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 L13 2 Z"/></svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const IconSparkle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"/></svg>
);

const App: React.FC = () => {
  const [now, setNow] = useState(Date.now());
  const [celebratingZone, setCelebratingZone] = useState<string | null>(null);
  const [celebrationTitle, setCelebrationTitle] = useState("");
  const [celebratingColors, setCelebratingColors] = useState<string[]>([]);
  const [lastCheckedIdx, setLastCheckedIdx] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Check if any zone just crossed midnight in the last 5 seconds
    const idx = TIMEZONES.findIndex(tz => tz.celebrationTime <= now && tz.celebrationTime > now - 5000);
    if (idx !== -1 && idx !== lastCheckedIdx) {
      setLastCheckedIdx(idx);
      setCelebratingZone(TIMEZONES[idx].id);
      setCelebrationTitle(TIMEZONES[idx].label);
      setCelebratingColors(TIMEZONES[idx].colors);
    }
  }, [now, lastCheckedIdx]);

  const stats = useMemo(() => {
    const passed = TIMEZONES.filter(tz => tz.celebrationTime <= now).length;
    const next = TIMEZONES.find(tz => tz.celebrationTime > now);
    return { passed, total: TIMEZONES.length, next };
  }, [now]);

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-900/10 blur-[120px] rounded-full" />
      </div>

      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/30 animate-float">
              <IconGlobe />
            </div>
            <div>
              <h1 className="text-3xl font-display text-white tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                Global New Year Tracker
              </h1>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <IconActivity /> 
                Real-time updates across {stats.total} time zones
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-2xl border border-slate-800">
             <div className="px-4 py-2 text-center border-r border-slate-800">
               <div className="text-xs text-slate-500 font-bold uppercase mb-1">Status</div>
               <div className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
                  ACTIVE
               </div>
             </div>
             <div className="px-4 py-2 text-center">
               <div className="text-xs text-slate-500 font-bold uppercase mb-1">UTC Time</div>
               <div className="text-lg font-display tracking-widest text-white">
                 {new Date(now).toISOString().substr(11, 8)}
               </div>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-12 relative z-10">
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm flex flex-col justify-center transition-all hover:bg-slate-900/60 group">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">World Journey</h2>
              <span className="text-purple-400 font-bold text-lg">
                {stats.passed} / {stats.total} Transitions
              </span>
            </div>
            <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden mb-4 p-1">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                style={{ width: `${(stats.passed / stats.total) * 100}%` }}
              />
            </div>
            <p className="text-slate-400 text-sm italic">
              Currently celebrating: <strong className="text-slate-200">{stats.passed > 0 ? TIMEZONES[stats.passed - 1].label : 'Waiting for Kiritimati...'}</strong>
            </p>
          </div>

          {stats.next && (
            <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 p-8 rounded-3xl shadow-2xl shadow-purple-500/40 relative overflow-hidden group cursor-default">
              <div className="absolute top-[-20px] right-[-20px] text-white/10 rotate-12 group-hover:rotate-[35deg] transition-transform duration-1000">
                <IconZap />
              </div>
              <div className="relative z-10">
                <div className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                   Up Next
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{stats.next.label}</h3>
                <div className="flex items-center gap-3 text-white">
                  <IconClock />
                  <span className="text-4xl font-display tracking-widest drop-shadow-lg">
                    {Math.max(0, Math.floor((stats.next.celebrationTime - now) / 1000 / 60))}m left
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-4">
                <h2 className="text-3xl font-display text-white uppercase tracking-wider">The Timeline</h2>
                <div className="hidden sm:block h-px w-32 bg-gradient-to-r from-slate-700 to-transparent" />
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TIMEZONES.map((tz) => (
              <TimezoneCard key={tz.id} timezone={tz} now={now} />
            ))}
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-3xl border border-slate-800 p-10 text-center backdrop-blur-sm transition-transform hover:scale-[1.01]">
          <h2 className="text-3xl font-display text-white mb-4">A Global Synchronized Event</h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
            This dashboard follows the shadow of the New Year as it sweeps across the continents. From the Pacific islands to the American coast, every major offset is accounted for with local greetings and cultural insights.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-12">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-display text-purple-400 mb-1">26</span>
              <span className="text-xs text-slate-500 uppercase font-extrabold tracking-widest">Global Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-display text-pink-400 mb-1">{stats.total}</span>
              <span className="text-xs text-slate-500 uppercase font-extrabold tracking-widest">Time Points</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-display text-blue-400 mb-1">100%</span>
              <span className="text-xs text-slate-500 uppercase font-extrabold tracking-widest">Offline Ready</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-slate-800 py-12 px-4 text-center bg-slate-950/50 backdrop-blur-sm">
        <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
          No external dependencies • Flag-Themed Fireworks • {new Date().getUTCFullYear()}
        </p>
      </footer>

      <CelebrationOverlay 
        trigger={celebratingZone !== null} 
        title={celebrationTitle}
        colors={celebratingColors}
        onComplete={() => setCelebratingZone(null)} 
      />
    </div>
  );
};

export default App;
