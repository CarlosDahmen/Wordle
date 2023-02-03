import React, {useState} from 'react'
import './styles/App.scss';
import { hot } from 'react-hot-loader';
import Header from './components/Header';
import Game from './components/Game';
import Won from './components/Won'
import Lost from './components/Lost'
import { GameDetailsProvider } from './context/GameDetails';
import { useGameDetails } from './context/GameDetails';

const App = () => {
  // const [gamePhase, setGamePhase] = useState['playing']
  // let Component = Game

  // switch(gamePhase){
  //   case 'playing':
  //   Component = Game
  //   break;

  //   case 'won':
  //   Component = Won;
  //   break;

  //   case 'lost':
  //   Component = Lost
  //   break;
  //   default:
  // }

  return (
    <GameDetailsProvider>
        <Header />
        <Game />
    </GameDetailsProvider>
  );
}

export default hot(module)(App);
