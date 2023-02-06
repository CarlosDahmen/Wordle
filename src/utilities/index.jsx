import { wordlist } from "./wordlist"

export const checkWord = (word, targetWord) => {
  console.log('word', word, 'targetword', targetWord)
  const checkedWord = []

  for(let i = 0; i < word.length; i++){
      if(!word.includes(targetWord[i])){
        checkedWord.push(0)
      } else if(word.includes(targetWord[i]) && targetWord[i] !== word[i]){
        checkedWord.push(1)
      } else if (targetWord[i] === word[i]){
        checkedWord.push(2)
      }
    }
  return checkedWord
}


export const validInput = (input) => {
  const isLetter = /^[A-Za-z]$/.test(input)
  return isLetter

  // const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // return validChars.includes(input)
}

export const validWord = (input) => {
  return wordlist.includes(input)
}

export const newWord = () => {
  const asdf = wordlist[Math.floor(Math.random() * wordlist.length)]
  console.log(asdf)
  return asdf
}
