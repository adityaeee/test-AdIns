function generateFibonacci(n) {
    let fib = [1, 1];
    for (let i = 2; ; i++) {
        let next = fib[i - 1] + fib[i - 2];
        if (next > n) break;
        fib.push(next);
    }
    return fib.join(" ");
}

console.log(generateFibonacci(3));
console.log(generateFibonacci(5));
console.log(generateFibonacci(12));
console.log(generateFibonacci(25));
