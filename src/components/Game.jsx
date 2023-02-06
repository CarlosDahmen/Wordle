import React, { useEffect } from 'react'
import Row from './Row'
import { useGameDetails } from '../context/GameDetails'

const Game = () => {

  const { handleKeyDown, pastGuesses, turn, gameState, targetWord } = useGameDetails();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    console.log(pastGuesses, turn, gameState)
  }, [pastGuesses, turn, gameState, targetWord])

 return(
  <div className="game-container">
    <div className="board">
      {pastGuesses.map((guess, i) => {
        return <Row guess={guess} row={i} key={i}/>
        })}
    </div>
  </div>
 )
}

export default Game
