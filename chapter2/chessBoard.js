// my solution

let size = 8;

let bord = "";

for (let x = 0; x < size; x++) {
  for (let y = 0; y <= size; y++) {
    if ((x + y) % 2 == 0) {
      bord += " ";
    } else {
      bord += "#";
    }
  }
  bord += "\n";
}

console.log(bord);

// official solution

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
