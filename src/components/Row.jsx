import React, { useState } from 'react'
import Tile from './Tile'
import { useGameDetails } from '../context/GameDetails'

const Row = ({row}) => {

  return (
    <div className="row">
      <Tile row={row} idx={1}/>
      <Tile row={row} idx={2}/>
      <Tile row={row} idx={3}/>
      <Tile row={row} idx={4}/>
      <Tile row={row} idx={5}/>
    </div>
  )
}

export default Row
