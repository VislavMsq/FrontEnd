
//2
let num1 = prompt("Введите число:")
let num2 = prompt("Введите число:")
num1 = Number(num1)
num2 = Number(num2)

if (num1 < num2) {
  console.log("Наименьшее число: " + num1);
} else if (num2 < num1) {
  console.log("Наименьшее число: " + num2);
} 

// // //3
let number = prompt('Введите число')
    if (number < 100) {
        console.log('Число меньше 100')
    } else if (number > 100){
        console.log('Число больше 100') 
    } else if (number == 100) {
        console.log('Число равно 100')
    }

//1
let number = prompt("Введите число:")
    let div = number / 10 
        console.log('10% от вашего числа ' + div)

//4
let userAge = prompt('Введите Ваш возраст')
let userName = prompt('Введите Ваше имя')

    if (userAge >= 18){
        console.log('Hello ' + userName)
    } else if (userAge < 19){
        console.log('Hi ' + userName)
    }