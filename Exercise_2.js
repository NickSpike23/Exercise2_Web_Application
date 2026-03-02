// Angel Gabriel Barrera Rangel ST: 5043
// Exercise 2
//Loop and control and conditions, practice: for loops, conditional logic, loop control. Use the array created in exercise 1.
const numbersArray = []; // Create an empty array to store the numbers
let number = 1; // Initialize a variable to keep track of the current number, starting at 1
while (number <= 20) { // Continue the loop until the number exceeds 20
    numbersArray.push(number);  // Add the current number to the array
    number++;  // Increment the number by 1 for the next iteration
}
console.log(numbersArray); // Output the populated array to the console, which should contain numbers from 1 to 20

//Part 1: Print all values of the array using: A single console.log and one for loop. (Do not use multiple console.log statements outside the loop).
for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

// Part 2: Modify the loop to skip all even numbers (Hint: Use a conditional statement).
for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) { // Check if the number is even
        continue; // Skip the current iteration if the number is even
    } else {
        console.log(numbersArray[i]); // Print the current number if it's not even
    }
}
// Part 3: Modify the loop so that it stops when it reaches number 10 (Hint: Use a conditional statement).

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === 10) { // Check if the number is 10
        break; // Exit the loop when number 10 is reached
    } else {
        console.log(numbersArray[i]); // Print the current number if it's not 10
    }
}
