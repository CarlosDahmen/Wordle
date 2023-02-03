import React, { createContext, useContext, useEffect, useState } from "react";
import { validInput, checkWord, validWord, newWord } from "../utilities";
const GameDetails = createContext()

//create custom hook to check if there is a provider

export const useGameDetails = () => {
  const contextValue = useContext(GameDetails)

  if(!contextValue){
    throw new Error(
      'useGameDetails must be called within GameDetailsProvider'
    )
  }
  return contextValue
}

export const GameDetailsProvider = (props) => {
  const [targetWord, setTargetWord] = useState('')
  const [word, setWord] = useState('')
  const [activeRow, setActiveRow] = useState(1)
  const [activeTile, setActiveTile] = useState(1)

  const handleKeyDown = e => {
    // console.log('ACTIVE TILE', activeTile)
    // console.log('ACTIVE ROW', activeRow)
    // console.log('KEY PRESSED', e.key)
    if(validInput(e.key) && activeTile < 6){
      // console.log('VALID KEY', e.key)
      setWord(word + e.key.toUpperCase())
      updateTile()
    } else if (e.key === 'Enter'){
      console.log('word is valid', validWord(word))
      if(validWord(word)){
        console.log(checkWord(word, targetWord))
        setActiveRow(activeRow + 1)
        // checkWord(word)
      } else console.log('NOT A VALID WORD')
    }
  }

  const resetGame = () => {
    setActiveRow(1)
    setActiveTile(1)
  }

  const updateTile = () => {
      setActiveTile(activeTile + 1)
      console.log('tile updated to', activeTile + 1)
    }

  const value = {
    word,
    activeRow,
    activeTile,
    resetGame,
    setWord,
    updateTile,
    handleKeyDown
  }

  useEffect(() => {
    setTargetWord(newWord)
  }, [])

  return <GameDetails.Provider value={value} {...props} />
}
