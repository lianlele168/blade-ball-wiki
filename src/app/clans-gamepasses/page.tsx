import type { Metadata } from 'next';
import { Users, Crown, Zap, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blade Ball Clans & Gamepasses Guide (August 2026) — Clan Buffs & VIP Perks',
  description: 'Learn about Blade Ball clan levels, coin bonuses, VIP gamepass perks, and Battle Pass rewards.',
};

export default function ClansGamepassesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball <span className="text-cyan-400">Clans & Gamepasses</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Unlock maximum luck multipliers, clan level bonuses, and gamepass rewards in Blade Ball.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Clan System */}
        <section className="glass-panel p-6 rounded-2xl border border-cyan-900/60 space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-cyan-400" />
            <span>Clan Level Buffs</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Joining a top-tier Clan unlocks passive account multipliers that apply automatically in every match:
          </p>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Clan Level 1:</strong> +10% Bonus Match Coins.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Clan Level 3:</strong> +5% Luck Multiplier on Wheel Spins.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Clan Level 5:</strong> Exclusive Clan Tag & Glowing Sword Aura.
              </div>
            </li>
          </ul>
        </section>

        {/* Gamepass Guide */}
        <section className="glass-panel p-6 rounded-2xl border border-cyan-900/60 space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Crown className="w-6 h-6 text-amber-400" />
            <span>VIP & Gamepass Worth</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Which Blade Ball Gamepasses give the highest return on Robux?
          </p>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
            <li className="flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">VIP Pass (499 Robux):</strong> 2x Daily Spin Rewards, Exclusive Chat Tag, and 20% Discount in Shop. <em>(Must Buy)</em>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Battle Pass Premium (799 Robux):</strong> Unlocks 50 tiers of Mythical Swords and Secret Explosions.
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
