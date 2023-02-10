import React from "react";
import "./styles/App.scss";
import { hot } from "react-hot-loader";
import Game from "./components/Game";
import { GameDetailsProvider } from "./context/GameDetails.jsx";

const App = () => {
  return (
    <GameDetailsProvider>
      <Game />
    </GameDetailsProvider>
  );
};

export default hot(module)(App);
