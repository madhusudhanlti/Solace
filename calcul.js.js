const async = require("async");

function add(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

function subtract(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a - b);
    }, 1000);
  });
}

function multiply(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a * b);
    }, 1000);
  });
}

function divide(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (b !== 0) {
        resolve(a / b);
      } else {
        resolve("Cannot divide by zero");
      }
    }, 1000);
  });
}

function calculatePercentage(value, percent) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve((percent / 100) * value);
    }, 1000);
  });
}

async function performCalculations(a, b) {
  const sum = await add(a, b);
  const difference = await subtract(a, b);
  const product = await multiply(a, b);
  const quotient = await divide(a, b);
  const percentage = await calculatePercentage(a, b);

  console.log("Sum:", sum);
  console.log("Difference:", difference);
  console.log("Product:", product);
  console.log("Quotient:", quotient);
  console.log("Percentage:", percentage);
}

performCalculations(20, 5);
