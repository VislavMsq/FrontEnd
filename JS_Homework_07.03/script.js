//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// function min(firstNum, secondNum) {
//     if (firstNum < secondNum) {
//         return firstNum
//     } else if (secondNum < firstNum) {
//         return secondNum
//     } else {
//         return firstNum
//     }
// }

// console.log(min(1, 2))
// console.log(min(2, 1))
// console.log(min(2, 2))
// console.log(min(2000, 568))

//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// function printEvenNumbers(firstNum, secondNum) {
//     let maxNumber = 0;
//     let minNumber = 0;
//     if (firstNum > secondNum) {
//         maxNumber = firstNum
//         minNumber = secondNum
//     } else if (firstNum < secondNum) {
//         maxNumber = secondNum
//         minNumber = firstNum
//     } else {
//         console.log("Оба числа равны")
//         return
//     }

//     for (let index = maxNumber; index >= minNumber; index--) {
//         if (index % 2 == 0) {
//             console.log(index)
//         }
//     }
// }

// printEvenNumbers(10, 20)
// printEvenNumbers(20, 10)
// printEvenNumbers(20, 20)

//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени.Значение степени должно быть указано по умолчанию 2. 
// function power(firstNum, secondNum = 2) {
//     return firstNum**secondNum
// }

// console.log(power(4))
// console.log(power(2, 3))
// console.log(power(2, 2))

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// function sum(n) {
//     let sumOfNumbers = 0;

//     for (let index = 1; index <= n; index++) {
//         // sumOfNumbers += index
//         sumOfNumbers = sumOfNumbers + index
//     }

//     return sumOfNumbers
// }
// console.log(sum(3));
// console.log(sum(150)); // 1 - 150

//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
// function sumOfOddAndEvenNums(n, m) {
//     let sumOfOdds = 0;
//     let sumOfEvens = 0;

//     for (let index = n; index <= m; index++) {
//         if(index % 2 === 0) {
//             sumOfEvens += index
//         } else {
//             sumOfOdds += index
//         }
//     }

//     console.log(sumOfEvens)
//     console.log(sumOfOdds);
// }

// sumOfOddAndEvenNums(1, 19)

//Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
// Пример: [ 'one', 'two', 'three', 'qwert' ] => 'three'

function getString(arr) {
    if(arr.length === 0) {
        return null
    }

    let maxStr = arr[0]; // "one", 'three'
    for (let index = 0; index < arr.length; index++) { // 'one', ...., 'three' 5, 'qwert'
        if (maxStr.length < arr[index].length) { // 3 < 5, 5 < 5
            maxStr = arr[index] // maxStr = 'three'
        }
    }

    console.log(maxStr)
}

getString(['one', 'two', 'three', 'qwert', 'qwerty', 'kjhgfd'])