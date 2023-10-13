//* knightMoves - shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

const createBoard = () => {
  const size = 8;
  const board = [];

  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      board[i].push(i, j);
    }
  }

  return board;
};
//TODO: Put together a script that creates a game board and a knight.
class ChessBoard {
  board = createBoard();

  getBoard = () => this.board;

  printBoard = () => {
    this.board.forEach((row) => console.log(`|${row}|`));
  };
}

class Knight {
  position = [0, 0];
  // It moves two squares vertically and one square horizontally, or two squares horizontally and one square vertically,
  // Two steps forward and one step to the side
  move(position) {}
}

//TODO: Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.

//TODO: Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.

//TODO: Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square.

const testBoard = new ChessBoard();
// testBoard.initBoard();
testBoard.printBoard();
