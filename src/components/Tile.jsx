import React from 'react'
import { useGameDetails } from '../context/GameDetails'
var cx = require('classnames');


const Tile = ({row, idx}) => {

  const { setTileColor, pastGuesses, turn, word} = useGameDetails()

  if(turn === row){
    return (
      <div className={cx('tile')}>
        {word[idx]}
      </div>
    )
  }

  if(pastGuesses[row]){
    return(
      <div className={cx('tile', setTileColor(pastGuesses[row], idx))}>
      {pastGuesses[row][idx]}
    </div>
    )
  }

  return (
    <div className={cx('tile')}>
    </div>
  )
}

export default Tile
