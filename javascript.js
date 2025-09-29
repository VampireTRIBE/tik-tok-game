let arr = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let gameover = true;
let i = 0;

function win_p1(arr) {
  if (arr[0][0] == "X" && arr[1][0] == "X" && arr[2][0] == "X") {
    document.getElementById("status").textContent = "Player 1 win!";
    gameover = false;
  } else if (arr[0][1] == "X" && arr[1][1] == "X" && arr[2][1] == "X") {
    document.getElementById("status").textContent = "Player 1 win!";
    gameover = false;
  } else if (arr[0][2] == "X" && arr[1][2] == "X" && arr[2][2] == "X") {
    document.getElementById("status").textContent = "Player 1 win!";
    gameover = false;
  } else if (arr[0][0] == "X" && arr[0][1] == "X" && arr[0][2] == "X") {
    document.getElementById("status").textContent = "Player 1 win!";
    gameover = false;
  } else if (arr[1][0] == "X" && arr[1][1] == "X" && arr[1][2] == "X") {
    document.getElementById("status").textContent = "Player 1 win!";
    gameover = false;
  } else if (arr[2][0] == "X" && arr[2][1] == "X" && arr[2][2] == "X") {
    document.getElementById("status").textContent = "Player 1 win!";
    gameover = false;
  } else if (arr[0][0] == "X" && arr[1][1] == "X" && arr[2][2] == "X") {
    document.getElementById("status").textContent = "Player 1 win!";
    gameover = false;
  } else if (arr[0][2] == "X" && arr[1][1] == "X" && arr[2][0] == "X") {
    document.getElementById("status").textContent = "Player 1 win!";
    gameover = false;
  }
}

function win_p2(arr) {
  if (arr[0][0] == "O" && arr[1][0] == "O" && arr[2][0] == "O") {
    document.getElementById("status").textContent = "Player 2 win!";
    gameover = false;
  } else if (arr[0][1] == "O" && arr[1][1] == "O" && arr[2][1] == "O") {
    document.getElementById("status").textContent = "Player 2 win!";
    gameover = false;
  } else if (arr[0][2] == "O" && arr[1][2] == "O" && arr[2][2] == "O") {
    document.getElementById("status").textContent = "Player 2 win!";
    gameover = false;
  } else if (arr[0][0] == "O" && arr[0][1] == "O" && arr[0][2] == "O") {
    document.getElementById("status").textContent = "Player 2 win!";
    gameover = false;
  } else if (arr[1][0] == "O" && arr[1][1] == "O" && arr[1][2] == "O") {
    document.getElementById("status").textContent = "Player 2 win!";
    gameover = false;
  } else if (arr[2][0] == "O" && arr[2][1] == "O" && arr[2][2] == "O") {
    document.getElementById("status").textContent = "Player 2 win!";
    gameover = false;
  } else if (arr[0][0] == "O" && arr[1][1] == "O" && arr[2][2] == "O") {
    document.getElementById("status").textContent = "Player 2 win!";
    gameover = false;
  } else if (arr[0][2] == "O" && arr[1][1] == "O" && arr[2][0] == "O") {
    document.getElementById("status").textContent = "Player 2 win!";
    gameover = false;
  }
}

function makeMove(row, col) {
  if (arr[row][col] == null && gameover) {
    if (i % 2 == 0) {
      arr[row][col] = "X";
      renderBoard();
    } else {
      arr[row][col] = "O";
      renderBoard();
    }
    win_p1(arr);
    win_p2(arr);
    if (arr.flat().every((cell) => cell !== null)) {
      document.getElementById("status").textContent = "It's a Draw!";
      gameover = false;
    }
    i++;
  }
}

function renderBoard() {
  let table = document.getElementById("board");
  table.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("td");
      cell.textContent = arr[i][j];
      cell.onclick = function () {
        makeMove(i, j);
      };
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

renderBoard();
