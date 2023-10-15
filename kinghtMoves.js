//* knightMoves - shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.
//TODO: Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.
//TODO: Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.
//TODO: Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square.

class Knight {
  constructor(position) {
    this.position = position;
  }

  possibleMoves = (position) => {
    return {
      forwardLeft: [position[0] + 2, position[1] + 1],
      forwardRight: [position[0] + 2, position[1] - 1],
      rightForward: [position[0] + 1, position[1] - 2],
      rightBack: [position[0] - 1, position[1] - 2],
      backRight: [position[0] - 2, position[1] - 1],
      backLeft: [position[0] - 2, position[1] + 1],
      leftBack: [position[0] - 1, position[1] + 2],
      leftForward: [position[0] + 1, position[1] + 2],
    };
  };

  moveTo(target) {
    const targetX = target[0];
    const targetY = target[1];

    if (this.position[0] === targetX && this.position[1] === targetY) {
      console.log('You are on this position!');
      return 'You are at this position!';
    }
    if (targetX > 7 || targetX < 0 || targetY > 7 || targetY < 0) {
      console.error('Target out of board!');
      return 'Target out of board!';
    }

    let queue = [this.position];
    const visited = new Set(`${this.position[0]},${this.position[1]}`);
    const path = {};

    while (queue.length) {
      let currentMove = queue.shift();
      let currentX = currentMove[0];
      let currentY = currentMove[1];
      let nextPossibleMoves = this.possibleMoves(currentMove);

      if (currentX === targetX && currentY === targetY) {
        const shortestPath = [];
        const basePositionStr = `${this.position[0]},${this.position[1]}`;
        let stepStr = `${targetX},${targetY}`;

        while (stepStr && stepStr !== basePositionStr) {
          shortestPath.push(stepStr);
          stepStr = path[stepStr];
        }
        shortestPath.push(basePositionStr);

        const endingWord = shortestPath.length - 1 > 1 ? 'moves' : 'move';
        console.log(`You made it in ${shortestPath.length - 1} ${endingWord}!`);

        let shortestPathStr = '';
        while (shortestPath.length) {
          const currentPath = shortestPath.pop();
          shortestPathStr +=
            shortestPath.length >= 1 ? `${currentPath} -> ` : `${currentPath}`;
        }

        console.log(shortestPathStr);
        return shortestPathStr;
      }

      for (let move in nextPossibleMoves) {
        const nextMove = nextPossibleMoves[move];
        const nextX = nextMove[0];
        const nextY = nextMove[1];
        const nextMoveStr = `${nextX},${nextY}`;

        if (
          nextX < 8 &&
          nextX >= 0 &&
          nextY < 8 &&
          nextY >= 0 &&
          !visited.has(nextMoveStr)
        ) {
          queue.push(nextMove);
          visited.add(nextMoveStr);
          path[nextMoveStr] = `${currentX},${currentY}`;
        }
      }
    }
  }
}

const testKnight = new Knight([0, 0]);

testKnight.moveTo([5, 5]);
testKnight.moveTo([3, 6]);
testKnight.moveTo([1, 2]);
