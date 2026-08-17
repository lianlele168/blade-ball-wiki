import Link from 'next/link';
import { Zap, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-900/40 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border border-cyan-400/30">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">
              BLADE BALL <span className="text-cyan-400">WIKI</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md">
            The ultimate community resource for Roblox Blade Ball. Get verified codes for free wheel spins, ability tier lists, sword value lists, and deflect mechanics guides.
          </p>
          <div className="text-[11px] text-slate-500">
            Disclaimer: Blade Ball Wiki is an unofficial fansite. Roblox and Blade Ball are registered trademarks of their respective owners.
          </div>
        </div>

        {/* Wiki Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-4">Blade Ball Guides</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/codes" className="hover:text-cyan-300 transition-colors">
                Blade Ball Codes (August 2026)
              </Link>
            </li>
            <li>
              <Link href="/ability-tier-list" className="hover:text-cyan-300 transition-colors">
                Ability Tier List (Infinity, Dragon)
              </Link>
            </li>
            <li>
              <Link href="/sword-value-list" className="hover:text-cyan-300 transition-colors">
                Sword & Explosion Value List
              </Link>
            </li>
            <li>
              <Link href="/beginner-guide" className="hover:text-cyan-300 transition-colors">
                Deflect & Parry Beginner Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Official Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-4">Official Links</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://www.roblox.com/games/13772392947/BLADE-BALL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <span>Play Blade Ball (Roblox)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/bladeball"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <span>Official Discord Community</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>&copy; {new Date().getFullYear()} Blade Ball Wiki. All rights reserved.</div>
        <div className="flex items-center gap-1">
          <span>Built for Roblox Blade Ball players with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
        </div>
      </div>
    </footer>
  );
}

