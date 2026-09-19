'use client';

import { useState, useMemo } from 'react';
import { ABILITY_TIER_DATA, type AbilityItem } from '@/data/wikiData';
import { Zap, Clock, Coins, Search, ArrowUpDown, Shield, Star, Check, Copy } from 'lucide-react';

type SortKey = 'price-asc' | 'price-desc' | 'cooldown-asc' | 'cooldown-desc' | 'name-asc';
type RarityFilter = 'All' | 'Mythical' | 'Legendary' | 'Epic' | 'Common';

const SHOP_ABILITIES = ABILITY_TIER_DATA.filter((a) => a.availability === 'Purchasable');
const LIMITED_ABILITIES = ABILITY_TIER_DATA.filter((a) => a.availability === 'Limited');

const SORT_LABELS: Record<SortKey, string> = {
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
  'cooldown-asc': 'Cooldown: Fastest First',
  'cooldown-desc': 'Cooldown: Slowest First',
  'name-asc': 'Name: A to Z',
};

const RARITY_BADGE: Record<string, string> = {
  Mythical: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  Legendary: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
  Epic: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  Common: 'bg-slate-900 text-slate-400 border-slate-700',
};

function AbilityExplorer({ items, showPrice }: { items: AbilityItem[]; showPrice: boolean }) {
  const [query, setQuery] = useState('');
  const [rarity, setRarity] = useState<RarityFilter>('All');
  const [sortKey, setSortKey] = useState<SortKey>('name-asc');
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = items.filter(
      (a) =>
        (rarity === 'All' || a.rarity === rarity) &&
        (q === '' || a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q))
    );
    const sorted = [...list];
    sorted.sort((a, b) => {
      switch (sortKey) {
        case 'price-asc':
          return (a.priceCoins ?? Infinity) - (b.priceCoins ?? Infinity);
        case 'price-desc':
          return (b.priceCoins ?? -1) - (a.priceCoins ?? -1);
        case 'cooldown-asc':
          return (a.cooldownSeconds ?? Infinity) - (b.cooldownSeconds ?? Infinity);
        case 'cooldown-desc':
          return (b.cooldownSeconds ?? -1) - (a.cooldownSeconds ?? -1);
        default:
          return a.name.localeCompare(b.name);
      }
    });
    return sorted;
  }, [items, query, rarity, sortKey]);

  const copyAbility = (a: AbilityItem) => {
    const stats = a.price ? `${a.price} | Cooldown ${a.cooldown}` : `Limited (${a.obtainMethod}) | Cooldown ${a.cooldown}`;
    navigator.clipboard.writeText(`Blade Ball Ability: ${a.name} — ${a.rarity} (${a.type}). ${a.description} [${stats}] — https://bladeball.robloxwikihub.com/calculator/`);
    setCopied(a.name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search abilities by name or effect..."
            aria-label="Search abilities"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:border-cyan-500"
          />
        </div>
        <div className="relative">
          <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            aria-label="Sort abilities"
            className="w-full sm:w-56 bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:border-cyan-500 appearance-none"
          >
            {(Object.keys(SORT_LABELS) as SortKey[])
              .filter((k) => (showPrice ? true : !k.startsWith('price')))
              .map((k) => (
                <option key={k} value={k}>
                  {SORT_LABELS[k]}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Rarity filter chips */}
      <div className="flex flex-wrap gap-2">
        {(['All', 'Mythical', 'Legendary', 'Epic', 'Common'] as RarityFilter[]).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRarity(r)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
              rarity === r
                ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            {r}
          </button>
        ))}
        <span className="ml-auto text-xs text-slate-500 font-mono self-center">
          {filtered.length} / {items.length} abilities
        </span>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="p-8 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-2">
          <Shield className="w-8 h-8 mx-auto text-slate-600" />
          <p className="text-sm text-slate-400">No abilities match your search. Try a different name or filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((a) => (
            <div key={a.name} className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-700/60 transition-all space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-white">{a.name}</h3>
                <div className="flex gap-1.5 shrink-0">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${RARITY_BADGE[a.rarity]}`}>
                    {a.rarity}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {a.type}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{a.description}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1.5 border-t border-slate-800/80 text-xs">
                <span className="flex items-center gap-1 text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {a.cooldown}
                </span>
                {a.price ? (
                  <span className="flex items-center gap-1 text-amber-300 font-mono">
                    <Coins className="w-3.5 h-3.5 text-amber-400" />
                    {a.price}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-purple-300">
                    <Star className="w-3.5 h-3.5 text-purple-400" />
                    Limited
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => copyAbility(a)}
                  className={`ml-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all active:scale-95 ${
                    copied === a.name
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {copied === a.name ? <Check className="w-3 h-3" /> : <Zap className="w-3 h-3" />}
                  {copied === a.name ? 'Copied!' : 'Copy Stats'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BladeBallCalculatorClient() {
  const [activeTab, setActiveTab] = useState<'shop' | 'limited'>('shop');

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab('shop')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'shop'
              ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Coins className="w-4 h-4" />
          <span>Shop Abilities ({SHOP_ABILITIES.length})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('limited')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'limited'
              ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Star className="w-4 h-4" />
          <span>Limited Abilities ({LIMITED_ABILITIES.length})</span>
        </button>
      </div>

      {activeTab === 'shop' ? (
        <AbilityExplorer items={SHOP_ABILITIES} showPrice={true} />
      ) : (
        <AbilityExplorer items={LIMITED_ABILITIES} showPrice={false} />
      )}
    </div>
  );
}
