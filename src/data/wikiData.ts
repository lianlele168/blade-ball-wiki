export interface CodeItem {
  code: string;
  reward: string;
  status: 'Active' | 'Expired';
  addedDate?: string;
}

export interface AbilityItem {
  name: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  type: 'Defense' | 'Offense' | 'Mobility' | 'Utility';
  description: string;
  bestFor: string;
  cooldown: string;
}

export interface SwordValueItem {
  name: string;
  rarity: 'Secret' | 'Mythical' | 'Legendary' | 'Rare';
  valueInCoins: string;
  demand: 'Very High' | 'High' | 'Medium';
  obtainMethod: string;
}

export interface ExplosionItem {
  name: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  rarity: 'Mythical' | 'Legendary' | 'Rare';
  effectDescription: string;
  obtainMethod: string;
}

export const ACTIVE_CODES: CodeItem[] = [
  { code: 'SERPENT', reward: 'Giveaway Entry for Serpent Katana', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'RAMADAN', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'SPOOKYSEASON', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 17, 2026' },
  { code: '4BVISITS', reward: 'Bubble Wand Sword Skin', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'SHARKATTACK', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'SUMMERWHEEL', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'SUMMERSTARTSHERE', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'ENERGYSWORDS', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'GIVEMELUCK', reward: '4x Luck Boost in AFK World', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'DUNGEONSRELEASE', reward: '50 Dungeon Runes', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'FROGS', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'GOODVSEVIL', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'FREESPINS', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 17, 2026' },
];

export const EXPIRED_CODES: CodeItem[] = [
  { code: 'GOODLUCK', reward: '100 Coins', status: 'Expired' },
  { code: 'DRAGONFLY', reward: 'Free Sword Skin', status: 'Expired' },
  { code: 'FREESPIN100K', reward: '1x Wheel Spin', status: 'Expired' },
  { code: 'UPDATEBALL2025', reward: '200 Coins', status: 'Expired' },
  { code: 'EASTER2025', reward: 'Egg Explosion Effect', status: 'Expired' },
  { code: 'HAPPYNEWYEAR', reward: '500 Coins', status: 'Expired' },
];

export const ABILITY_TIER_DATA: AbilityItem[] = [
  {
    name: 'Infinity',
    tier: 'S+',
    type: 'Defense',
    description: 'Stops the ball in mid-air, completely freezing its velocity and allowing you to aim your deflect with maximum precision. The strongest PvP ability in the current Blade Ball meta.',
    bestFor: '1v1 Clutches & High-Speed Curve Balls',
    cooldown: '35s',
  },
  {
    name: 'Dragon Instinct',
    tier: 'S+',
    type: 'Defense',
    description: 'Automatically deflects incoming balls targeting you while boosting ball curve velocity by 40%. Requires zero manual timing during activation window.',
    bestFor: 'Multiplayer Clashes & Fast Volleyball Rounds',
    cooldown: '30s',
  },
  {
    name: 'Quantum',
    tier: 'S+',
    type: 'Mobility',
    description: 'Instant teleportation across the arena map. Allows you to escape targeted curve balls and surprise opponents from behind.',
    bestFor: 'Arena Positioning & Ambush Deflects',
    cooldown: '25s',
  },
  {
    name: 'Forcefield',
    tier: 'S',
    type: 'Defense',
    description: 'Creates an invincible barrier around your character that reflects any ball that contacts it back at 1.5x speed.',
    bestFor: 'Defending Close Range Spams',
    cooldown: '28s',
  },
  {
    name: 'Reaper',
    tier: 'S',
    type: 'Offense',
    description: 'Steals movement speed and cooldown time from opponents every time you land a successful deflection, stacking up to 5 times.',
    bestFor: 'Late Game 1v1 Survival',
    cooldown: '20s',
  },
  {
    name: 'Telekinesis',
    tier: 'S',
    type: 'Utility',
    description: 'Redirects the ball toward a chosen target anywhere on the map regardless of ball direction.',
    bestFor: 'Targeting Unprepared Enemies',
    cooldown: '22s',
  },
  {
    name: 'Shadow Slash',
    tier: 'A',
    type: 'Mobility',
    description: 'Perform a fast dash forward while automatically deflecting any incoming projectile.',
    bestFor: 'Aggressive Rushdown Playstyles',
    cooldown: '18s',
  },
  {
    name: 'Thunder Dash',
    tier: 'A',
    type: 'Mobility',
    description: 'Short cooldown lightning dash used to reposition away from tight corners.',
    bestFor: 'Quick Evasion',
    cooldown: '12s',
  },
];

export const EXPLOSION_TIER_DATA: ExplosionItem[] = [
  {
    name: 'Galaxy Supernova',
    tier: 'S+',
    rarity: 'Mythical',
    effectDescription: 'Spawns a massive swirling cosmic singularity that engulfs the arena upon eliminating an opponent.',
    obtainMethod: 'Season 4 Mythical Wheel Spin (0.2%)',
  },
  {
    name: 'Dimensional Rift',
    tier: 'S+',
    rarity: 'Mythical',
    effectDescription: 'Tears open spatial portals that shatter the arena floor with purple neon shockwaves.',
    obtainMethod: 'Cyber Event Crate',
  },
  {
    name: 'Shadow Void',
    tier: 'S',
    rarity: 'Legendary',
    effectDescription: 'Erupts into a dark smoke pillar with glowing crimson lightning bolts.',
    obtainMethod: 'Battle Pass Level 45',
  },
  {
    name: 'Lightning Strike',
    tier: 'S',
    rarity: 'Legendary',
    effectDescription: 'Calls down thunderbolts from above with deafening audio feedback.',
    obtainMethod: 'Legendary Explosion Chest',
  },
  {
    name: 'Fire Blast',
    tier: 'A',
    rarity: 'Rare',
    effectDescription: 'Standard fiery explosion with orange flame particles.',
    obtainMethod: 'Default Shop Purchase',
  },
];

export const SWORD_VALUE_DATA: SwordValueItem[] = [
  {
    name: 'Cyber Blade Duals',
    rarity: 'Secret',
    valueInCoins: '35,000 Coins',
    demand: 'Very High',
    obtainMethod: 'Limited Cyber Event Crate (0.1% Chance)',
  },
  {
    name: 'Celestial Dragon Greatsword',
    rarity: 'Mythical',
    valueInCoins: '22,000 Coins',
    demand: 'Very High',
    obtainMethod: 'Mythical Wheel Spin',
  },
  {
    name: 'Galaxy Scythe',
    rarity: 'Mythical',
    valueInCoins: '15,000 Coins',
    demand: 'High',
    obtainMethod: 'Battle Pass Season 4 Tier 50',
  },
  {
    name: 'Spirit Saber',
    rarity: 'Legendary',
    valueInCoins: '6,500 Coins',
    demand: 'Medium',
    obtainMethod: 'Legendary Sword Crate',
  },
  {
    name: 'Shadow Dagger',
    rarity: 'Rare',
    valueInCoins: '2,000 Coins',
    demand: 'Medium',
    obtainMethod: 'Basic Sword Shop',
  },
];
