import type { Metadata } from 'next';
import { Sparkles, ShoppingBag, ShieldCheck, AlertTriangle, Package } from 'lucide-react';
import { CONFIRMED_SWORDS } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: {
    canonical: '/sword-value-list',
  },

  title: 'Blade Ball Sword Skins — Confirmed Sword List & Crate Guide',
  description: 'Independently confirmed Roblox Blade Ball sword skins (Prince Blade, Fallen Angel, Black Oni Katana and more), crate odds, and the honest note that the full sword list is not yet documented. Swords are cosmetic only.',
};

export default function SwordValueListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball <span className="text-cyan-400">Sword Skins</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Confirmed sword skins in Roblox Blade Ball, with crate odds and trading notes. Every name below is individually sourced — we do not publish invented coin values.
        </p>
      </div>

      {/* Honesty banner */}
      <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 sm:p-6 flex gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
        <div className="space-y-1.5">
          <h2 className="text-base font-bold text-amber-300">Full sword list: not yet documented</h2>
          <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed">
            The official Blade Ball Fandom &quot;Sword Skins&quot; page is currently behind an anti-bot shield, so a complete, verifiable sword roster does not exist yet. Instead of fabricating names and coin values, we only list swords confirmed through independent sources (below). Coin &quot;trade values&quot; for individual swords are community-made estimates with no official source, so this page no longer publishes them as fact.
          </p>
        </div>
      </div>

      {/* Cosmetic note + crate mechanics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-cyan-900/60 space-y-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Swords are purely cosmetic</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            All swords in Blade Ball share identical hitbox range and swing speed — a rare skin never out-performs a common one. Sword choice is about looks, not stats, so no sword changes your deflect timing or clash outcomes.
          </p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-cyan-900/60 space-y-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Package className="w-5 h-5 text-cyan-400" />
            <span>Crate mechanics</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Rare-tier swords come from two crates: a 10% chance from the standard Sword Skin Crate and a 90% chance from the Premium Sword Crate. Sword skins obtained from redeem codes (e.g. Bubble Wand via 4BVISITS, private servers only) are listed on our codes page.
          </p>
        </div>
      </div>

      {/* Confirmed swords table */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-cyan-900/60 shadow-xl">
        <div className="px-6 py-4 border-b border-cyan-900/50 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-bold text-white">Confirmed Sword Skins ({CONFIRMED_SWORDS.length})</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/80 border-b border-cyan-900/50 text-cyan-300 uppercase tracking-wider font-bold">
              <tr>
                <th className="px-6 py-4">Sword Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Confirmed Via</th>
                <th className="px-6 py-4">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-950/60 text-slate-200">
              {CONFIRMED_SWORDS.map((item) => (
                <tr key={item.name} className="hover:bg-cyan-950/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>{item.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded text-[11px] font-bold border whitespace-nowrap ${
                        item.status === 'Confirmed'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-300 text-xs">{item.source}</td>
                  <td className="px-6 py-4 text-slate-400 text-xs">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sourcing note */}
      <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-2">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-cyan-400" />
          <span>Data Source & Verification</span>
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          Verified 2026-09-19 via the Blade Ball Fandom wiki category listings, Traderie trading pages, and Pro Game Guides (cosmetic-only confirmation and crate distribution). Community-mentioned names without a wiki page (Chrono Edge) are marked &quot;Unverified&quot; rather than presented as fact. This page will be updated with the full sword roster once the wiki Sword Skins page can be verified.
        </p>
      </div>
    </div>
  );
}
