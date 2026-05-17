
// Version 1: Classic FizzBuzz
console.log("=== CLASSIC FIZZBUZZ ===");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " = FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " = Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " = Buzz");
    }
    else {
        console.log(i);
    }
}
// Version 2: Custom FizzBuzz
function customFizzBuzz(n, rules) {
    console.log("\n=== CUSTOM FIZZBUZZ ===");
    for (let i = 1; i <= n; i++) {
        let result = "";
        // Duyệt từng rule
        for (let j = 0; j < rules.length; j++) {

            if (i % rules[j].divisor === 0) {
                result += rules[j].word;
            }
        }
        // Nếu không có từ nào
        if (result === "") {
            console.log(i);
        } else {
            console.log(i + " = " + result);
        }
    }
}
// TEST
customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);