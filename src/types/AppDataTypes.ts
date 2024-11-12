export interface ThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
}

export interface InitData {
    initData: string;
    initDataUnsafe: object;
    platform: string;
    colorScheme: string;
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    bottomBarColor: string;
}