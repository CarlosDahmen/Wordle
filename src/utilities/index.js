import { testWordlist } from "../test-utils/test-word-list";
import { wordlist } from "./wordlist";

export const validInput = (input) => {
  const isLetter = /^[A-Za-z]$/.test(input);
  return isLetter;

  // const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // return validChars.includes(input)
};

export const validWord = (input) => {
  if (process.env.NODE_ENV === "test") {
    return testWordlist.includes(input);
  }
  return wordlist.includes(input);
};

export const newWord = () => {
  if (process.env.NODE_ENV === "test") {
    return testWordlist[0];
  }
  return wordlist[Math.floor(Math.random() * wordlist.length)];
};
