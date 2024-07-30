function padNumber(input1, input2) {
    let numberString = input1.toString();
    let paddedNumber = numberString.padStart(input2, "0");
    return paddedNumber;
}

console.log(padNumber(5, 4));
console.log(padNumber(87, 7));
