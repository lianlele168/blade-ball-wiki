import type { Metadata } from 'next';
import { DollarSign, Sparkles, ShoppingBag } from 'lucide-react';
import { SWORD_VALUE_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Blade Ball Sword Value List (August 2026) — Trade Price Guide',
  description: 'Trading values for Roblox Blade Ball swords and explosion effects. Updated coin values and drop rates for Cyber Katana, Dragon Greatsword, and Galaxy Scythe.',
};

export default function SwordValueListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball <span className="text-cyan-400">Sword & Effect Values</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Official trading market price guide for Blade Ball weapons. Check estimated coin values and demand levels before trading with other players.
        </p>
      </div>

      {/* Table */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-cyan-900/60 shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/80 border-b border-cyan-900/50 text-cyan-300 uppercase tracking-wider font-bold">
              <tr>
                <th className="px-6 py-4">Item Name</th>
                <th className="px-6 py-4">Rarity</th>
                <th className="px-6 py-4">Estimated Value</th>
                <th className="px-6 py-4">Demand</th>
                <th className="px-6 py-4">Obtain Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-950/60 text-slate-200">
              {SWORD_VALUE_DATA.map((item) => (
                <tr key={item.name} className="hover:bg-cyan-950/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>{item.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded text-[11px] font-bold border ${
                        item.rarity === 'Secret'
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                          : item.rarity === 'Mythical'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : item.rarity === 'Legendary'
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                          : 'bg-slate-900 text-slate-400 border-slate-800'
                      }`}
                    >
                      {item.rarity}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-cyan-300">{item.valueInCoins}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        item.demand === 'Very High'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : item.demand === 'High'
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {item.demand}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-xs">{item.obtainMethod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
