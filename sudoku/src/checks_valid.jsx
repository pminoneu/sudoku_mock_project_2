// This checks the validity of the new inputted value in the sudoku board

import React from 'react';

function isValidMove(board, row, col, value) {
  const size = board.length;
  const boxSize = size === 9 ? 3 : 2;

  const invalidMove = false;
    const validMove = true;

  // Check row
  for (let j = 0; j < size; j++) {
    if (board[row][j] === value) {
      return invalidMove;
    }
  }

  // Check column
  for (let i = 0; i < size; i++) {
    if (board[i][col] === value) {
      return invalidMove;
    }
  }

  // Check box
  const boxRowStart = Math.floor(row / boxSize) * boxSize;
  const boxColStart = Math.floor(col / boxSize) * boxSize;

  for (let i = boxRowStart; i < boxRowStart + boxSize; i++) {
    for (let j = boxColStart; j < boxColStart + boxSize; j++) {
      if (board[i][j] === value) {
        return false;
      }
    }
  }

  return validMove;
}

export default isValidMove;
