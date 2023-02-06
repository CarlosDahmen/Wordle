import React from 'react'
import Tile from './Tile'

const Row = ({word, guess, row}) => {
  return (
    <div className="row">
      <Tile row={row} idx={0}/>
      <Tile row={row} idx={1}/>
      <Tile row={row} idx={2}/>
      <Tile row={row} idx={3}/>
      <Tile row={row} idx={4}/>
    </div>
  )
}

export default Row
