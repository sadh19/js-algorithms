//With recursivity
/* function fibonacci(step) {
  //Base case with step 0
  if (step < 1) {
    return 0;
  }

  //Base case with step 1 and 2
  if (step === 1 || step === 2) {
    return 1;
  }

  //Calculate current step with two previous steps summarized
  return fibonacci(step - 2) + fibonacci(step - 1);
} */

/* console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8)); */

//With yield
function* fibonacciGenerator() {
  yield 0;
  yield 1;

  let twoPreviousSteps = 0;
  let onePreviousSteps = 1;

  while (true) {
    const value = twoPreviousSteps + onePreviousSteps;
    yield value;

    twoPreviousSteps = onePreviousSteps;
    onePreviousSteps = value;
  }
}

const generator = fibonacciGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
