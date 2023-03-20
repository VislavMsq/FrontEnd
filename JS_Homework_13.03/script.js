// 1 - Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers. 

const numbersDiv = document.querySelector(".numbers")

for (let index = 100; index >= 50; index -= 10) {
    const p = document.createElement("p")
    
    p.innerText = index // <p>{index}</p>

    numbersDiv.append(p)
}

// 2 - Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const strArray = ['Lorem', 'ipsum', 'dolor', 'sitamet', 'consectetur', 'adipisicing', 'Numquam']
const stringsDiv = document.querySelector(".strings_container")

for (let index = 0; index < strArray.length; index++) {
    const p = document.createElement("p")
    
    p.innerText = strArray[index] // <p>{strArray[index]}</p>
    // stringsDiv.innerHTML += `<p>${strArray[index]}</p>`


    stringsDiv.append(p)
}

// 3 - Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.'

const users = [
    {
        first_name: "John",
        last_name: "Dow",
        age: 15
    },{
        first_name: "Annd",
        last_name: "Smith",
        age: 20
    },{
        first_name: "Jake",
        last_name: "Dow",
        age: 18
    },{
        first_name: "Alex",
        last_name: "Dow",
        age: 40
    },{
        first_name: "Patrick",
        last_name: "Dow",
        age: 30
    }
]
// const usersDiv = document.querySelector(".users_container")
// for (let index = 0; index < users.length; index++) {
//     if (users[index].age < 18) continue

//     const {first_name, last_name, age} = users[index]
//     const div = document.createElement("div")
//     const pFirstName = document.createElement("p")
//     pFirstName.innerText = `Имя пользователя: ${first_name}`
//     const pLastName = document.createElement("p")
//     pLastName.innerText = `Фамилия пользователя: ${last_name}`
//     const pAge = document.createElement("p")
//     pAge.innerText = `Возраст пользователя: ${age}`
//     div.append(pFirstName, pLastName, pAge)
//     usersDiv.append(div)
// }


// const usersDiv = document.querySelector(".users_container")
// for (let index = 0; index < users.length; index++) {
//     if (users[index].age < 18) continue

//     const {first_name, last_name, age} = users[index]
//     const div = document.createElement("div")
//     const pFirstName = document.createElement("p")
//     pFirstName.innerText = `Имя пользователя: ${first_name}`
//     const pLastName = document.createElement("p")
//     pLastName.innerText = `Фамилия пользователя: ${last_name}`
//     const pAge = document.createElement("p")
//     pAge.innerText = `Возраст пользователя: ${age}`
//     div.append(pFirstName, pLastName, pAge)

//     div.addEventListener("click", function() {
//         div.classList.toggle("selected")
//     })

//     usersDiv.append(div)
// }

//Создать массив products из объектов с данными о продуктах (свойства id, product, price, quantity и country). Данные взять произвольные. Написать цикл, который проходится по массиву products и создает карточки только для тех продуктов, количество которых больше 10. Карточка должна содержать информацию о названии продукта, его цене, количестве и стране производства. Добавить все карточки в div с классом products_container.

const products = [
    {
        id: "1",
        product: "Product 1",
        price: 150,
        quantity: 10,
        country: "USA"
    },{
        id: "2",
        product: "Product 2",
        price: 150,
        quantity: 4,
        country: "France"
    },{
        id: "3",
        product: "Product 3",
        price: 150,
        quantity: 100,
        country: "Germany"
    },{
        id: "4",
        product: "Product 4",
        price: 150,
        quantity: 50,
        country: "Italy"
    },
]
const productsDiv = document.querySelector(".products_container")
for (let index = 0; index < products.length; index++) {
    if (products[index].quantity < 10) continue

    const {id, product, price, quantity, country} = products[index]
    const div = document.createElement("div")
    const pId = document.createElement("p")
    pId.innerText = `Номер продукта: ${id}`
    const pName = document.createElement("p")
    pName.innerText = `Продукт: ${product}`
    const pPrice = document.createElement("p")
    pPrice.innerText = `Цена продукта: ${price}`
    const pQuantity = document.createElement("p")
    pQuantity.innerText = `Количество: ${quantity}`
    const pCountry = document.createElement("p")
    pCountry.innerText = `Страна производства: ${country}`
    div.append(pId, pName, pPrice, pQuantity, pCountry)
    productsDiv.append(div)
}