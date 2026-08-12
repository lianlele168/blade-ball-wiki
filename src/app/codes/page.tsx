import type { Metadata } from 'next';
import { Gift, ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Blade Ball Codes (August 2026) — Free Wheel Spins & Coins',
  description: 'All active Roblox Blade Ball codes for free wheel spins, coins, raffle tickets, and sword skins. Verified daily.',
};

export default function CodesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Last Tested in Roblox: August 12, 2026 — 100% Active</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball Codes <span className="text-cyan-400">(August 2026)</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Redeem these official active Roblox Blade Ball codes for free wheel spins, coins, raffle tickets, and emote rerolls.
        </p>
      </div>

      {/* Active Codes List */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-cyan-900/40 pb-3">
          <Gift className="w-5 h-5 text-cyan-400" />
          <span>Active Spin Codes ({ACTIVE_CODES.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item) => (
            <div
              key={item.code}
              className="glass-panel p-4 rounded-xl flex items-center justify-between border border-cyan-900/60 hover:border-cyan-500/80 transition-all shadow-lg"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-extrabold text-cyan-200">{item.code}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-sans border border-emerald-500/30">
                    Active
                  </span>
                </div>
                <div className="text-xs text-slate-300">{item.reward}</div>
                {item.addedDate && <div className="text-[10px] text-slate-500">Added: {item.addedDate}</div>}
              </div>
              <CopyButton textToCopy={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* How to Redeem Step-by-Step */}
      <section className="glass-panel p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-cyan-900/40 pb-4">
          <HelpCircle className="w-6 h-6 text-cyan-400" />
          <span>How to Redeem Codes in Blade Ball</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-900/80 text-cyan-300 font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h3 className="text-sm font-bold text-white">Open Blade Ball</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Launch Roblox Blade Ball and wait until you spawn into the main lobby.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-900/80 text-cyan-300 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="text-sm font-bold text-white">Click 'EXTRA' Button</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Click the 'EXTRA' button at the top of the screen, then select 'CODES'.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-900/80 text-cyan-300 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="text-sm font-bold text-white">Paste Code & Claim</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Type or paste your active code into the text input box and press Checkmark to claim your rewards.
            </p>
          </div>
        </div>
      </section>

      {/* Expired Codes List */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500" />
          <span>Expired Codes ({EXPIRED_CODES.length})</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {EXPIRED_CODES.map((item) => (
            <div key={item.code} className="p-3 rounded-lg bg-slate-950/60 border border-slate-900 flex justify-between items-center text-xs opacity-60">
              <span className="font-mono text-slate-400 line-through">{item.code}</span>
              <span className="text-[10px] text-red-400/80">Expired</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
