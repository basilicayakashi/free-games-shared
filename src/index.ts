export const FREE_GAME_PROVIDERS = {
  STEAM: {
    code: "STEAM",
    label: "Steam"
  },
  EPICGAMES: {
    code: "EPICGAMES",
    label: "Epic Games"
  },
  ITCHIO: {
    code: "ITCHIO",
    label: "itch.io"
  },
  GOG: {
    code: "GOG",
    label: "GOG"
  }
} as const;

export type FreeGameProviderCode = keyof typeof FREE_GAME_PROVIDERS;

export const FREE_GAME_PROMO_TYPES = {
  FREE_TO_KEEP: {
    code: "FREE_TO_KEEP",
    label: "Free to keep"
  },
  PLAY_FOR_FREE: {
    code: "PLAY_FOR_FREE",
    label: "Play for free"
  }
} as const;

export type FreeGamePromoTypeCode = keyof typeof FREE_GAME_PROMO_TYPES;

export function getFreeGameProviderLabel(code: string): string {
  return FREE_GAME_PROVIDERS[code as FreeGameProviderCode]?.label ?? code;
}

export function getFreeGamePromoTypeLabel(code: string): string {
  return FREE_GAME_PROMO_TYPES[code as FreeGamePromoTypeCode]?.label ?? code;
}