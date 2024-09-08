//Ex 1
function printArrow(lines, direction) {
    let arrowBody = '-'.repeat(lines);
    if (direction) {
        console.log(arrowBody + '>');
    } else {
        console.log('<' + arrowBody);
    }
}

// printArrow(5, true);  
// printArrow(3, false); 

//Ex 2

let numbers = [];
let input;

while (true) {
    input = parseInt(prompt("Plese enter a number: "), 10);
    
    if (input === 0) {
        break;
    }
    
    numbers.push(input);
}

if (numbers.length > 0) {
    let maxNumber = Math.max(...numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let average = sum / numbers.length;
    let fourthNumber = numbers.length >= 4 ? numbers[3] : numbers[numbers.length - 1];

    console.log(maxNumber);
    console.log(numbers.length);
    console.log(sum);
    console.log(average);
    console.log(fourthNumber);
} else {
    console.log("לא הוזנו מספרים.");
}

//Ex3

