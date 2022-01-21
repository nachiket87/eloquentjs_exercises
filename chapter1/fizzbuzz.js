// my solution

for (let i = 1; i <= 100; i++) {
  console.log(
    i % 5 === 0 ? (i % 3 === 0 ? "FizzBuzz" : "Buzz") : i % 3 === 0 ? "Fizz" : i
  );
}

// official solution

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
