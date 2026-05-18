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
};
export const FREE_GAME_PROMO_TYPES = {
    FREE_TO_KEEP: {
        code: "FREE_TO_KEEP",
        label: "Free to keep"
    },
    PLAY_FOR_FREE: {
        code: "PLAY_FOR_FREE",
        label: "Play for free"
    }
};
export function getFreeGameProviderLabel(code) {
    return FREE_GAME_PROVIDERS[code]?.label ?? code;
}
export function getFreeGamePromoTypeLabel(code) {
    return FREE_GAME_PROMO_TYPES[code]?.label ?? code;
}
//# sourceMappingURL=index.js.map