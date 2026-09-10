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
  { code: 'RAMADAN', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'SPOOKYSEASON', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: '4BVISITS', reward: 'Bubble Wand Sword Skin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'SHARKATTACK', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'SUMMERWHEEL', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'SUMMERSTARTSHERE', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'ENERGYSWORDS', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'GIVEMELUCK', reward: '4x Luck Boost in AFK World', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'DUNGEONSRELEASE', reward: '50 Dungeon Runes', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'FROGS', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'GOODVSEVIL', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'FREESPINS', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
  { code: '2BTHANKS', reward: '1x Free Wheel Spin', status: 'Active', addedDate: 'August 27, 2026' },
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
    obtainMethod: 'Cyber Event Crate (0.2%)',
  },
  {
    name: 'Black Hole Event Horizon',
    tier: 'S+',
    rarity: 'Mythical',
    effectDescription: 'Pulls surrounding space into an all-consuming void with gravitic shockwaves.',
    obtainMethod: 'Cosmic Event Wheel',
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
    name: 'Infernal Dragon Roar',
    tier: 'S',
    rarity: 'Legendary',
    effectDescription: 'A spectral fiery dragon lunges out of the ground upon elimination.',
    obtainMethod: 'Dragon Festival Limited',
  },
  {
    name: 'Solar Flare',
    tier: 'A',
    rarity: 'Rare',
    effectDescription: 'Blinding white-hot flash of solar radiation.',
    obtainMethod: 'Ranked Season Reward',
  },
  {
    name: 'Fire Blast',
    tier: 'A',
    rarity: 'Rare',
    effectDescription: 'Standard fiery explosion with orange flame particles.',
    obtainMethod: 'Default Shop Purchase',
  },
  {
    name: 'Frost Burst',
    tier: 'B',
    rarity: 'Rare',
    effectDescription: 'Shatters the target into ice shards with freezing fog.',
    obtainMethod: 'Winter Event Crate',
  },
  {
    name: 'Emerald Shockwave',
    tier: 'B',
    rarity: 'Rare',
    effectDescription: 'Spawns an expanding ring of green digital pulse waves.',
    obtainMethod: 'Standard Sword Chest',
  },
];

