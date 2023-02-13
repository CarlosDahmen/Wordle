import React from "react";

const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past" data-testid="row">
        {guess.map((letter, i) => (
          <div key={i} className={letter.color}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div>
        <div className="row current" data-testid="row">
          {letters.map((letter, i) => (
            <div key={i} className="filled">
              {letter}
            </div>
          ))}
          {[...Array(5 - letters.length)].map((_, i) => (
            <div key={i} data-testid="tile"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="row" data-testid="row">
      <div data-testid="tile"></div>
      <div data-testid="tile"></div>
      <div data-testid="tile"></div>
      <div data-testid="tile"></div>
      <div data-testid="tile"></div>
    </div>
  );
};

export default Row;
