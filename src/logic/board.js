import { WINNER_COMBOS } from "../constants";



export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (boardToCheck[a] &&
     boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a];
    }
  }
  return null;
}

export const checkEndGame = (boardToCheck) => {
  for (const index of [0, 1, 2, 3, 4, 5, 6, 7, 8]) {
    if (boardToCheck[index] === null) {
      return false;
    }
  }
  return true;
}