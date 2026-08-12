import type { Metadata } from 'next';
import { Shield, Zap, Clock, Target } from 'lucide-react';
import { ABILITY_TIER_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Blade Ball Ability Tier List (August 2026) — Best Abilities Ranked',
  description: 'Complete Roblox Blade Ball ability tier list ranking Infinity, Dragon Instinct, Quantum, Forcefield, and Reaper with cooldowns and counters.',
};

export default function AbilityTierListPage() {
  const tiers = ['S+', 'S', 'A'] as const;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball <span className="text-cyan-400">Ability Tier List</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Rankings for all Blade Ball skills in August 2026. Find the meta-defining abilities for 1v1 clashes, multiplayer arenas, and high-speed deflects.
        </p>
      </div>

      {/* Tier Breakdown */}
      <div className="space-y-8">
        {tiers.map((tier) => {
          const items = ABILITY_TIER_DATA.filter((a) => a.tier === tier);
          if (items.length === 0) return null;

          const tierColor =
            tier === 'S+'
              ? 'from-amber-500/20 to-orange-500/10 border-amber-500/50 text-amber-300'
              : tier === 'S'
              ? 'from-cyan-500/20 to-blue-500/10 border-cyan-500/50 text-cyan-300'
              : 'from-emerald-500/20 to-teal-500/10 border-emerald-500/50 text-emerald-300';

          return (
            <div key={tier} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`px-4 py-1.5 rounded-xl font-black text-lg bg-gradient-to-r ${tierColor} border shadow-md`}>
                  {tier} Tier
                </div>
                <span className="text-xs text-slate-400 font-mono">({items.length} Meta Abilities)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((ability) => (
                  <div key={ability.name} className="glass-panel p-5 rounded-xl border border-cyan-900/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-cyan-400" />
                        <span>{ability.name}</span>
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                          {ability.type}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400 font-mono">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          {ability.cooldown}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{ability.description}</p>

                    <div className="pt-2 border-t border-cyan-950 flex items-center gap-1.5 text-xs text-cyan-300">
                      <Target className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Best For: {ability.bestFor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
