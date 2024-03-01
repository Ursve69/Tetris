export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const isValid = (tetromino, tetrominoCol, tetrominoRow, playArea) => {
  for (let row = 0; row < tetromino.length; row++) {
    for (let col = 0; col < tetromino[row].length; col++) {
      if (
        tetromino[row][col] &&
        (tetrominoCol + col < 0 ||
          tetrominoCol + col >= playArea[0].length ||
          tetrominoRow + row >= playArea.length ||
          playArea[tetrominoRow + row][tetrominoCol + col])
      ) {
        return false;
      }
    }
  }

  return true;
};

export const showGameMessage = (context, canvas, text) => {
  context.fillStyle = "black";
  context.globalAlpha = 0.75;
  context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
  context.globalAlpha = 1;
  context.fillStyle = "white";
  context.font = "36px monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);
};

export const rapidFallDown = (tetromino, playArea, placeTetromino) => {
  const row = tetromino.row + 1;

  if (!isValid(tetromino.matrix, tetromino.col, row, playArea)) {
    tetromino.row = row - 1;
    placeTetromino();
    return;
  }

  tetromino.row = row;
};

const rotate = (matrix) => {
  const N = matrix.length - 1;
  const result = matrix.map((row, i) => row.map((val, j) => matrix[N - j][i]));
  return result;
};

export const rotateOnClickUp = (tetromino, playArea) => {
  const matrix = rotate(tetromino.matrix);

  if (isValid(matrix, tetromino.col, tetromino.row, playArea)) {
    tetromino.matrix = matrix;
  }
};

export const moveOnClickRigth = (tetromino, playArea) => {
  const col = tetromino.col + 1;

  if (isValid(tetromino.matrix, col, tetromino.row, playArea)) {
    tetromino.col = col;
  }
};

export const moveOnClickLeft = (tetromino, playArea) => {
  const col = tetromino.col - 1;

  if (isValid(tetromino.matrix, col, tetromino.row, playArea)) {
    tetromino.col = col;
  }
};

export const showNextTetromino = (name) => {
  const block = document.querySelector(".tetromino");

  switch (name) {
    case "I":
      block.className = "tetromino tetromino-i";
      break;
    case "Z":
      block.className = "tetromino tetromino-z";
      break;
    case "S":
      block.className = "tetromino tetromino-s";
      break;
    case "T":
      block.className = "tetromino tetromino-t";
      break;
    case "O":
      block.className = "tetromino tetromino-o";
      break;
    case "L":
      block.className = "tetromino tetromino-l";
      break;
    case "J":
      block.className = "tetromino tetromino-j";
      break;
  }
};

export const tetrisResize = () => {
  const content = document.querySelector(".game-content");

  if (window.screen.width < 630 && window.screen.width > 500) {
    content.style.transform = "scale(1.3)";
  } else if (window.screen.width < 500 && window.screen.width > 380) {
    content.style.transform = "scale(1.5)";
  } else if (window.screen.width < 380) {
    content.style.transform = "scale(1.8)";
  } else {
    content.style.transform = "scale(1)";
  }
};
