const arrays = [
    42,
    true,
    "Hello, World!",
    {
        name: "John",
        age: 25,
        isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
];

// 1. Convert all elements to their string representation using the map method.
const stringRepresentations = arrays.map(element => String(element));
console.log("String Representations:", stringRepresentations);

// 2. Filter only number elements using the filter method.
const numberElements = arrays.filter(element => typeof element === 'number');
console.log("Number Elements:", numberElements);

// 3. Log each element's type to the console using the forEach method.
arrays.forEach(element => {
    console.log(`Type of ${element}:`, typeof element);
});

// 4. Sum up only the numbers in the array using the reduce method.
const sumOfNumbers = numberElements.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers:", sumOfNumbers);

// 5. Find the first boolean value in the array using the find method.
const firstBoolean = arrays.find(element => typeof element === 'boolean');
console.log("First Boolean Value:", firstBoolean);

// 6. Find the index of the first object in the array using the findIndex method.
const firstObjectIndex = arrays.findIndex(element => typeof element === 'object' && element !== null);
console.log("Index of First Object:", firstObjectIndex);

// 7. Check if the array contains any numbers using the some method.
const containsNumbers = arrays.some(element => typeof element === 'number');
console.log("Contains Numbers:", containsNumbers);

// 8. Check if all elements are of type 'string' using the every method.
const allStrings = arrays.every(element => typeof element === 'string');
console.log("All Elements are Strings:", allStrings);