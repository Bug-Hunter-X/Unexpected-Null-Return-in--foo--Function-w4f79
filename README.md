# Unexpected Null Return in JavaScript Function

This repository demonstrates a common, yet subtle, bug in JavaScript functions: prematurely returning null when dealing with null or undefined arguments.  The function `foo` returns `null` immediately if either input `a` or `b` is null. This could be unintended behavior, especially if `foo` could reasonably process null inputs by using default values or otherwise handling the case gracefully.

**Bug:** The current implementation lacks robust null handling.

**Solution:** A more robust version should handle null values more thoughtfully, potentially using optional parameters, default values or alternative logic to avoid returning null unconditionally.

This example highlights the importance of carefully considering all possible input values when designing functions.