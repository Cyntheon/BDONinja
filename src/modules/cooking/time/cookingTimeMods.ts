const cookingTimeMods: {
  [k: string]: number | {[k: string]: number};
} = {
  ["Clothes"]: {
    ["None"]: 0,
    ["Silver Embroidered Cook's Clothes"]: -1,
    ["+1 Silver Embroidered Cook's Clothes"]: -2,
    ["+2 Silver Embroidered Cook's Clothes"]: -3,
    ["+3 Silver Embroidered Cook's Clothes"]: -4,
    ["+4 Silver Embroidered Cook's Clothes"]: -5,
    ["+5 Silver Embroidered Cook's Clothes"]: -7
  },
  ["Alchemy Stone"]: {
    ["None"]: 0,
    ["Imperfect Alchemy Stone of Life"]: -0.5,
    ["Rough Alchemy Stone of Life"]: -0.7,
    ["Polished Alchemy Stone of Life"]: -0.9,
    ["Sturdy Alchemy Stone of Life"]: -1.1,
    ["Sharp Alchemy Stone of Life"]: -1.4,
    ["Resplendent Alchemy Stone of Life"]: -1.7,
    ["Splendid Alchemy Stone of Life"]: -2,
    ["Khan's Heart: Life"]: -1.3,
    ["Life Spirit Stone"]: -1.1
  },
  ["Utensil"]: {
    ["None"]: 0,
    ["Intermediate Cooking Utensil"]: 0,
    ["Advanced Cooking Utensil"]: -1,
    ["Supreme Cooking Utensil"]: -1,
    ["Serendia Traditional Cooking Utensil"]: +6,
    ["Calpheon Traditional Cooking Utensil"]: +7
  },
  ["Canape Outfit"]: -2,
  ["Simple Cron Meal"]: -0.6
};

export type CookTimeMod = keyof typeof cookingTimeMods;

export default cookingTimeMods;
