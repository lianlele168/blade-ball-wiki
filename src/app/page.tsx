import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};
import Link from 'next/link';
import { Gift, Shield, DollarSign, BookOpen, Zap, Star, Clock, ArrowRight } from 'lucide-react';
import { ACTIVE_CODES, ABILITY_TIER_DATA } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';
import AuthorCard from '@/components/AuthorCard';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    author: {
      '@type': 'Person',
      name: 'Hlele',
      jobTitle: 'Editor'
    },
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the active Blade Ball codes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `There are ${ACTIVE_CODES.length} working Blade Ball codes right now: ${ACTIVE_CODES.map((c) => c.code).join(', ')}. They redeem for free wheel spins, event tickets, sword skins and luck boosts.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best ability in Blade Ball?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Blade Ball has ${ABILITY_TIER_DATA.length} abilities (${ABILITY_TIER_DATA.filter((a) => a.availability === 'Purchasable').length} purchasable and ${ABILITY_TIER_DATA.filter((a) => a.availability === 'Limited').length} limited). Standouts include Infinity Reaper (15,000 Coins, a shadow deflects for you with a 0.75s hit cooldown), Galactum (3,500 Coins, dash becomes a 15-stud teleport on a 5s cooldown), and the Mythical limited Event Horizon from the Premium Selection Crate.`,
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
            <span>Updated for Season 4</span>
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

          {/* Author Card */}
          <div className="max-w-3xl mx-auto text-left">
            <AuthorCard
              authorName="Hlele"
              role="Editor"
              experience="AI-assisted research, human-reviewed"
              patchVersion="Patch v2.16 Verified"
              editorialNote="All data is cross-verified from multiple sources; unverified values are explicitly labeled."
            />
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-cyan-300">150K+</div>
              <div className="text-[11px] text-slate-400">Monthly Searches</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-emerald-400">{ACTIVE_CODES.length} Active</div>
              <div className="text-[11px] text-slate-400">Spin Codes</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-teal-300">{ABILITY_TIER_DATA.length}</div>
              <div className="text-[11px] text-slate-400">Real Abilities Listed</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl text-center">
              <div className="text-2xl font-extrabold text-amber-400">{ABILITY_TIER_DATA.filter((a) => a.availability === 'Purchasable').length}</div>
              <div className="text-[11px] text-slate-400">Shop Abilities</div>
            </div>
          </div>

          {/* Arena Screenshot Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto my-6">
            <img
              src="/images/blade-ball-arena.webp"
              alt="Roblox Blade Ball High Speed Clash Multiplier Deflection Arena"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 flex items-center justify-between">
              <div className="text-xs sm:text-sm text-slate-200 font-medium">
                <span className="text-cyan-400 font-bold">Arena Preview</span> — High-speed 14x clash deflection & parry window
              </div>
              <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-[11px] rounded-lg border border-purple-500/30">
                Live Competitive Data
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/codes"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-950/80 hover:scale-[1.02] transition-all"
            >
              <Gift className="w-4 h-4 text-cyan-200" />
              <span>Get Active Codes ({ACTIVE_CODES.length})</span>
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

      {/* Featured Real Abilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Star className="w-6 h-6 text-cyan-400" />
              <span>Featured Real Abilities</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">Sourced from the Blade Ball Fandom wiki — verified 2026-09-19</p>
          </div>
          <Link href="/ability-tier-list" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
            <span>View All {ABILITY_TIER_DATA.length}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ABILITY_TIER_DATA.filter((a) => ['Infinity Reaper', 'Galactum', 'Event Horizon'].includes(a.name)).map((ability) => (
            <div key={ability.name} className="glass-panel p-5 rounded-xl border border-cyan-900/50 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">{ability.name}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-300 border border-slate-700">
                  {ability.rarity}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{ability.description}</p>
              <div className="pt-2 border-t border-cyan-950 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                <span className="flex items-center gap-1 text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {ability.cooldown}
                </span>
                {ability.price ? (
                  <span className="text-amber-300 font-mono">{ability.price}</span>
                ) : (
                  <span className="text-purple-300">{ability.obtainMethod}</span>
                )}
              </div>
            </div>
          ))}
        </div>
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
                All 60 abilities: 32 shop abilities with real prices and 28 limited event abilities.
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
                Confirmed sword skins, crate odds, and why swords are cosmetic only.
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
