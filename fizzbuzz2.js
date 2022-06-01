function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    i % 15 === 0
      ? console.log("Fizz Buzz")
      : i % 3 === 0
      ? console.log("Fizz")
      : i % 5 === 0
      ? console.log("Buzz")
      : console.log(i);
  }
}
