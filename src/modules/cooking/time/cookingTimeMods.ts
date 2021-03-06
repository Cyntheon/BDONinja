const cookingTimeMods: {
  [k: string]: number | {[k: string]: number};
} = {
  ["Clothes"]: {
    ["Silver Embroidered Cook's Clothes"]: -1,
    ["+1 Silver Embroidered Cook's Clothes"]: -2,
    ["+2 Silver Embroidered Cook's Clothes"]: -3,
    ["+3 Silver Embroidered Cook's Clothes"]: -4,
    ["+4 Silver Embroidered Cook's Clothes"]: -5,
    ["+5 Silver Embroidered Cook's Clothes"]: -7
  },
  ["Alchemy Stone"]: {
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
    ["Cooking Utensil"]: 0,
    ["Intermediate Cooking Utensil"]: 0,
    ["Advanced Cooking Utensil"]: -1,
    ["Supreme Cooking Utensil"]: -1,
    ["Balenos Traditional Cooking Utensil"]: +5,
    ["Serendia Traditional Cooking Utensil"]: +6,
    ["Calpheon Traditional Cooking Utensil"]: +7
  },
  ["Food"]: {
    ["Teff Sandwich"]: -0.5,
    ["Spicy Teff Sandwich"]: -0.5,
    ["Seafood Cron Meal"]: -0.6
  },
  ["Canape Outfit"]: -2,
  ["Verdure Draught"]: -1
};

export type CookTimeMod = keyof typeof cookingTimeMods;

export default cookingTimeMods;
