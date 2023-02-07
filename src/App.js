import React from 'react'
import './styles/App.scss';
import { hot } from 'react-hot-loader';
import Header from './components/Header';
import Game from './components/Game';
import { GameDetailsProvider } from './context/GameDetails';

const App = () => {
  return (
    <GameDetailsProvider>
        <Header />
        <Game />
    </GameDetailsProvider>
  );
}

export default hot(module)(App);
