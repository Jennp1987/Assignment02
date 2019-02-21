/*eslint-env browser*/
var number1 = Number(window.prompt("Enter number here!"));
var number2 = Number(window.prompt("Enter a number here!"));
if (number1 > number2 || number1 === number2) {
    window.document.write(number1);
} else if (number2 > number1 || number2 === number1) {
    window.document.write(number2);
}
