// 1 задание

function num(a, b) {
    if (b < a) {
        return b
    }
    else { return a }
}
let result = num(45, 12)
console.log(result);

// 2 задание 2 варианта

function khas(a, b) {
    for (let i = a; i >= b; i--) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
khas(11, 5)
//===========================
function createArr(a, b) {

    let minimum = a
    let maximum = b
    if (a > b) {
        minimum = b
        maximum = a
    }
    let newArr = []
    for (let index = maximum; index >= minimum; index--) {
        if ([index] % 2 === 0)
            newArr.push(index)
    }
    return newArr
}
let resultArray = createArr(53, 34)
console.log(resultArray);

// 3 задание
function power(a, b = 2) {
    return a ** b
}
let resultPower = power(4, b = 2)
console.log(resultPower);

// 4 задание
function numbers(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    console.log(sum)
}
let n = 5
numbers(n)

// 5 задание
function summa(n, m) {
    let sum1 = 0
    let sum2 = 0
    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sum1 = sum1 + i
        }
        else { sum2 = sum2 + i 
        }
    }
    console.log(sum1)
    console.log(sum2)
}
summa(12,21)

// 6 задание
function longestString(arr) {
    if (arr.length === 0) {
        return null;
    }
    let longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
const array = ["one", "two", "three", "forever", "five", "six", "seven"];
console.log(longestString(array));