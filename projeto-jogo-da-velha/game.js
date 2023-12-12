//O quadro com os nove quadrados, cada quadradado é representado por uma string vazia porque nenhum quadrado esta preenchido com algo
let board = ["", "", "", "", "", "", "", "", ""];
//controlando a vez do jogador
//vez do jogador começa sempre com 0
let playertime = 0;
//simbolos que representa bola ou xis
let symbol = ["o", "x"];
let gameOver = false;
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//essa função ela verifica se a posicao do quadro está vazia, se estiver coloca o simbolo da vez do jogador da rodada
//o playertime fica alternando entre 0 e 1
function handleMove(position) {
  if (gameOver) {
    return;
  }
  if (board[position] == "") {
    board[position] = symbol[playertime];

    gameOver = isWin();
    if (gameOver === false) {
      playertime = (playertime == 0 ) ? 1 : 0
    }
  }

  return gameOver;
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      board[pos1] === board[pos2] &&
      board[pos1] === board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
}
