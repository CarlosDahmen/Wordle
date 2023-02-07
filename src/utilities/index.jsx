import { wordlist } from "./wordlist"

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