export const SWORD_VALUE_DATA: SwordValueItem[] = [
  // Secret Tier
  {
    name: 'Cyber Blade Duals',
    rarity: 'Secret',
    valueInCoins: '42,000 Coins',
    demand: 'Very High',
    obtainMethod: 'Limited Cyber Event Crate (0.1% Chance)',
  },
  {
    name: 'Chrono Weaver Blade',
    rarity: 'Secret',
    valueInCoins: '48,000 Coins',
    demand: 'Very High',
    obtainMethod: 'Limited Time Rift Event (0.08%)',
  },
  {
    name: 'Singularity Edge',
    rarity: 'Secret',
    valueInCoins: '55,000 Coins',
    demand: 'Very High',
    obtainMethod: 'Cosmic Chest Exclusive (0.05%)',
  },
  {
    name: 'Infinity Katana',
    rarity: 'Secret',
    valueInCoins: '60,000 Coins',
    demand: 'Very High',
    obtainMethod: 'Battle Pass Top 100 Exclusive',
  },

  // Mythical Tier
  {
    name: 'Celestial Dragon Greatsword',
    rarity: 'Mythical',
    valueInCoins: '24,000 Coins',
    demand: 'Very High',
    obtainMethod: 'Mythical Wheel Spin (0.2%)',
  },
  {
    name: 'Galaxy Scythe',
    rarity: 'Mythical',
    valueInCoins: '18,500 Coins',
    demand: 'High',
    obtainMethod: 'Battle Pass Season 4 Tier 50',
  },
  {
    name: 'Void Cleaver Dual',
    rarity: 'Mythical',
    valueInCoins: '21,000 Coins',
    demand: 'Very High',
    obtainMethod: 'Shadow Crate (0.2%)',
  },
  {
    name: 'Solar Eclipse Rapier',
    rarity: 'Mythical',
    valueInCoins: '19,000 Coins',
    demand: 'High',
    obtainMethod: 'Solar Solstice Wheel',
  },
  {
    name: 'Nebula Dual Daggers',
    rarity: 'Mythical',
    valueInCoins: '17,500 Coins',
    demand: 'High',
    obtainMethod: 'Cosmic Event Spin',
  },
  {
    name: 'Soul Eater Odachi',
    rarity: 'Mythical',
    valueInCoins: '22,500 Coins',
    demand: 'Very High',
    obtainMethod: 'Halloween Special Crate',
  },

  // Legendary Tier
  {
    name: 'Spirit Saber',
    rarity: 'Legendary',
    valueInCoins: '7,500 Coins',
    demand: 'Medium',
    obtainMethod: 'Legendary Sword Crate',
  },
  {
    name: 'Thunderbolt Nodachi',
    rarity: 'Legendary',
    valueInCoins: '8,200 Coins',
    demand: 'High',
    obtainMethod: 'Storm Crate',
  },
  {
    name: 'Infernal Greatsword',
    rarity: 'Legendary',
    valueInCoins: '6,800 Coins',
    demand: 'Medium',
    obtainMethod: 'Lava Crate Purchase',
  },
  {
    name: 'Frostfang Longsword',
    rarity: 'Legendary',
    valueInCoins: '5,900 Coins',
    demand: 'Medium',
    obtainMethod: 'Winter Festival Chest',
  },
  {
    name: 'Gilded Katana',
    rarity: 'Legendary',
    valueInCoins: '9,000 Coins',
    demand: 'High',
    obtainMethod: 'VIP Rank Reward',
  },
  {
    name: 'Toxic Scythe',
    rarity: 'Legendary',
    valueInCoins: '6,200 Coins',
    demand: 'Low',
    obtainMethod: 'Biohazard Chest',
  },
  {
    name: 'Bloodmoon Broadsword',
    rarity: 'Legendary',
    valueInCoins: '7,800 Coins',
    demand: 'High',
    obtainMethod: 'Bloodmoon Event',
  },
  {
    name: 'Amethyst Rapier',
    rarity: 'Legendary',
    valueInCoins: '5,400 Coins',
    demand: 'Medium',
    obtainMethod: 'Gemstone Crate',
  },

  // Rare & Uncommon Tier
  {
    name: 'Shadow Dagger',
    rarity: 'Rare',
    valueInCoins: '2,200 Coins',
    demand: 'Medium',
    obtainMethod: 'Basic Sword Shop',
  },
  {
    name: 'Crimson Sabre',
    rarity: 'Rare',
    valueInCoins: '1,800 Coins',
    demand: 'Low',
    obtainMethod: 'Basic Sword Shop',
  },
  {
    name: 'Neon Gladius',
    rarity: 'Rare',
    valueInCoins: '2,500 Coins',
    demand: 'Medium',
    obtainMethod: 'Arcade Spin Crate',
  },
  {
    name: 'Obsidian Cleaver',
    rarity: 'Rare',
    valueInCoins: '2,100 Coins',
    demand: 'Low',
    obtainMethod: 'Volcano Shop',
  },
  {
    name: 'Emerald Estoc',
    rarity: 'Rare',
    valueInCoins: '1,950 Coins',
    demand: 'Low',
    obtainMethod: 'Standard Sword Chest',
  },
  {
    name: 'Steel Broadsword',
    rarity: 'Rare',
    valueInCoins: '800 Coins',
    demand: 'Low',
    obtainMethod: 'Starter Weapon Shop',
  },
  {
    name: 'Iron Katana',
    rarity: 'Rare',
    valueInCoins: '500 Coins',
    demand: 'Low',
    obtainMethod: 'Tutorial Completion Reward',
  },
];
