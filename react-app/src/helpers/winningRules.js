export const rowWinner = (board, index) => {
  if (!(board[index][0].value && board[index][1].value && board[index][2].value)) return false;
  console.log(board[index][0], board[index][1], board[index][2]);
  return (board[index][0].value === board[index][1].value) && (board[index][1].value === board[index][2].value);
};

export const colWinner = (board, index) => {
  if (!(board[0][index].value && board[1][index].value && board[2][index].value)) return false;

  return (board[0][index].value === board[1][index].value) && (board[1][index].value === board[2][index].value);
};

export const diagonalWinner = (board) => {
  if (!(board[0][0].value && board[1][1].value && board[2][2].value)) return false;
  return (board[0][0].value === board[1][1].value) && (board[1][1].value === board[2][2].value);
};

export const reverseDiagonalWinner = (board) => {
  if (!(board[2][0].value && board[1][1].value && board[0][2].value)) return false;
  return (board[2][0].value === board[1][1].value) && (board[1][1].value === board[0][2].value);
};
