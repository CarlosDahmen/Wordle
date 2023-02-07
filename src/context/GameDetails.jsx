import React, { createContext, useContext, useEffect, useState } from "react";
import { validInput, validWord, newWord } from "../utilities";
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
  const [pastGuesses, setPastGuesses] = useState([...Array(6)])
  const [checkedGuesses, setCheckedGuesses] = useState([...Array(6)])
  const [gameState, setGameState] = useState('playing')
  const [targetWord, setTargetWord] = useState('')

  const formatGuess = () => {
    let targetArray = [...targetWord]
    let formattedGuess = [...word].map((letter) => {
      return {key: letter, color:'grey'}
    })

    //check for existence and correct placement (green)
    formattedGuess.forEach((letter, i) => {
      if(targetWord[i] === letter.key){
        formattedGuess[i].color = 'green'
       targetArray[i] = null
      }
    })

    //check for letters that exist but are in the incorrect position
    formattedGuess.forEach((letter, i) => {
      if(targetArray.includes(letter.key) && letter.color !== 'green'){
        formattedGuess[i].color = 'yellow'
        targetArray[targetArray.indexOf(letter.key)] = null
      }
    })

    return formattedGuess
  }

  const handleKeyDown = e => {
    console.log(e.key)
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
        const formattedWord = formatGuess()
        addNewGuess(formattedWord)
        } else console.log('NOT A VALID WORD')
    }

    if(validInput(e.key)){
      if(word.length < 5){
        setWord(word + e.key.toUpperCase())
      }
    }
  }

  const addNewGuess = (formattedGuess) => {
    console.log('here')
    if(word === targetWord){
      setGameState('won')
    }

    setPastGuesses(pastGuesses => {
      let updatedGuesses = [...pastGuesses]
      updatedGuesses[turn] = formattedGuess
      return updatedGuesses
    })

    setCheckedGuesses((checkedGuesses) => {
      return [...checkedGuesses, formattedGuess]
    })

    setTurn(turn => {
      return turn + 1
    })

    setWord('')
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
    checkedGuesses,
    resetGame,
    setWord,
    handleKeyDown
  }

  useEffect(() => {
    setTargetWord(newWord())
  }, [])

  return <GameDetails.Provider value={value} {...props} />
}
