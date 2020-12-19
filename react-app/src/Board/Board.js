import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { Button } from '../components/Button/Button';
import { Cell } from '../Cell/Cell';
import { initialBoard } from './initialBoard';
import {
  rowWinner,
  colWinner,
  diagonalWinner,
  reverseDiagonalWinner,
} from '../helpers';

const PLAYER_ONE = 'x';
const PLAYER_TWO = 'o';

export const Board = ({ classes }) => {
  const [board, setBoard] = useState(cloneDeep(initialBoard));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
  const [activeGame, setActiveGame] = useState(true);

  const onClickCell = (rowIndex, colIndex) => {
    board[rowIndex][colIndex].value = currentPlayer;
    setBoard([...board]);

    if (rowWinner(board, rowIndex) || colWinner(board, colIndex) || diagonalWinner(board) || reverseDiagonalWinner(board)) return setActiveGame(false);

    setCurrentPlayer(currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE);
  };

  const buildButtonPanel = (rowIndex, panelCols) => (
    panelCols.map(
      (obj, colIndex) => (
        <Cell
          disabled={obj.value || !activeGame}
          onClick={() => onClickCell(rowIndex, colIndex)}
        >
          {obj.value}
        </Cell>
    ))
  );

  const buildButtonPanelRows = (panelRows) => (
    panelRows.map(
      (row, rowIndex) => (
        <div className={classes.boardRowContainer}>
          {buildButtonPanel(rowIndex, row)}
        </div>
      )
    )
  );

  const onClickReset = () => {
    setBoard([...cloneDeep(initialBoard)]);
    setCurrentPlayer(PLAYER_ONE);
    setActiveGame(true);
  };

  return (
    <div>
      <div className={classes.boardContainer}>{buildButtonPanelRows(board)}</div>
      <Button
        size="small"
        color="primary"
        onClick={onClickReset}
      >
        reset board
      </Button>
      <p>{activeGame ? 'Current Player:' : 'Winner:'} {currentPlayer}</p>
    </div>
  );
};
