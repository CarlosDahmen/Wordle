import { testWordlist } from "../test-utils/test-word-list";
import { wordlist } from "./wordlist";

export const validInput = (input) => {
  const isLetter = /^[A-Za-z]$/.test(input);
  return isLetter;
};

export const validWord = (input) => {
  return wordlist.includes(input);
};

export const newWord = () => {
  if (process.env.NODE_ENV === "test") {
    return testWordlist[0];
  }
  return wordlist[Math.floor(Math.random() * wordlist.length)];
};
