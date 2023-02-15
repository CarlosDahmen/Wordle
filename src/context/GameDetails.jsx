import React, { createContext, useContext, useEffect, useState } from "react";
import { validInput, validWord, newWord } from "../utilities/utils";
const GameDetails = createContext();

//create custom hook to check if there is a provider

export const useGameDetails = () => {
  const contextValue = useContext(GameDetails);

  if (!contextValue) {
    throw new Error("useGameDetails must be called within GameDetailsProvider");
  }
  return contextValue;
};

export const GameDetailsProvider = (props) => {
  const [turn, setTurn] = useState(0);
  const [word, setWord] = useState("");
  const [pastGuesses, setPastGuesses] = useState([...Array(6)]);
  const [checkedGuesses, setCheckedGuesses] = useState([...Array(6)]);
  const [gameState, setGameState] = useState("playing"); // playing, won, lost
  const [targetWord, setTargetWord] = useState("");
  const [usedKeys, setUsedKeys] = useState({}); // {a:'yellow', b:'green', c:'gray', etc...}
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);

  const formatGuess = () => {
    let targetArray = [...targetWord];
    let formattedGuess = [...word].map((letter) => {
      return { key: letter, color: "grey" };
    });

    //check for existence and correct placement (green)
    formattedGuess.forEach((letter, i) => {
      if (targetWord[i] === letter.key) {
        formattedGuess[i].color = "green";
        targetArray[i] = null;
      }
    });

    //check for letters that exist but are in the incorrect position
    formattedGuess.forEach((letter, i) => {
      if (targetArray.includes(letter.key) && letter.color !== "green") {
        formattedGuess[i].color = "yellow";
        targetArray[targetArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      setWord(word.slice(0, -1));
      setMessage("");
    }

    if (e.key === "Enter") {
      if (history.includes(word)) {
        setMessage("No repeated words");
        return;
      }

      if (word.length !== 5) {
        setMessage("Words must be 5 characters");
        return;
      }

      if (validWord(word)) {
        const formattedWord = formatGuess();
        addNewGuess(formattedWord);
      } else setMessage("Not a valid Word");
    }

    if (validInput(e.key)) {
      if (word.length < 5) {
        setWord(word + e.key.toUpperCase());
      }
    }
  };

  const addNewGuess = (formattedGuess) => {
    if (word === targetWord) {
      setTimeout(() => {
        setGameState("won");
      }, 2000);
    }

    setHistory((prevHistory) => {
      setHistory([...prevHistory, word]);
    });

    setPastGuesses((pastGuesses) => {
      let updatedGuesses = [...pastGuesses];
      updatedGuesses[turn] = formattedGuess;
      return updatedGuesses;
    });

    setCheckedGuesses((checkedGuesses) => {
      return [...checkedGuesses, formattedGuess];
    });

    setTurn((turn) => {
      return turn + 1;
    });

    setUsedKeys((usedKeys) => {
      const updatedKeys = { ...usedKeys };

      formattedGuess.forEach((letter) => {
        const currentColor = updatedKeys[letter.key];

        if (letter.color === "green") {
          updatedKeys[letter.key] = "green";
          return;
        }

        if (letter.color === "yellow" && currentColor !== "green") {
          updatedKeys[letter.key] = "yellow";
          return;
        }
        if (
          letter.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          updatedKeys[letter.key] = "grey";
          return;
        }
      });
      return updatedKeys;
    });

    setWord("");

    if (turn >= 5) {
      setTimeout(() => {
        setGameState("lost");
      }, 2000);
      return;
    }
  };

  const resetGame = () => {
    setTurn(0);
    setWord("");
    setPastGuesses([...Array(6)]);
    setCheckedGuesses([...Array(6)]);
    setGameState("playing");
    setUsedKeys({});
    setTargetWord(newWord());
    clearTimeout();
  };

  const value = {
    message,
    turn,
    word,
    targetWord,
    gameState,
    pastGuesses,
    checkedGuesses,
    usedKeys,
    resetGame,
    setWord,
    handleKeyDown,
  };

  useEffect(() => {
    setTargetWord(newWord());
  }, []);

  return <GameDetails.Provider value={value} {...props} />;
};
