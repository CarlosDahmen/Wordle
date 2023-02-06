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
  const [turn, setTurn] = useState(0)
  const [word, setWord] = useState('')
  const [targetWord, setTargetWord] = useState('')
  const [pastGuesses, setPastGuesses] = useState([])

  const handleKeyDown = e => {
    if(e.key === 'Backspace'){
      setWord(word.slice(0, -1))
    }


    if (e.key === 'Enter'){
      if(turn > 5){
        console.log('you lost')
        return
      }

      if(pastGuesses.includes(word)){
        console.log('No repeated words')
        return
      }

      if(word.length !== 5){
        console.log('Words must be 5 characters')
        return
      }

      if(validWord(word)){
        console.log(word)
        const newGuess = [checkWord(word, targetWord)]
        setTurn(turn + 1)
        setPastGuesses(...pastGuesses, newGuess)
        } else console.log('NOT A VALID WORD')
    }

    if(validInput(e.key)){
      setWord(word + e.key.toUpperCase())
    }
  }

  const setTileColor = (row, idx) => {
    console.log(row, idx, pastGuesses)
    if(pastGuesses.length !== 0){
      if(pastGuesses[row][idx] === 2){
        return 'right'
      } else if(pastGuesses[row][idx] === 1){
      return 'exists'
      } else if(pastGuesses[row][idx] === 0){
        return 'wrong'
      }
    }
  }


  const resetGame = () => {
    // setActiveRow(1)
    // setActiveTile(1)
  }

  const updateTile = () => {
      // setActiveTile(activeTile + 1)
      // setActiveRef(parseInt(activeRow.toString().concat(activeTile.toString())))
    }

  const value = {
    word,
    resetGame,
    setWord,
    updateTile,
    handleKeyDown,
    setTileColor
  }

  useEffect(() => {
    setTargetWord(newWord)
  }, [])

  return <GameDetails.Provider value={value} {...props} />
}
