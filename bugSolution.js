function foo(a = 0, b = 0) {
  // Handle null or undefined by assigning default values
  // Now, 'a' and 'b' will have default values of 0 if they are null or undefined.
  // ... rest of the function, which can now safely operate with a and b
  return a + b; // Example: perform operation with default values
}

// Example usage:
console.log(foo(null, 5)); // Output: 5
console.log(foo(2, null)); // Output: 2
console.log(foo(null, null));// Output: 0
console.log(foo(2, 3)); // Output: 5