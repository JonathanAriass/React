const numbers = [1, 2, 3];

// Will apply the function to every number on array
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);