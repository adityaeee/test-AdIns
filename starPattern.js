function generateStarPattern(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        let stars = "*".repeat(2 * i - 1);
        result += stars + "\n";
    }
    return result;
}

console.log(generateStarPattern(3));

console.log(generateStarPattern(4));
