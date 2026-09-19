import type { Metadata } from 'next';
import { Star, Shield, Trophy, Flame } from 'lucide-react';
import { ABILITY_TIER_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: {
    canonical: '/explosion-tier-list',
  },

  title: 'Blade Ball Limited Abilities — Event & Crate Exclusive Tier List',
  description: 'All 28 limited abilities in Roblox Blade Ball, including Supernova, Event Horizon, Death Slash and Fated Curse, with rarity, effects and obtain methods sourced from the Blade Ball Fandom wiki.',
};

export default function LimitedAbilitiesPage() {
  const limited = ABILITY_TIER_DATA.filter((a) => a.availability === 'Limited');
  const mythicals = limited.filter((a) => a.rarity === 'Mythical');
  const others = limited.filter((a) => a.rarity !== 'Mythical');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball <span className="text-cyan-400">Limited Abilities</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          The {limited.length} limited / unpurchasable abilities in Blade Ball, out of {ABILITY_TIER_DATA.length} total abilities. These cannot be bought with coins — they come from limited-time events, seasonal rewards, and crates. All data is sourced from the Blade Ball Fandom wiki Abilities table (verified 2026-09-19).
        </p>
        <p className="text-xs text-slate-500 max-w-2xl mx-auto">
          Note: kill-effect &quot;explosion&quot; cosmetics are not documented in any public wiki table, so this page covers the real limited ability roster instead. Cooldowns for limited abilities are not documented in the wiki and are shown as such rather than guessed.
        </p>
      </div>

      {/* Mythical highlights */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="px-4 py-1.5 rounded-xl font-black text-lg bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/50 text-amber-300 shadow-md">
            S+ Tier
          </div>
          <span className="text-xs text-slate-400 font-mono">({mythicals.length} Mythical Limited Abilities)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mythicals.map((item) => (
            <div
              key={item.name}
              className="glass-panel p-6 rounded-2xl border border-amber-900/60 hover:border-amber-500/80 transition-all space-y-4 shadow-xl"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-400" />
                  <span>{item.name}</span>
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-bold border bg-amber-500/20 text-amber-300 border-amber-500/50 whitespace-nowrap">
                  {item.tier} Tier ({item.rarity})
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>

              <div className="pt-3 border-t border-amber-950/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Obtain: {item.obtainMethod}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legendary + Epic table */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="px-4 py-1.5 rounded-xl font-black text-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-500/50 text-cyan-300 shadow-md">
            S / A Tier
          </div>
          <span className="text-xs text-slate-400 font-mono">({others.length} Legendary & Epic Limited Abilities)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((item) => (
            <div key={item.name} className="glass-panel p-5 rounded-xl border border-cyan-900/50 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{item.name}</span>
                </h3>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700 text-xs whitespace-nowrap">
                  {item.rarity}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              <div className="pt-2 border-t border-cyan-950 flex items-center gap-1.5 text-xs text-purple-300">
                <Star className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{item.obtainMethod}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sourcing note */}
      <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-2">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <Trophy className="w-4 h-4 text-cyan-400" />
          <span>Data Source & Verification</span>
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          Verified on 2026-09-19 against the official Blade Ball Fandom wiki Abilities table. Event Horizon is the only Mythical available from a paid crate (Premium Selection Crate); the rest are event, season or crown rewards. Popular combined names such as a galaxy-themed supernova ability do not exist in the game — the real abilities are Galactum (shop, Legendary) and Supernova (limited, Legendary), listed separately on this site.
        </p>
      </div>
    </div>
  );
}
