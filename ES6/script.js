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

Ex3
function printTriangle(num) {
    for (let i = 1; i <= num; i++) {
        console.log('*'.repeat(i));
    }
}
printTriangle(5);

//Ex4
function printInvertedTriangle(num) {
    for (let i = num; i > 0; i--) {
        console.log('*'.repeat(i));
    }
}

printInvertedTriangle(5);

// Ex5
function printMultiplicationTable(num) {
    for (let i = 1; i <= num; i++) {
        let row = [];
        for (let j = 1; j <= num; j++) {
            row.push(i * j);
        }
        console.log(row.join('\t'));
    }
}

printMultiplicationTable(5);



Ex6
function printNumberInReverse(num) {
    console.log(num.toString().split('').reverse().join(''));
}
printNumberInReverse(12345);

// Ex 7
function processString(str) {
    if (str === "") {
        return "";
    }
    if (str.trim() === "") {
        return " ";
    }
    return str.trim();
}





