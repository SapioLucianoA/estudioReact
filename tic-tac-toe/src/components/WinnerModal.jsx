import { Square } from "./Square"

export function WinnerModal ({winner, resetGame}) {
    if(winner == null) return null
    const winnerTest = winner === false ? 'Empate' : 'El ganador es: ' + winner
    return (
     <section className="winner">
       <div className="text">
         <h2>
           {winnerTest}
         </h2>
         <header className="win">
             {winner && <Square>{winner}</Square>}
         </header>
         <footer >
           <button onClick={resetGame}> Restart </button>
         </footer>
       </div>
     </section>
    )
}