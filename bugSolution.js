function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3

try {
  console.log(foo(null, 2)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed.
}

try {
  console.log(foo(1, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed.
}

try {
  console.log(foo(null, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed.
}