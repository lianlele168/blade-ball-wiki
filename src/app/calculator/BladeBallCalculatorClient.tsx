'use client';

import { useState, useMemo } from 'react';
import { SWORD_VALUE_DATA } from '@/data/wikiData';
import { Zap, Sparkles, Play, Dices, ArrowLeftRight, Check, Copy, Shield, Trophy } from 'lucide-react';

interface SpinItem {
  name: string;
  rarity: 'Mythical' | 'Legendary' | 'Rare' | 'Common';
  rate: number;
}

const WHEEL_REWARDS: SpinItem[] = [
  { name: 'Celestial Dragon Greatsword', rarity: 'Mythical', rate: 0.2 },
  { name: 'Cyber Katana Duals Skin', rarity: 'Mythical', rate: 0.5 },
  { name: 'Galaxy Explosion Supernova', rarity: 'Legendary', rate: 3.0 },
  { name: '500 Free Coins', rarity: 'Legendary', rate: 5.0 },
  { name: '100 Free Coins', rarity: 'Rare', rate: 25.0 },
  { name: '50 Free Coins', rarity: 'Common', rate: 66.3 },
];

export default function BladeBallCalculatorClient() {
  const [activeTab, setActiveTab] = useState<'spin' | 'trade'>('spin');

  // Spin Simulator State
  const [totalSpins, setTotalSpins] = useState(0);
  const [mythicCount, setMythicCount] = useState(0);
  const [legendaryCount, setLegendaryCount] = useState(0);
  const [coinsWon, setCoinsWon] = useState(0);
  const [recentPrizes, setRecentPrizes] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);

  // Trade Calculator State
  const [sideASword, setSideASword] = useState(0);
  const [sideACoins, setSideACoins] = useState(0);
  const [sideBSword, setSideBSword] = useState(1);
  const [sideBCoins, setSideBCoins] = useState(0);
  const [copied, setCopied] = useState(false);

  const parseSwordCoins = (valStr: string) => {
    return parseInt(valStr.replace(/[^0-9]/g, '')) || 0;
  };

  const tradeAnalysis = useMemo(() => {
    const itemA = SWORD_VALUE_DATA[sideASword] || SWORD_VALUE_DATA[0];
    const itemB = SWORD_VALUE_DATA[sideBSword] || SWORD_VALUE_DATA[1];

    const demandMult = (d: string) => (d === 'Very High' ? 1.15 : d === 'High' ? 1.05 : 1.0);
    const valueA = Math.round(parseSwordCoins(itemA.valueInCoins) * demandMult(itemA.demand)) + sideACoins;
    const valueB = Math.round(parseSwordCoins(itemB.valueInCoins) * demandMult(itemB.demand)) + sideBCoins;

    const diff = valueB - valueA;
    const ratio = valueA > 0 ? (valueB / valueA) * 100 : 100;

    let verdict = 'Fair Trade';
    let verdictColor = 'text-cyan-400';
    if (diff > 2500) {
      verdict = 'Big Win! (You Gain Value)';
      verdictColor = 'text-emerald-400';
    } else if (diff > 800) {
      verdict = 'Slight Win for You';
      verdictColor = 'text-teal-300';
    } else if (diff < -2500) {
      verdict = 'Big Loss! (Do Not Accept)';
      verdictColor = 'text-rose-400';
    } else if (diff < -800) {
      verdict = 'Slight Loss for You';
      verdictColor = 'text-amber-400';
    }

    return {
      itemA,
      itemB,
      valueA,
      valueB,
      diff,
      ratio: ratio.toFixed(1),
      verdict,
      verdictColor,
    };
  }, [sideASword, sideACoins, sideBSword, sideBCoins]);

  const spinOnce = (count: number) => {
    setIsSpinning(true);
    setTimeout(() => {
      let newMythics = 0;
      let newLegs = 0;
      let newCoins = 0;
      const historyItems: string[] = [];

      for (let i = 0; i < count; i++) {
        const rand = Math.random() * 100;
        let cumulative = 0;
        let picked = WHEEL_REWARDS[WHEEL_REWARDS.length - 1];

        for (const item of WHEEL_REWARDS) {
          cumulative += item.rate;
          if (rand < cumulative) {
            picked = item;
            break;
          }
        }

        if (picked.rarity === 'Mythical') {
          newMythics++;
          if (historyItems.length < 4) historyItems.push(`✨ ${picked.name}`);
        } else if (picked.rarity === 'Legendary') {
          newLegs++;
          if (picked.name.includes('Coins')) newCoins += 500;
          if (historyItems.length < 4) historyItems.push(`⭐ ${picked.name}`);
        } else if (picked.rarity === 'Rare') {
          newCoins += 100;
          if (historyItems.length < 4) historyItems.push(`🔹 ${picked.name}`);
        } else {
          newCoins += 50;
        }
      }

      setTotalSpins((prev) => prev + count);
      setMythicCount((prev) => prev + newMythics);
      setLegendaryCount((prev) => prev + newLegs);
      setCoinsWon((prev) => prev + newCoins);
      if (historyItems.length > 0) {
        setRecentPrizes((prev) => [...historyItems, ...prev.slice(0, 4)]);
      }
      setIsSpinning(false);
    }, 200);
  };

  const copyTrade = () => {
    const text = `Blade Ball Trade Evaluation:\n• Your Offer: ${tradeAnalysis.itemA.name} (+${sideACoins} Coins) -> Net Value: ${tradeAnalysis.valueA.toLocaleString()} Coins\n• Their Offer: ${tradeAnalysis.itemB.name} (+${sideBCoins} Coins) -> Net Value: ${tradeAnalysis.valueB.toLocaleString()} Coins\n• Verdict: ${tradeAnalysis.verdict} (${tradeAnalysis.diff >= 0 ? '+' : ''}${tradeAnalysis.diff.toLocaleString()} Coins)\nCalculated on https://bladeball.robloxwikihub.com/calculator/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab('spin')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'spin'
              ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Dices className="w-4 h-4" />
          <span>Wheel Spin Simulator</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('trade')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'trade'
              ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ArrowLeftRight className="w-4 h-4" />
          <span>Sword Trade Calculator</span>
        </button>
      </div>

      {/* 1. Spin Simulator Tab */}
      {activeTab === 'spin' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Simulate Wheel Spins (0.2% Mythical Drop Rate)</span>
              </h2>
              <span className="text-xs text-slate-400">Pity: ~500 Spins Avg</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                disabled={isSpinning}
                onClick={() => spinOnce(1)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all active:scale-95 disabled:opacity-50"
              >
                Spin 1x
              </button>
              <button
                disabled={isSpinning}
                onClick={() => spinOnce(10)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-cyan-600 hover:bg-cyan-500 text-white border border-cyan-400 shadow-md shadow-cyan-600/30 transition-all active:scale-95 disabled:opacity-50"
              >
                Spin 10x
              </button>
              <button
                disabled={isSpinning}
                onClick={() => spinOnce(100)}
                className="py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 shadow-md shadow-amber-500/20 transition-all active:scale-95 disabled:opacity-50"
              >
                Spin 100x Speed
              </button>
            </div>

            {/* Drop Rates Reference Table */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-400">Official Wheel Probabilities</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {WHEEL_REWARDS.map((r) => (
                  <div key={r.name} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span className="truncate pr-2 text-slate-300">{r.name}</span>
                    <span className="font-bold text-cyan-300">{r.rate}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statistics */}
          <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-900/40 p-6 rounded-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Simulation Stats</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Spins</span>
                <span className="text-xl font-black text-white">{totalSpins}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-purple-400 block">Mythical Swords</span>
                <span className="text-xl font-black text-purple-300">{mythicCount}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-yellow-400 block">Legendary Items</span>
                <span className="text-xl font-black text-yellow-300">{legendaryCount}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] text-emerald-400 block">Coins Won</span>
                <span className="text-xl font-black text-emerald-300">+{coinsWon.toLocaleString()}</span>
              </div>
            </div>

            {recentPrizes.length > 0 && (
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-slate-400">Recent Big Hits:</span>
                <div className="space-y-1">
                  {recentPrizes.map((p, idx) => (
                    <div key={idx} className="text-xs p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Trade Calculator Tab */}
      {activeTab === 'trade' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Side A: Your Offer */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-cyan-300 flex items-center justify-between border-b border-slate-800 pb-2">
                <span>Your Offer (Side A)</span>
                <span className="text-xs text-slate-400 font-normal">Total: {tradeAnalysis.valueA.toLocaleString()} Coins</span>
              </h3>

              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-semibold block">Select Your Sword</label>
                <select
                  value={sideASword}
                  onChange={(e) => setSideASword(Number(e.target.value))}
                  aria-label="Select Your Sword"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:border-cyan-500"
                >
                  {SWORD_VALUE_DATA.map((s, idx) => (
                    <option key={s.name} value={idx}>
                      [{s.rarity}] {s.name} ({s.valueInCoins})
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400 block">
                  Demand: <strong className="text-amber-300">{tradeAnalysis.itemA.demand}</strong>
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-semibold block">Additional Coins Added</label>
                <input
                  type="number"
                  value={sideACoins}
                  onChange={(e) => setSideACoins(Math.max(0, parseInt(e.target.value) || 0))}
                  placeholder="0"
                  aria-label="Additional Coins Added"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Side B: Their Offer */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-amber-300 flex items-center justify-between border-b border-slate-800 pb-2">
                <span>Their Offer (Side B)</span>
                <span className="text-xs text-slate-400 font-normal">Total: {tradeAnalysis.valueB.toLocaleString()} Coins</span>
              </h3>

              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-semibold block">Select Their Sword</label>
                <select
                  value={sideBSword}
                  onChange={(e) => setSideBSword(Number(e.target.value))}
                  aria-label="Select Their Sword"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:border-cyan-500"
                >
                  {SWORD_VALUE_DATA.map((s, idx) => (
                    <option key={s.name} value={idx}>
                      [{s.rarity}] {s.name} ({s.valueInCoins})
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-400 block">
                  Demand: <strong className="text-amber-300">{tradeAnalysis.itemB.demand}</strong>
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-semibold block">Additional Coins Added</label>
                <input
                  type="number"
                  value={sideBCoins}
                  onChange={(e) => setSideBCoins(Math.max(0, parseInt(e.target.value) || 0))}
                  placeholder="0"
                  aria-label="Additional Coins Added"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Trade Result Analysis Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-semibold text-slate-400">Trade Valuation Verdict</span>
              <div className={`text-2xl font-black ${tradeAnalysis.verdictColor}`}>
                {tradeAnalysis.verdict}
              </div>
              <p className="text-xs text-slate-400">
                Net Difference: <strong className="text-white">{tradeAnalysis.diff >= 0 ? '+' : ''}{tradeAnalysis.diff.toLocaleString()} Coins</strong> ({tradeAnalysis.ratio}% Value Ratio)
              </p>
            </div>

            <button
              onClick={copyTrade}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Summary!' : 'Copy Trade Report'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
