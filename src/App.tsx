import React from 'react';
import DisplayData from './components/DisplayData';
import GlobalStyle from './styles/GlobalStyle';
import { getTelegramWebAppData } from './utils/getTelegramWebAppData';

const App: React.FC = () => {
    const telegramData = getTelegramWebAppData();

    return (
        <>
            <GlobalStyle />
            <h1>Telegram Mini App</h1>
            <DisplayData telegramData={telegramData} />
        </>
    );
};

export default App;