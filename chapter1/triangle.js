// my attempt

let origin = "*";

for (i = 0; i < 7; i++) {
  console.log(origin);
  origin = origin + "*";
}

// official solution

for (let line = "*"; line.length < 8; line += "*") console.log(line);
