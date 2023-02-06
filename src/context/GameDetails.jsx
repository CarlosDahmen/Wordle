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
  const [gameState, setGameState] = useState('playing')
  const [word, setWord] = useState('')
  const [targetWord, setTargetWord] = useState('')
  const [pastGuesses, setPastGuesses] = useState([...Array(6)])

  const handleKeyDown = e => {
    if(e.key === 'Backspace'){
      setWord(word.slice(0, -1))
    }


    if (e.key === 'Enter'){
      if(turn > 5){
        console.log('you lost')
        setGameState('lost')
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
        addNewGuess(word)
        } else console.log('NOT A VALID WORD')
    }

    if(validInput(e.key)){
      if(word.length < 5){
        setWord(word + e.key.toUpperCase())
      }
    }
  }

  const addNewGuess = (word) => {
    if(word === targetWord){
      setGameState('won')
    }
    setPastGuesses((pastGuesses) => {
      let updatedGuesses = [...pastGuesses]
      updatedGuesses[turn] = word
      return updatedGuesses
    })
    // setPastGuesses(...pastGuesses, word)
    setTurn(turn => {
      return turn + 1
    })
    setWord('')
  }

  const setTileColor = (pastGuess, idx) => {
    if(pastGuesses !== undefined){
      if(checkWord(pastGuess, targetWord)[idx] === 2){
        console.log('right')
        return 'right'
      } else if(checkWord(pastGuess, targetWord)[idx] === 1){
        console.log('exists')
        return 'exists'
      } else if(checkWord(pastGuess, targetWord)[idx] === 0){
        console.log('wrong')
        return 'wrong'
      }
      return true
    }
  }


  const resetGame = () => {
    // setActiveRow(1)
    // setActiveTile(1)
  }

  const value = {
    turn,
    word,
    targetWord,
    gameState,
    pastGuesses,
    resetGame,
    setWord,
    handleKeyDown,
    setTileColor,
  }

  useEffect(() => {
    setTargetWord(newWord())
  }, [])

  return <GameDetails.Provider value={value} {...props} />
}
