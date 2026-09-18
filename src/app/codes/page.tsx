import type { Metadata } from 'next';
import { Gift, ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  alternates: {
    canonical: '/codes',
  },

  title: `Blade Ball Codes — ${ACTIVE_CODES.length} Working Codes + ${EXPIRED_CODES.length} Expired`,
  description: `The ${ACTIVE_CODES.length} working Roblox Blade Ball codes for free wheel spins, coins, event tickets and sword skins, with a ${EXPIRED_CODES.length}-entry archive of retired codes.`,
};

const faqs = [
  {
    q: 'How do I redeem codes in Roblox Blade Ball?',
    a: 'Launch Blade Ball and wait until you spawn into the lobby, then click the EXTRA button at the top of the screen and choose CODES. Paste one code into the box and press the checkmark to claim it. Codes are not case-sensitive, but a trailing space picked up while copying is the most common reason a valid code is rejected.',
  },
  {
    q: 'How do I get free wheel spins in Blade Ball?',
    a: 'Redeem the active codes on this page, then fall back on the repeatable sources: daily quests, winning rounds in the normal and hardcore arenas, and logging in during weekend events. Most codes hand out a single spin, so the quest loop is worth more over a week than the code list is.',
  },
  {
    q: 'Why does my Blade Ball code say invalid or expired?',
    a: 'Three reasons cover almost every case. The code may have been retired — Wiggity Studio pulls codes once a milestone is met, with no warning and no announcement. You may already have redeemed it, since each code works once per Roblox account. Or you are on the wrong server type: 4BVISITS only pays out inside a private server, so a public server will reject it even while the code is live.',
  },
  {
    q: 'How many Blade Ball codes are working right now?',
    a: `${ACTIVE_CODES.length}. Blade Ball releases codes in bursts around visit milestones and seasonal events rather than on a schedule, so the count drifts up and down. Anything that has stopped redeeming is moved to the archive below instead of being deleted, which means you can check an old code here rather than retyping it in game.`,
  },
  {
    q: 'Where do new Blade Ball codes appear first?',
    a: 'The official Wiggity Studio Discord server, usually in the announcements channel attached to a patch post. Codes are rarely posted on their own, so watching the update log is more reliable than watching for a code announcement. Bookmarking a tracker page helps, but the Discord is the source.',
  },
];

export default function CodesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Working Roblox Blade Ball Codes',
    numberOfItems: ACTIVE_CODES.length,
    itemListElement: ACTIVE_CODES.map((c, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `Blade Ball Code: ${c.code}`,
      description: c.reward,
    })),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Cross-checked against four public code trackers</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Blade Ball Codes
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {ACTIVE_CODES.length} working Roblox Blade Ball codes for free wheel spins, coins, event tickets and sword skins. Below them sits an archive of {EXPIRED_CODES.length} retired codes, so you can check an old code here instead of retyping it in game.
        </p>
      </div>

      {/* Active Codes List */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-cyan-900/40 pb-3">
          <Gift className="w-5 h-5 text-cyan-400" />
          <span>Working Codes ({ACTIVE_CODES.length})</span>
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
            <h3 className="text-sm font-bold text-white">Click &apos;EXTRA&apos;</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Click the &apos;EXTRA&apos; button at the top of the screen, then select &apos;CODES&apos;.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-900/50 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-900/80 text-cyan-300 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="text-sm font-bold text-white">Paste &amp; Claim</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Paste one code into the box and press the checkmark. Rewards land in your inventory, not automatically equipped.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-cyan-900/40">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Private servers:</strong> 4BVISITS is rejected on public servers. If it fails while every other code works, start a private server and redeem it there.
          </p>
        </div>
      </section>

      {/* Expired Codes List */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500" />
          <span>Expired Codes ({EXPIRED_CODES.length})</span>
        </h2>
        <p className="text-xs text-slate-500 -mt-2">
          Kept rather than deleted, so a code you find in an old video can be confirmed dead in one glance. Where guides disagree on what a code paid out, the disagreement is stated instead of guessed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {EXPIRED_CODES.map((item) => (
            <div key={item.code} className="p-3 rounded-lg bg-slate-950/60 border border-slate-900 flex justify-between items-start gap-2 text-xs opacity-70">
              <div className="space-y-0.5">
                <div className="font-mono text-slate-400 line-through">{item.code}</div>
                <div className="text-[10px] text-slate-500">{item.reward}</div>
              </div>
              <span className="text-[10px] text-red-400/80 shrink-0">Expired</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="glass-panel p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-cyan-900/40 pb-4">
          <HelpCircle className="w-6 h-6 text-cyan-400" />
          <span>Blade Ball Codes FAQ</span>
        </h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-sm font-bold text-white">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1.5">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
