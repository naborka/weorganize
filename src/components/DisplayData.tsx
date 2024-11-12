import React from 'react';

interface TelegramDataProps {
    telegramData: {
        initData: string;
        initDataUnsafe: object;
        platform: string;
        colorScheme: string;
        themeParams: object;
        isExpanded: boolean;
        viewportHeight: number;
        viewportStableHeight: number;
        headerColor: string;
        backgroundColor: string;
        bottomBarColor: string;
    };
}

const DisplayData: React.FC<TelegramDataProps> = ({ telegramData }) => (
    <div>
        <h2>Telegram WebApp Data:</h2>
        <pre>{JSON.stringify(telegramData, null, 2)}</pre>
    </div>
);

export default DisplayData;