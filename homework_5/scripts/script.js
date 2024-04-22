let number1 = +prompt("Enter the number")
console.log(number1 *10/100)

let num1 = +prompt("first number");
let num2 = +prompt("second number");
let minNum = Math.min(num1, num2);
console.log(minNum);

let numb = +prompt("how many $ you can give me?")
if(numb < 100){
    console.log("число меньше 100")
}
else if(numb > 100){
    console.log("число больше 100")
}
else{
    console.log("число равно 100")
}

let userName = prompt("Enter your username")
let age = +prompt("Enter your age")
if(age >= 18){
console.log("Hello ",userName)
}
else if (age < 18){
    console.log("Hi ",userName)
}