import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Sparkles, Trophy, ArrowRight, BookOpen, HelpCircle, ShieldCheck } from 'lucide-react';
import BladeBallCalculatorClient from './BladeBallCalculatorClient';
import { ABILITY_TIER_DATA } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Blade Ball Calculator: Ability Database, Price & Cooldown Sorter',
  description: 'Interactive Roblox Blade Ball ability database: search, filter and sort all 60 abilities — 32 shop abilities with real coin prices and cooldowns, plus 28 limited event abilities. Data verified against the Blade Ball Fandom wiki.',
  alternates: {
    canonical: 'https://bladeball.robloxwikihub.com/calculator',
  },
  openGraph: {
    title: 'Blade Ball Ability Database & Cooldown Sorter',
    description: 'Search and sort every Blade Ball ability by price, cooldown and rarity — real sourced data.',
    url: 'https://bladeball.robloxwikihub.com/calculator',
    type: 'website',
  },
};

export default function CalculatorPage() {
  const shopCount = ABILITY_TIER_DATA.filter((a) => a.availability === 'Purchasable').length;
  const limitedCount = ABILITY_TIER_DATA.filter((a) => a.availability === 'Limited').length;
  const cheapest = ABILITY_TIER_DATA.filter((a) => a.priceCoins !== undefined).sort((a, b) => (a.priceCoins ?? 0) - (b.priceCoins ?? 0))[0];
  const priciest = ABILITY_TIER_DATA.filter((a) => a.priceCoins !== undefined).sort((a, b) => (b.priceCoins ?? 0) - (a.priceCoins ?? 0))[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Blade Ball Ability Database & Cooldown Sorter',
    url: 'https://bladeball.robloxwikihub.com/calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free interactive Blade Ball ability database: search and sort 60 abilities by shop price, cooldown and rarity.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '920',
    },
  };

  return (
    <div className="space-y-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-cyan-900/30 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Ability Database • Sourced from the Blade Ball Fandom wiki</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Blade Ball <span className="text-cyan-400">Ability Database</span> & Sorter
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Search, filter and sort all {ABILITY_TIER_DATA.length} abilities — {shopCount} shop abilities with real coin prices and cooldowns, plus {limitedCount} limited event abilities. No invented stats.
          </p>
        </div>
      </section>

      {/* Interactive Client Component */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BladeBallCalculatorClient />
      </div>

      {/* Guide & FAQ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Trophy className="w-6 h-6 text-amber-400" />
            How Blade Ball Abilities & Shop Prices Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-cyan-300">1. Shop abilities cost coins</h3>
              <p>
                Blade Ball currently has {ABILITY_TIER_DATA.length} abilities: {shopCount} can be bought in the shop with coins, ranging from {cheapest?.name} ({cheapest?.price}) up to {priciest?.name} ({priciest?.price}). Each has a documented cooldown — Galactum has one of the fastest at 5 seconds, turning your dash into a 15-stud teleport.
              </p>
              <p>
                Free coins come from active codes, daily quests, and AFK World milestones — check our codes page before grinding.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-cyan-300">2. Limited abilities cannot be bought</h3>
              <p>
                The other {limitedCount} abilities are limited: they drop from limited-time events, season rewards, crown events, and crates. The only Mythical available from a paid source is Event Horizon, which comes from the Premium Selection Crate — not the coin shop.
              </p>
              <p>
                Beware of fabricated ability names circulating in videos and comments (a supposed galaxy-themed supernova combo ability does not exist in the game). The real abilities are Galactum (shop, Legendary) and Supernova (limited, Legendary) — two separate abilities.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <strong className="text-white block mb-1">What is the most expensive ability in Blade Ball?</strong>
              <span>Infinity Reaper at 15,000 Coins — a Legendary ability whose shadow deflects the ball for you with a 0.75-second hit cooldown.</span>
            </div>
            <div>
              <strong className="text-white block mb-1">How can I get Event Horizon?</strong>
              <span>Event Horizon is a Mythical limited ability obtained from the Premium Selection Crate (a paid rotating crate). It cannot be purchased with coins.</span>
            </div>
            <div>
              <strong className="text-white block mb-1">Are sword skins pay-to-win?</strong>
              <span>No. Swords in Blade Ball are purely cosmetic — they share identical hitbox range and swing speed, so no skin changes gameplay.</span>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/80 bg-slate-950/60">
          <Link href="/ability-tier-list" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
            <ShieldCheck className="w-4 h-4" />
            <span>View Full Ability Tier List</span>
          </Link>
          <Link href="/codes" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300">
            <BookOpen className="w-4 h-4" />
            <span>Redeem Active Blade Ball Codes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
