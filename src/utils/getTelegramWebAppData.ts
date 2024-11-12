import { InitData } from '../types/AppDataTypes';

export const getTelegramWebAppData = () => {
    const { Telegram } = window as any;

    const {
        initData,
        initDataUnsafe,
        platform,
        colorScheme,
        themeParams,
        isExpanded,
        viewportHeight,
        viewportStableHeight,
        headerColor,
        backgroundColor,
        bottomBarColor,
    } = Telegram.WebApp || {};

    const urlParams = new URLSearchParams(window.location.search);
    const startAppParam = urlParams.get('tgWebAppStartParam') || urlParams.get('startapp');

    return {
        initData,
        initDataUnsafe,
        platform,
        colorScheme,
        themeParams,
        isExpanded,
        viewportHeight,
        viewportStableHeight,
        headerColor,
        backgroundColor,
        bottomBarColor,
        startAppParam,
    };
};