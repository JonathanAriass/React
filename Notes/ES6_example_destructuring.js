// Destructuring allows you to easily extract array elements or object
// properties and store them in variables.
const numbers = [1, 2, 3];
[num1, ,num3] = numbers;
console.log(num1, num3);

[num2] = numbers;
console.log(num2);

[num2, num1] = numbers;
console.log(num2, num1);