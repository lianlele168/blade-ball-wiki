import Link from 'next/link';
import { Gift, Shield, DollarSign, BookOpen, Zap, CheckCircle2, ArrowRight, Trophy, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, ABILITY_TIER_DATA } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';
import SpinSimulator from '@/components/SpinSimulator';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are active Blade Ball codes for August 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Active Blade Ball codes include GOODLUCK, DRAGONFLY, SHADOWSLASH, and SUMMERUPDATE. Redeem them for free wheel spins, coins, and sword skins.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best ability in Blade Ball?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Infinity, Dragon Instinct, and Quantum are S+ tier abilities in Blade Ball due to their ball-freezing, auto-target deflection, and teleportation capabilities.',
        },
      },
    ],
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-cyan-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/40 via-slate-950/80 to-[#030712] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-900/40 text-cyan-300 border border-cyan-700/50 shadow-inner">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Updated for August 2026 Season 4</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Roblox Blade Ball <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Codes & Ability Tier List
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Your ultimate community guide for <strong className="text-cyan-300">Roblox Blade Ball</strong>. Claim free wheel spins, check ability rankings, and discover sword trade values.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-cyan-300">150K+</div>
              <div className="text-[11px] text-slate-400">Monthly Searches</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-emerald-400">7 Active</div>
              <div className="text-[11px] text-slate-400">Spin Codes</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-teal-300">S+ Tier</div>
              <div className="text-[11px] text-slate-400">Infinity Ability</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-amber-400">0.2%</div>
              <div className="text-[11px] text-slate-400">Mythical Drop Odds</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/codes"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-950/80 hover:scale-[1.02] transition-all"
            >
              <Gift className="w-4 h-4 text-cyan-200" />
              <span>Get Active Codes (7)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ability-tier-list"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-cyan-800/40 hover:border-cyan-600 transition-all"
            >
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Ability Tier List</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Codes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span>Latest Active Blade Ball Codes</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">Copy free Wheel Spin & Coin codes</p>
          </div>
          <Link href="/codes" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            <span>View All Codes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACTIVE_CODES.slice(0, 6).map((item) => (
            <div
              key={item.code}
              className="glass-panel p-4 rounded-xl flex items-center justify-between border border-cyan-900/50 hover:border-cyan-600/60 transition-all shadow-md"
            >
              <div className="space-y-1">
                <div className="font-mono text-base font-extrabold text-cyan-200 tracking-wide flex items-center gap-2">
                  <span>{item.code}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-sans border border-emerald-500/30">
                    Active
                  </span>
                </div>
                <div className="text-xs text-slate-300">{item.reward}</div>
              </div>
              <CopyButton textToCopy={item.code} />
            </div>
          ))}
        </div>
      </section>

      {/* Spin Simulator Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpinSimulator />
      </section>

      {/* Navigation Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/codes" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Gift className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Free Spin Codes
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Free Wheel Spins, Coins, Battle Pass Tickets, and Emote Rerolls.
              </p>
            </div>
          </Link>

          <Link href="/ability-tier-list" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Ability Tier List
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Rankings for Infinity, Dragon Instinct, Quantum, Forcefield, and Reaper.
              </p>
            </div>
          </Link>

          <Link href="/sword-value-list" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Sword Value List
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Trading values for Cyber Katana, Celestial Dragon, and Galaxy Scythe.
              </p>
            </div>
          </Link>

          <Link href="/beginner-guide" className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Deflect Guide
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Timing deflects, curve ball mechanics, and spam blocking tips.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
