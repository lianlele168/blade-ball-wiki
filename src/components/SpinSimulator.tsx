'use client';

import { useState } from 'react';
import { Dices, Sparkles, RefreshCw, Trophy, Zap } from 'lucide-react';

interface SpinResult {
  reward: string;
  rarity: 'Mythical' | 'Legendary' | 'Rare' | 'Common';
}

export default function SpinSimulator() {
  const [totalSpins, setTotalSpins] = useState(0);
  const [currentResult, setCurrentResult] = useState<SpinResult | null>(null);
  const [history, setHistory] = useState<SpinResult[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);

  const rewards = [
    { reward: 'Celestial Dragon Greatsword', rarity: 'Mythical' as const, rate: 0.2 },
    { reward: 'Cyber Katana Duals Skin', rarity: 'Mythical' as const, rate: 0.5 },
    { reward: 'Galaxy Explosion Effect', rarity: 'Legendary' as const, rate: 3.0 },
    { reward: '500 Free Coins', rarity: 'Legendary' as const, rate: 5.0 },
    { reward: '100 Free Coins', rarity: 'Rare' as const, rate: 25.0 },
    { reward: '50 Free Coins', rarity: 'Common' as const, rate: 66.3 },
  ];

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setTotalSpins((prev) => prev + 1);
      const rand = Math.random() * 100;

      let cumulative = 0;
      let selected = rewards[rewards.length - 1];

      for (const item of rewards) {
        cumulative += item.rate;
        if (rand < cumulative) {
          selected = item;
          break;
        }
      }

      const result: SpinResult = { reward: selected.reward, rarity: selected.rarity };
      setCurrentResult(result);
      setHistory((prev) => [result, ...prev.slice(0, 4)]);
      setIsSpinning(false);
    }, 250);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-900/60 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyan-900/40 pb-4">
        <div>
          <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>Blade Ball Wheel Spin Simulator</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Simulate your free spins with official 0.2% Mythical Sword drop rates!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Total Spins:</span>
          <span className="px-3 py-1 rounded-lg bg-cyan-950 text-cyan-300 font-mono font-bold border border-cyan-800">
            {totalSpins}
          </span>
        </div>
      </div>

      {/* Display Box */}
      <div className="p-6 rounded-xl bg-slate-950/60 border border-cyan-800/40 text-center space-y-4 min-h-[160px] flex flex-col justify-center items-center">
        {currentResult ? (
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentResult.rarity} Reward Won!</span>
            </div>
            <div className="text-2xl font-black text-white">{currentResult.reward}</div>
          </div>
        ) : (
          <div className="text-slate-400 text-xs space-y-1">
            <Trophy className="w-8 h-8 mx-auto text-cyan-500/50 mb-2" />
            <div>Click "Spin Wheel" to simulate a Blade Ball Free Wheel Spin</div>
            <div className="text-[11px] text-slate-500">Mythical (0.2%) | Legendary (3%) | Rare (25%) | Common (66%)</div>
          </div>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-950/80 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
          <span>{isSpinning ? 'Spinning...' : 'Spin Wheel Now'}</span>
        </button>
      </div>

      {/* Recent History */}
      {history.length > 0 && (
        <div className="pt-2 space-y-2 border-t border-cyan-950">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Recent Spin History</div>
          <div className="flex flex-wrap gap-2">
            {history.map((item, idx) => (
              <span
                key={idx}
                className={`px-2.5 py-1 rounded text-[11px] border ${
                  item.rarity === 'Mythical'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                    : item.rarity === 'Legendary'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}
              >
                {item.reward}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
