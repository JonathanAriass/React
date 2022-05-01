// Spread take all elements and properties and distributes them in a  new array or object
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Append new element to old array (spread)
const newNumbers2 = [numbers, 4]; // List of lists

console.log(newNumbers);
console.log(newNumbers2);


const person = {
    name: 'Jony'
};

const newPerson = {
    ...person,
    age: 20
}

console.log(newPerson);


// Rest operator (which let us to pass unlimited number of args as an array)
const filter = (...args) => {
    return args.filter(el => el === 1); // === checks for type and value equality
}

console.log(filter(1, 2, 3));