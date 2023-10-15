//* knightMoves - shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

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
    if (targetX > 7 || targetX < 0 || targetY > 7 || targetY < 0) {
      console.error('Target out of board!');
      return 'Target out of board!';
    }

    let queue = [this.position];
    const visited = new Set();
    // const path = new Map();
    const path = {};

    visited.add(this.position);

    while (queue.length) {
      let currentMove = queue.shift();
      let currentX = currentMove[0];
      let currentY = currentMove[1];
      let nextPossibleMoves = this.possibleMoves(currentMove);

      if (currentX === targetX && currentY === targetY) {
        console.log(path);
        const shortestPath = [];
        let step = target;
        console.log(path[`${step[0]},${step[1]}`]);

        while (step && step !== `${this.position[0]},${this.position[1]}`) {
          console.log(step);
          shortestPath.push(`${step}`);
          step = path[step];
        }
        shortestPath.push(`${this.position}`);
        console.log(shortestPath);
        queue = [];
        console.log('Found It!');
        return 'Found it!';
      }

      for (let move in nextPossibleMoves) {
        let nextMove = nextPossibleMoves[move];

        let nextX = nextMove[0];
        let nextY = nextMove[1];
        if (
          nextX < 8 &&
          nextX >= 0 &&
          nextY < 8 &&
          nextY >= 0 &&
          !visited.has(`${nextX}, ${nextY}`)
        ) {
          queue.push(nextMove);
          visited.add(`${nextX}, ${nextY}`);
          path[nextMove] = `${currentX},${currentY}`;
        }
      }
    }
  }
}

//TODO: Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.

//TODO: Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.

//TODO: Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square.

const testKnight = new Knight([0, 0]);

testKnight.moveTo([5, 5]);
testKnight.moveTo([3, 6]);
testKnight.moveTo([1, 2]);

// const testMap = new Map();
// const test1 = [0, 0];
// const test2 = [1, 4];
// const test3 = [3, 3];
// const test4 = [4, 2];
// testMap.set(test2, test1);
// testMap.set(test3, test2);
// testMap.set(test4, test3);

// let stepTest = test4;
// let result = [];
// while (stepTest) {
//   result.push(stepTest);
//   stepTest = testMap.get(stepTest);
//   console.log(stepTest);
// }

// const nextStep = testMap.get(stepTest);

// console.log(result);
