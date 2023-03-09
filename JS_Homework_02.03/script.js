/*
    Решить следующие задачи:
    Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
    Напишите цикл for, который выводит в консоль  все числа от 55 до 20
    Дан массив numbers. Вывести в консоль все числа из массива

    const numbers = [3, 5, 11, 2, 8, 1, 6];
*/
/*
        for (let i = 0; i < 10; i+=2){
            console.log(i);
        }
        for(let i = 55; i >= 20; i--){
            console.log(i);
        }
*/
// const numbers = [3, 5, 11, 2, 8, 1, 6]
// for( let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// const numbers_squared = []   
// for( let i = 0; i < numbers.length; i++){
//     numbers_squared.push(numbers[i] * numbers[i])
// }
// console.log(numbers_squared);

// const last_elem = numbers_squared[numbers_squared.length - 1];
// console.log(last_elem);

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
  }
  
  const message = `User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old.`;
  
  console.log(message);