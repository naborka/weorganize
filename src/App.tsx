import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayData from './components/DisplayData';
import GlobalStyle from './styles/GlobalStyle';
import { parseInitData } from './utils/parseInitData';

const App: React.FC = () => {
  const { initData, startAppParams } = parseInitData();

  return (
      <>
        <GlobalStyle />
        <h1>Telegram Mini App</h1>
        <DisplayData initData={initData} startAppParams={startAppParams} />
      </>
  );
};

export default App;