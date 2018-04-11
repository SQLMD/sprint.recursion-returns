class Board {
  constructor(size) {
    this.size = size;
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

// eslint-disable-next-line no-unused-vars
class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
  }

  solve() {
    const result = this.move(0, 0);
    return result;
  }

  clearBoard() {
    for (let row = 0; row < this.board.size; row += 1) {
      for (let col = 0; col < this.board.size; col += 1) {
        if (this.board.board[row][col]) {
          this.board.togglePiece(row, col);
        }
      }
    }
  }

  move(curRow, curCol) {
    if (this.isDestination(curRow, curCol)) {
      this.clearBoard();
      return 1;
    }
    return (
      this.goUp(curRow, curCol) +
      this.goDown(curRow, curCol) +
      this.goLeft(curRow, curCol) +
      this.goRight(curRow, curCol)
    );
  }

  goUp(curRow, curCol) {
    const nextRow = curRow - 1;
    if (this.isIllegalCell(nextRow, curCol)) {
      return 0;
    } else {
      this.board.togglePiece(nextRow, curCol);
      return this.move(nextRow, curCol);
    }
  }

  goDown(curRow, curCol) {
    const nextRow = curRow + 1;
    if (this.isIllegalCell(nextRow, curCol)) {
      return 0;
    } else {
      this.board.togglePiece(nextRow, curCol);
      return this.move(nextRow, curCol);
    }
  }

  goLeft(curRow, curCol) {
    const nextCol = curCol - 1;
    if (this.isIllegalCell(curRow, nextCol)) {
      return 0;
    } else {
      this.board.togglePiece(curRow, nextCol);
      return this.move(curRow, nextCol);
    }
  }

  goRight(curRow, curCol) {
    const nextCol = curCol + 1;
    if (this.isIllegalCell(curRow, nextCol)) {
      return 0;
    } else {
      this.board.togglePiece(curRow, nextCol);
      return this.move(curRow, nextCol);
    }
  }

  isDestination(row, col) {
    return row === this.board.size - 1 && col === this.board.size - 1;
  }

  isIllegalCell(row, col) {
    return (
      this.board.hasBeenVisited(row, col) ||
      row < 0 ||
      col < 0 ||
      row > this.board.size - 1 ||
      col > this.board.size - 1
    );
  }
}

module.exports = RobotPaths;
