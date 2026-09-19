import type { Metadata } from 'next';
import { BookOpen, Zap, Target, Shield, CheckCircle2, Flame, RefreshCw, Trophy, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: '/beginner-guide',
  },

  title: 'Roblox Blade Ball Beginner Guide — Parry Timing, Curve Balls & Clash Tactics',
  description: 'Master Roblox Blade Ball mechanics. Learn exact parry timing across latency/ping, how to execute curve deflections, spam block counters, and ability tier synergy.',
  keywords: ['blade ball guide', 'blade ball parry timing', 'blade ball curve deflect', 'blade ball clash guide', 'how to win in blade ball']
};

export default function BeginnerGuidePage() {
  const parryTips = [
    {
      step: '1',
      title: 'Latency Calibration & Ping Offset',
      desc: 'The single biggest mistake new Blade Ball players make is reacting to the visual position of the ball. Because Roblox runs client-server replication, latency (ping) creates a delay between when you see the ball and when the server registers your block. If your network ping is between 60ms and 120ms, you must press your Block button (F or Left Click) roughly 0.15 to 0.25 seconds BEFORE the red lock-on circle reaches your hitbox perimeter. If your ping spikes above 150ms, pre-blocking is mandatory.'
    },
    {
      step: '2',
      title: 'Executing Controlled Curve Deflections',
      desc: 'Curve balls are essential for eliminating experienced players who have perfected straightforward reaction times. To execute a sharp curve, do not face your target head-on. As the ball approaches within parry range, flick your camera 75 to 90 degrees toward an open flank or directly toward an unsuspecting opponent on the periphery, then click Block while continuing your camera motion. The ball will inherit your camera vector velocity, bypassing direct lines of sight.'
    },
    {
      step: '3',
      title: 'Mastering Rapid Clashes & Spam Block Duels',
      desc: 'When two skilled players stand within 5 studs of each other, the ball bounces back and forth in fractions of a second, initiating a high-speed Clash. Spamming the block button blindly will trigger the cooldown penalty (0.4s lockout). Instead, anchor your eyes on the white clash spark: press Block synchronously with the audio slash cue. If you feel overwhelmed during a clash, trigger movement abilities like Blink, Galactum, or Shadow Step to break line-of-sight and reset ball acceleration.'
    },
    {
      step: '4',
      title: 'Ability Loadout Synergy & Counter-Play',
      desc: 'Choose your ability based on the lobby composition. In lobbies dominated by aggressive rushers, equip Forcefield to deflect close-range pressure or Infinity Reaper so a shadow deflects for you between your own hits. In large open arenas, mobility picks like Galactum (dash becomes a 15-stud teleport) and Shadow Step (swap behind the nearest player) let you escape targeted curve balls and reposition for the final deflect.'
    }
  ];

  const abilityMatrix = [
    { ability: 'Infinity Reaper', role: 'Shadow auto-deflect + 0.75s hit cooldown (15,000 Coins)', counter: 'Counters rapid volley exchanges and 1v1 endgames', tier: 'S' },
    { ability: 'Galactum', role: 'Dash becomes a 15-stud teleport, 5s cooldown (3,500 Coins)', counter: 'Escapes lethal clash traps and corner pin-downs', tier: 'S' },
    { ability: 'Frozen Era', role: 'Freezes nearby players 0.5s, pauses their dash cooldowns 3s (3,500 Coins)', counter: 'Interrupts dash-reliant rushers mid-approach', tier: 'S' },
    { ability: 'Shadow Step', role: 'Swap behind the nearest player (3,500 Coins)', counter: 'Repositions for surprise curve deflects', tier: 'A' },
    { ability: 'Forcefield', role: 'Energy barrier deflects the ball, scales with player count (500 Coins)', counter: 'Saves against close-range spam and blindside shots', tier: 'B' },
  ];

  const faqs = [
    {
      q: 'Why do I keep dying even when I hear the parry sound in Blade Ball?',
      a: 'This occurs due to latency desynchronization (ping). The sound cue plays on your client, but the server received the opposing deflection packet earlier. To resolve this, calibrate your timing to block approximately 0.2 seconds earlier whenever playing on servers outside your home region.'
    },
    {
      q: 'What is the fastest way to earn Coins in Blade Ball without Robux?',
      a: 'The highest coin yield comes from winning standard lobbies (100+ Coins per win) combined with completing the Daily and Weekly AFK World quests. Utilizing 4x AFK Luck codes guarantees rapid weapon crate progression.'
    },
    {
      q: 'How do you defeat Infinity users?',
      a: 'Infinity shortens the user\'s ability cooldown with every successful hit (up to a 2 second reduction), so their power comes from staying in long rallies. Do not trade hits into their rhythm: disengage with a mobility ability like Blink or Galactum, reset the distance, and re-engage when their momentum breaks.'
    },
    {
      q: 'Which sword has the best stats in Blade Ball?',
      a: 'All swords in Blade Ball are purely cosmetic—they share the identical hitbox range and swing speed. Weapon value is determined entirely by market rarity, limited event distribution, and custom kill explosion effects.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-xs font-semibold">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>Combat Mechanics Masterclass</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox Blade Ball <span className="gradient-text-cyan">Deflect & Parry Mastery Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Master the timing windows, high-speed clash strategies, camera vector curving, and tactical ability counters that separate rookie lobby victims from undisputed Blade Ball champions.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Open Ability Database & Sorter</span>
          </Link>
          <Link
            href="/sword-value-list"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-200 font-bold rounded-xl text-xs hover:bg-slate-700 transition-colors"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>View Confirmed Sword Skins</span>
          </Link>
        </div>
      </div>

      {/* Core Tactical Roadmap */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">4 Essential Pillars of High-Tier Defense</h2>
          <p className="text-xs text-slate-400 mt-1">
            Incorporate these combat adjustments into your routine to immediately boost your match survival rate:
          </p>
        </div>

        <div className="space-y-6">
          {parryTips.map((tip) => (
            <div key={tip.step} className="glass-card p-6 sm:p-8 rounded-2xl space-y-3 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-extrabold text-lg shrink-0">
                  {tip.step}
                </div>
                <h3 className="text-lg font-bold text-white">{tip.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ability Synergy Matrix */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Meta Ability Counter-Matchup Matrix</h2>
          <p className="text-xs text-slate-400 mt-1">
            Equip abilities that actively dismantle the playstyle of aggressive lobby leaders:
          </p>
        </div>

        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Ability Name</th>
                <th className="p-4">Meta Tier</th>
                <th className="p-4">Core Tactical Role</th>
                <th className="p-4">Optimal Counter Matchup</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {abilityMatrix.map((m) => (
                <tr key={m.ability} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white text-sm">{m.ability}</td>
                  <td className="p-4 font-bold text-amber-300">{m.tier}</td>
                  <td className="p-4 text-cyan-300">{m.role}</td>
                  <td className="p-4 text-slate-300">{m.counter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-cyan-400" />
          <span>Frequently Asked Questions (Blade Ball FAQ)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass-card p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">{f.q}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
