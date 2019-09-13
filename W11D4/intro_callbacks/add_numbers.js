const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

    if (numsLeft > 0){ 

        reader.question("Dame un numero, eh???", function (number){
            let integer = parseInt(number);
            sum += integer; 
            console.log(`parcial result: ${sum}`);
            numsLeft -= 1;
            addNumbers(sum, numsLeft, completionCallback);
        });          
    } else {
        reader.close();
    }

    completionCallback(sum);
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// function addTwoNumbers(callback) {
// // Notice how nowhere do I return anything here! You never return in
// // async code. Since the caller will not wait for the result, you
// // can't return anything to them.

// reader.question("Enter #1: ", function (numString1) {
//     reader.question("Enter #2: ", function (numString2) {
//     const num1 = parseInt(numString1);
//     const num2 = parseInt(numString2);

//     callback(num1 + num2);
//     });
// });
// }
  
// addTwoNumbers(function (papa) {
//     console.log(`The papa is: ${papa}`);
//     reader.close();
