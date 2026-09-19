import type { Metadata } from 'next';
import { Shield, Zap, Clock, Coins, Star } from 'lucide-react';
import { ABILITY_TIER_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: {
    canonical: '/ability-tier-list',
  },

  title: 'Blade Ball Ability Tier List — All 60 Abilities (Sourced Data)',
  description: 'Complete Roblox Blade Ball ability list: 32 purchasable and 28 limited abilities with rarity, effects, shop prices and cooldowns, verified against the Blade Ball Fandom wiki.',
};

const TIER_RARITY_NOTE: Record<string, string> = {
  'S+': 'Mythical rarity',
  'S': 'Legendary rarity',
  'A': 'Epic rarity',
  'B': 'Common rarity',
};

export default function AbilityTierListPage() {
  const tiers = ['S+', 'S', 'A', 'B'] as const;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball <span className="text-cyan-400">Ability Tier List</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          All {ABILITY_TIER_DATA.length} abilities in Blade Ball — {ABILITY_TIER_DATA.filter((a) => a.availability === 'Purchasable').length} purchasable in the shop and {ABILITY_TIER_DATA.filter((a) => a.availability === 'Limited').length} limited/event-exclusive. Every effect, price and cooldown below is sourced from the Blade Ball Fandom wiki Abilities table.
        </p>
        <p className="text-xs text-slate-500 max-w-2xl mx-auto">
          Tier bands reflect in-game rarity: Mythical = S+, Legendary = S, Epic = A, Common = B. Cooldowns marked &quot;Not documented&quot; have no official value in the wiki table yet.
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
              : tier === 'A'
              ? 'from-emerald-500/20 to-teal-500/10 border-emerald-500/50 text-emerald-300'
              : 'from-slate-500/20 to-slate-600/10 border-slate-500/50 text-slate-300';

          return (
            <div key={tier} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`px-4 py-1.5 rounded-xl font-black text-lg bg-gradient-to-r ${tierColor} border shadow-md`}>
                  {tier} Tier
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  ({items.length} Abilities — {TIER_RARITY_NOTE[tier]})
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((ability) => (
                  <div key={ability.name} className="glass-panel p-5 rounded-xl border border-cyan-900/50 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-cyan-400 shrink-0" />
                        <span>{ability.name}</span>
                      </h3>
                      <div className="flex flex-wrap items-center justify-end gap-2 text-xs">
                        <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                          {ability.type}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                          {ability.rarity}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{ability.description}</p>

                    <div className="pt-2 border-t border-cyan-950 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
                      <span className="flex items-center gap-1 text-slate-400 font-mono">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {ability.cooldown}
                      </span>
                      {ability.price ? (
                        <span className="flex items-center gap-1 text-amber-300 font-mono">
                          <Coins className="w-3.5 h-3.5 text-amber-400" />
                          {ability.price}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-purple-300">
                          <Star className="w-3.5 h-3.5 text-purple-400" />
                          Limited — {ability.obtainMethod}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sourcing note */}
      <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-2">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>Data Source & Verification</span>
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          Ability names, rarities, effects, shop prices and cooldowns were verified on 2026-09-19 against the official Blade Ball Fandom wiki Abilities table, which lists 60 abilities total (32 purchasable, 28 unpurchasable/limited). Event Horizon is Mythical and drops from the Premium Selection Crate — it cannot be bought with coins. Limited ability cooldowns are not yet documented in the wiki table and are shown as such rather than guessed.
        </p>
      </div>
    </div>
  );
}
