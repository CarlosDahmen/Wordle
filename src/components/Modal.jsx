import React from "react"

const Modal = ({outcome, turn, solution, reset}) => {

  if(outcome === 'won'){
    return(
      <div className="modal">
        <div>
          <h1>You Won!</h1>
          <p className="solution">You found the solution in {turn} tries</p>
          <button onClick={reset}>Play Again</button>
        </div>
      </div>
    )
  }

  if(outcome === 'lost'){
    return(
      <div className="modal">
        <div>
          <h1>You Lost!</h1>
          <p className="solution">The solution was {solution}</p>
          <button onClick={reset}>Play Again</button>
        </div>
      </div>
    )
  }
}

export default Modal
