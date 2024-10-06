import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./components/const";
import { checkWinner } from "./components/logic";
import { WinnerModal } from "./components/WinnerModal";



function App() {
  
  // colocamos aca porque queremos que sea un estado porque queremos que se renderice siempre
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn")
    if(turnFromLocalStorage) return JSON.parse(turnFromLocalStorage)
    return TURNS.X
  });  
  

  
  //valor inicial
  const [board, setBoard] = useState(() =>{
    const boardFromLocalStorage = window.localStorage.getItem("board")
    if(boardFromLocalStorage) return JSON.parse(boardFromLocalStorage)
    return Array(9).fill(null)
  })
  
  
  const checkGameOver = (newBoard) =>{
    return newBoard.every((Square) => Square != null)
  }

  //actualziacion
  const updateBoard = (index) => {
  //si ya tengo un valor no hagas anda
    if(board[index] || winner) return;

    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem("board", JSON.stringify(newBoard))
    window.localStorage.setItem("turn", newTurn)

    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if (checkGameOver(newBoard)){
      setWinner(false)
    }
  }

  //quien gano
  const [winner, setWinner] = useState(null);


  
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
  }

  return (
    <>
      <main className="board">
        <h1>¡TIC-TAC-TOE!</h1>
        <section className="game">
          {
            board.map((square, index)=> {
              return (
                <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                {square}
                </Square>
              )
            })
          } 
           
        </section>
        <section className="turn">
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
            </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
            </Square>
        </section>
        <button onClick={resetGame}>Restart</button>
       
       <WinnerModal resetGame={resetGame} winner={winner}/>
       
      </main>
    </>
  )
}

export default App
