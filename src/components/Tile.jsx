import React, { useState } from 'react'
import { useGameDetails } from '../context/GameDetails'

const Tile = ({row, idx}) => {
  const {activeTile, activeRow, word, setWord, updateTile} = useGameDetails()

  const submitHandler = (e) => {
    e.preventDefault()
    //set letter in word in game state
  }

  console.log(row)

  return (
  <div className='tile' id={`${row}${idx}`}>
    {word[idx - 1]}
    {/* <form  onSubmit={submitHandler}>
      <input disabled={!(idx === activeTile && row.row === activeRow)} onChange={changeHandler} pattern="[A-Za-z]{1}" maxLength={1} type="text" value={word[idx]}></input>
    </form> */}
  </div>
  )
}

export default Tile
