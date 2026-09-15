import React from 'react';

interface AuthorCardProps {
  authorName?: string;
  role?: string;
  experience?: string;
  patchVersion?: string;
  lastUpdated?: string;
  editorialNote?: string;
}

export default function AuthorCard({
  authorName = 'Kai Shadowblade',
  role = 'Lead Clash Mechanics Analyst',
  experience = 'Top 100 Leaderboard & 300+ Hours',
  patchVersion = 'Patch v2.16 Verified',
  lastUpdated = 'September 2026',
  editorialNote = 'All clash multipliers, curveball curve frames, and sword trading values are empirically tested in live competitive matches.',
}: AuthorCardProps) {
  return (
    <div className="w-full rounded-2xl bg-gray-900/50 border border-white/10 p-4 sm:p-5 backdrop-blur-md my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/5">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-lg shadow-inner">
            {authorName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white text-sm sm:text-base">{authorName}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                ✓ Competitive Verified
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              {role} • <span className="text-gray-300 font-medium">{experience}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-rose-500/10 text-rose-300 border border-rose-500/20">
            ⚡ {patchVersion}
          </span>
          <span className="text-xs text-gray-400">
            Updated: <strong className="text-gray-200">{lastUpdated}</strong>
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed italic">
        "{editorialNote}"
      </p>
    </div>
  );
}
