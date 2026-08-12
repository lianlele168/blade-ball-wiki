import type { Metadata } from 'next';
import { BookOpen, Zap, Target, Shield, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blade Ball Deflect & Parry Beginner Guide — Tips & Mechanics',
  description: 'Master timing deflects, curve balls, spam blocking, and ability combos in Roblox Blade Ball.',
};

export default function BeginnerGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball <span className="text-cyan-400">Deflect & Parry Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Learn essential parry timing, curve deflect angles, and how to counter aggressive spam block players.
        </p>
      </div>

      {/* Guide Content */}
      <div className="space-y-8">
        <section className="glass-panel p-6 rounded-2xl space-y-4 border border-cyan-900/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>1. Understanding Ball Velocity & Ping</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            In Blade Ball, the red targeted ball accelerates after every deflection. When playing on high ping (over 100ms), press your Block key slightly <strong>BEFORE</strong> the red highlight touches your character outline to compensate for latency.
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl space-y-4 border border-cyan-900/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-400" />
            <span>2. How to Curve the Ball</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            To curve the ball away from opponents, turn your camera 90 degrees to the left or right right before clicking Block. The ball will travel along your camera vector, throwing off enemy parry timing.
          </p>
        </section>

        <section className="glass-panel p-6 rounded-2xl space-y-4 border border-cyan-900/50">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>3. How to Counter Close-Range Spam Blockers</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            When an enemy runs right into your face for rapid deflects:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Use <strong>Infinity</strong> to freeze the ball instantly and break their spam rhythm.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Use <strong>Quantum</strong> or <strong>Thunder Dash</strong> to jump away to maximum distance.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
