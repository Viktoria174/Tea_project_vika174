// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Helper function to check if a number is odd
function isOdd(number) {
    return !isEven(number);
}

// Helper function to calculate the square of a number
function square(number) {
    return number * number;
}

// Helper function to calculate the cube of a number
function cube(number) {
    return number * number * number;
}

// Example usage of helper functions
console.log(isEven(4)); // true
console.log(isOdd(5));  // true
console.log(square(3)); // 9
console.log(cube(2));   // 8
