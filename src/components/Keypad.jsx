import React, { useState, useEffect } from "react";
import { keyboardLetters } from "../utilities/letters";
import { useGameDetails } from "../context/GameDetails.jsx";

const Keypad = ({ usedKeys }) => {
  const { handleKeyDown } = useGameDetails();
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(keyboardLetters);
  }, []);

  const clickHandler = (e) => {
    let fakeE = { key: `${e.target.innerText}` };
    handleKeyDown(fakeE);
  };

  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key.toUpperCase()];
          return (
            <div onClick={clickHandler} key={letter.key} className={color}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
