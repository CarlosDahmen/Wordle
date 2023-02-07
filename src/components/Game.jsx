import React, { useEffect } from 'react'
import Grid from './Grid'
import { useGameDetails } from '../context/GameDetails'

const Game = () => {
  const { handleKeyDown, word, pastGuesses, turn } = useGameDetails();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <Grid guesses={pastGuesses} currentGuess={word} turn={turn}/>
  )
}

export default Game
