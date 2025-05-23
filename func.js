function greetings(suna) {
    console.log("Hello, World!, welcome", suna);
}
greetings("Ibrahim");
greetings("Naim");

function add(num1, num2) {
    return "The final answer is", num1 + num2;
}
let result = add(10, 20);
console.log(result);

function multiply(num1, num2) {
    return " Multiplication table for 3 is ", num1 * num2;
    let num1 = 3;
    let num2 = 1;
    for (let i = 1; i * num1 <= 30; i++) {
        console.log(num1, "*", i, "=", i * num1);
        if (i == 5) {
            break;
        }
    }

}
