export declare const FREE_GAME_PROVIDERS: {
    readonly STEAM: {
        readonly code: "STEAM";
        readonly label: "Steam";
    };
    readonly EPICGAMES: {
        readonly code: "EPICGAMES";
        readonly label: "Epic Games";
    };
    readonly ITCHIO: {
        readonly code: "ITCHIO";
        readonly label: "itch.io";
    };
    readonly GOG: {
        readonly code: "GOG";
        readonly label: "GOG";
    };
};
export type FreeGameProviderCode = keyof typeof FREE_GAME_PROVIDERS;
export declare const FREE_GAME_PROMO_TYPES: {
    readonly FREE_TO_KEEP: {
        readonly code: "FREE_TO_KEEP";
        readonly label: "Free to keep";
    };
    readonly PLAY_FOR_FREE: {
        readonly code: "PLAY_FOR_FREE";
        readonly label: "Play for free";
    };
};
export type FreeGamePromoTypeCode = keyof typeof FREE_GAME_PROMO_TYPES;
export declare function getFreeGameProviderLabel(code: string): string;
export declare function getFreeGamePromoTypeLabel(code: string): string;
//# sourceMappingURL=index.d.ts.map