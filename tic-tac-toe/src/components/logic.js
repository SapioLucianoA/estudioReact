import { WinnerCombos } from "./const";

export const checkWinner = (boardToCheck) => {
    for (const combos of WinnerCombos) {
      const [a, b, c] = combos;
  
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };