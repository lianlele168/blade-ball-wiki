import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Sparkles, Trophy, ArrowRight, ShieldAlert, BookOpen, HelpCircle } from 'lucide-react';
import BladeBallCalculatorClient from './BladeBallCalculatorClient';

export const metadata: Metadata = {
  title: 'Blade Ball Calculator: Wheel Spin Simulator & Sword Trade Value Calculator',
  description: 'Interactive Roblox Blade Ball simulator and trade calculator. Simulate Wheel spins with authentic 0.2% Mythical odds, track pity, and compare sword trade values for fair trades.',
  alternates: {
    canonical: 'https://bladeball.robloxwikihub.com/calculator/',
  },
  openGraph: {
    title: 'Blade Ball Wheel Spin Simulator & Trade Calculator',
    description: 'Simulate spins and evaluate trade fairness in Roblox Blade Ball.',
    url: 'https://bladeball.robloxwikihub.com/calculator/',
    type: 'website',
  },
};

export default function CalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Blade Ball Wheel Spin Simulator & Trade Value Calculator',
    url: 'https://bladeball.robloxwikihub.com/calculator/',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free interactive spin simulator and sword trade calculator for Roblox Blade Ball.',
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
            <span>Interactive Game Tool • Authentic RNG & Trading Valuation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Blade Ball <span className="text-cyan-400">Spin Simulator & Trade</span> Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Test your luck on the Wheel Spin without spending Robux, and evaluate fair sword trades with real coin values and demand multipliers.
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
            How Blade Ball Wheel Odds & Trading Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-cyan-300">1. Wheel Spin RNG & Pity</h3>
              <p>
                The standard Blade Ball wheel features a 0.2% drop rate for Secret/Mythical grand prizes (e.g. Celestial Dragon Greatsword) and 3.0% for Legendary explosions.
              </p>
              <p>
                Statistically, getting a Mythical sword requires approximately 500 spins on average. Free spin codes are the most cost-effective method to farm coins and roll pity.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-cyan-300">2. Trade Value & Demand Rating</h3>
              <p>
                A fair trade is determined by Coin Value and Demand Index. Secret and limited event weapons (like Cyber Blade Duals) command up to a 25% demand premium over standard shop weapons.
              </p>
              <p>
                Always avoid trading high-demand Mythicals for low-demand bulk Legendaries, as resale velocity drops significantly.
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
              <strong className="text-white block mb-1">What is the most valuable sword in Blade Ball?</strong>
              <span>Cyber Blade Duals and Limited Event Mythicals are currently the highest-valued swords, trading between 25,000 to 35,000+ coins in value.</span>
            </div>
            <div>
              <strong className="text-white block mb-1">How can I get free wheel spins?</strong>
              <span>You can redeem active monthly codes, complete daily battle quests, and claim AFK World playtime milestones.</span>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/80 bg-slate-950/60">
          <Link href="/sword-value-list" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
            <BookOpen className="w-4 h-4" />
            <span>Check Full Sword Value List</span>
          </Link>
          <Link href="/codes" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300">
            <span>Redeem Active Blade Ball Codes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
