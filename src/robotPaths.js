class Board {
  constructor(size) {
    this.size = size - 1;
    this.squares = [];
    for (let row = 0; row < size; row += 1) {
      this.squares.push([]);
      for (let col = 0; col < size; col += 1) {
        this.squares[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.squares[row][col] = !this.squares[row][col];
  }
  hasBeenVisited(row, col) {
    const result = this.squares[row][col];
    return result;
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
    let result = 0;
    result += this.move(this.row, this.col);
    return result;
  }

  move(curRow, curCol) {
    this.board.togglePiece(curRow, curCol);
    if (this.isDestination(curRow, curCol)) {
      this.board.togglePiece(curRow, curCol);
      return 1;
    }
    let result =
      this.goUp(curRow, curCol) +
      this.goDown(curRow, curCol) +
      this.goLeft(curRow, curCol) +
      this.goRight(curRow, curCol);
    this.board.togglePiece(curRow, curCol);
    return result;
  }

  goUp(curRow, curCol) {
    const nextRow = curRow - 1;
    if (this.isIllegalCell(nextRow, curCol)) {
      return 0;
    } else {
      return this.move(nextRow, curCol);
    }
  }

  goDown(curRow, curCol) {
    const nextRow = curRow + 1;
    if (this.isIllegalCell(nextRow, curCol)) {
      return 0;
    } else {
      return this.move(nextRow, curCol);
    }
  }

  goLeft(curRow, curCol) {
    const nextCol = curCol - 1;
    if (this.isIllegalCell(curRow, nextCol)) {
      return 0;
    } else {
      return this.move(curRow, nextCol);
    }
  }

  goRight(curRow, curCol) {
    const nextCol = curCol + 1;
    if (this.isIllegalCell(curRow, nextCol)) {
      return 0;
    } else {
      return this.move(curRow, nextCol);
    }
  }

  isDestination(row, col) {
    return row === this.board.size && col === this.board.size;
  }

  isIllegalCell(row, col) {
    return (
      row < 0 ||
      col < 0 ||
      row > this.board.size ||
      col > this.board.size ||
      this.board.hasBeenVisited(row, col)
    );
  }
}
