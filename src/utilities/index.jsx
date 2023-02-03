import { wordlist } from "./wordlist"

export const checkWord = (word, realWord) => {

  //check input against word
  // if(input === word){
  //   return //change gameState to Won
  // }

  const checkedWord = []
  for(let i = 0; i < word.length; i++){
      if(!word.includes(realWord[i])){
        checkedWord.push(0)
      } else if(word.includes(realWord[i]) && realWord[i] !== word[i]){
        checkedWord.push(1)
      } else if (realWord[i] === word[i]){
        checkedWord.push(2)
      }
    }
  return checkedWord
}


export const validInput = (input) => {
  const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return validChars.includes(input)
}

export const validWord = (input) => {
  return wordlist.includes(input)
}

export const newWord = () => {
  return wordlist[Math.floor(Math.random() * wordlist.length)]
}
