import React, {useEffect, useRef} from 'react'
import Row from './Row'
import { useGameDetails } from '../context/GameDetails'

// const word = 'atest'

//Define the active element in state and initialize it in row 1, column 1


const Game = () => {
  const {handleKeyDown} = useGameDetails()
  const inputReference = useRef(null)

  useEffect(() => {
    inputReference.current.focus();
  }, [])

 return(
  <div className="game-container" ref={inputReference} onKeyDown={handleKeyDown} tabIndex={-1}>
    <div className="board">
      <Row row={1}/>
      {/* <Row row={2}/> */}
      {/* <Row row={3}/>
      <Row row={4}/>
      <Row row={5}/>
      <Row row={6}/> */}
    </div>
  </div>
 )
}

export default Game
