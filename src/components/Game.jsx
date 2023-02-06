import React, { useEffect } from 'react'
import Row from './Row'
import { useGameDetails } from '../context/GameDetails'

const Game = () => {

  const { handleKeyDown } = useGameDetails();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

 return(
  <div className="game-container">
    <div className="board">
      <Row row={0}/>
      {/* <Row row={2} /> */}
      {/* <Row row={3}/>
      <Row row={4}/>
      <Row row={5}/>
      <Row row={6}/> */}
    </div>
  </div>
 )
}

export default Game
