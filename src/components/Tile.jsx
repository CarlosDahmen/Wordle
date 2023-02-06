import React from 'react'
import { useGameDetails } from '../context/GameDetails'
var cx = require('classnames');


const Tile = ({row, idx}) => {
  console.log('ROW IN COMPONENT TILE', row)

  const {word, setTileColor, pastGuesses} = useGameDetails()

  return (
  <div className={cx('tile', setTileColor(pastGuesses, row, idx))}>
    {word[idx - 1]}
  </div>
  )
}

export default Tile
