import type { Metadata } from 'next';
import { Sparkles, Flame, Trophy, Award } from 'lucide-react';
import { EXPLOSION_TIER_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Blade Ball Explosion Tier List (August 2026) — Best Elimination Effects',
  description: 'Rankings for all Blade Ball kill explosions including Galaxy Supernova, Dimensional Rift, and Shadow Void with drop rates and visual effects.',
};

export default function ExplosionTierListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball <span className="text-cyan-400">Explosion Tier List</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Complete ranking of all elimination finish effects in Blade Ball. Discover Mythical and Secret explosion rarity, visual animations, and obtain methods.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPLOSION_TIER_DATA.map((item) => (
          <div
            key={item.name}
            className="glass-panel p-6 rounded-2xl border border-cyan-900/60 hover:border-cyan-500/80 transition-all space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-cyan-400" />
                <span>{item.name}</span>
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  item.tier === 'S+'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                    : item.tier === 'S'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                }`}
              >
                {item.tier} Tier ({item.rarity})
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.effectDescription}</p>

            <div className="pt-3 border-t border-cyan-950 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-cyan-400" />
                <span>Obtain: {item.obtainMethod}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
