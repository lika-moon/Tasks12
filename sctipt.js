// 1.	Преобразование массива объектов: Дан массив объектов пользователей с полями name и age.
//  Используйте map, чтобы создать массив строк в формате "Имя: Возраст".
const users = [
    { name: "Иван", age: 25 },
    { name: "Светлана", age: 34 },
    { name: "Петр", age: 45 },
    { name: "Ирина", age: 19 },
];

function massObj(users) {
    return users.map(user => `${user.name}: ${user.age}`)
}
massObj(users);
console.log(massObj(users));

// 2.	Фильтрация массива чисел: Дан массив чисел. Используйте filter, чтобы получить массив,
//  содержащий только четные числа.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNumb = (numbers) => {
    return numbers
        .filter(number => number % 2 === 0)
}
filterNumb(numbers);
console.log(filterNumb(numbers));

// 3.	Поиск объекта по значению: Дан массив объектов с товарами (имя и цена).
//  Используйте find, чтобы найти первый товар, цена которого превышает 1000.

const products = [
    { name: "Ноутбук", price: 50000 },
    { name: "Клавиатура", price: 1000 },
    { name: "Мышь", price: 500 },
    { name: "Монитор", price: 12000 },
];

const findObj = (products, price) => {
    return products
        .find(product => product.price > price)
}
findObj(products, 1000);
console.log(findObj(products, 1000));

// 4.	Нахождение индекса объекта по атрибуту: Дан массив пользователей с уникальными ID. 
// Используйте findIndex, чтобы определить индекс пользователя с конкретным ID.
const user = [
    { id: 1, name: "Иван" },
    { id: 2, name: "Светлана" },
    { id: 3, name: "Петр" },
    { id: 4, name: "Ирина" },
];
const userIdToFind = 3;
const findInd = (user, userIdToFind) => {
    return user
        .findIndex(index => index.id === userIdToFind)
}
findInd(user, userIdToFind)
console.log(findInd(user, userIdToFind))

// 5.	Перебор массива и вывод: Дан массив строк. Используйте forEach,
//  чтобы вывести каждый элемент в консоль.

const strings = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
strings.forEach(function (value) {
    return console.log(value)
});

// 6.	Проверка всех элементов массива: Дан массив чисел. Используйте every, чтобы проверить,
//  все ли числа положительные.

const numb = [1, 23, 45, 68, 90, 12, 4];

let check = numb.every(function (number) {
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
});
console.log(check)

// 7.	Создание нового массива на основе условий: Используйте map и filter вместе, чтобы 
// преобразовать массив чисел, умножив каждое число на 2, а затем отфильтровать числа, которые
//  меньше 10.
const mass = [1, 4, 6, 8, 10];
const processedNumbers = mass.map(num => num * 2).filter(number => number < 10)
console.log(processedNumbers)

// 8.	Сортировка объектов по критерию: Используйте filter или find, чтобы отфильтровать 
// массив объектов по определенному критерию, например, всех пользователей старше 30 лет.

const human = [
    { name: "Иван", age: 25 },
    { name: "Светлана", age: 34 },
    { name: "Петр", age: 45 },
    { name: "Ирина", age: 19 },
];

function sorting(human, age) {
    return human.filter(hum => hum.age > age)
}
sorting(human, 30)

console.log(sorting(human, 30))

// 9.	Агрегация данных: Дан массив объектов с информацией о продажах (продукт, количество). 
// Используйте forEach, чтобы подсчитать общее количество проданных товаров.
const sales = [
    { product: "Ноутбук", quantity: 4 },
    { product: "Мышь", quantity: 10 },
    { product: "Клавиатура", quantity: 5 },
    { product: "Монитор", quantity: 3 }
];

let count = 0;
sales.forEach(function (sale) {
    count += sale.quantity;
    return count
});
console.log(count)
// }
// pio(sales)
// 10.	Удаление дубликатов из массива: Используйте filter и findIndex, чтобы удалить дубликаты
//  из массива строк.
const string = ["JavaScript", "Python", "JavaScript", "Java", "Python", "Java", "C++"];

let newString = string.filter((element, index) =>
    index === string.findIndex((elem) => elem === element)
);
console.log(newString)

// 11.	Проверка наличия элементов по условию: Используйте some и every, чтобы проверить, содержит
//  ли массив чисел хотя бы одно отрицательное значение и все ли значения четные. (Почитайте про 
// метод some)
const numberses = [2, 4, -1, 6, 8];
const hasNegative = numberses.some(number => number < 0);
const allEven = numberses.every(number => number % 2 === 0);
console.log(`Есть ли отрицательные числа: ${hasNegative}`);
console.log(`Все числа четные: ${allEven}`);

// 12.	Создание массива уникальных значений: Используйте map и filter, чтобы создать 
// массив уникальных значений из массива с дубликатами.
const arr = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 5];
let newArr = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
console.log(newArr)

// 13.	Фильтрация массива по длине строк: Дан массив строк. Используйте filter, чтобы получить
//  только те строки, длина которых больше 5 символов.
const str = ["Hello", "World", "JavaScript", "CSS", "HTML"];

let newStr = str.filter(filterStr => filterStr.length > 5)

console.log(newStr)

// 14.	Объединение методов для сложных задач: Используйте комбинацию map, filter, find, every,
//  чтобы решить сложную задачу, например, найти и вывести информацию о пользователях,
//  удовлетворяющих  нескольким условиям.
// Предположим, у нас есть массив пользователей, и мы хотим найти пользователей старше 25 лет,
//  затем преобразовать их имена в верхний регистр и проверить, все ли они имеют имя длиннее 4
//  символов.

const piople = [
    { name: "Иван", age: 24 },
    { name: "Светлана", age: 32 },
    { name: "Петр", age: 29 },
    { name: "Ольга", age: 22 },
];
const selectedUsers = piople
    .filter(user => user.age > 25)
    .map(user => user.name.toUpperCase())
    .every(user => user.length > 4);

console.log(`Все выбранные пользователи имеют имена длиннее 4 символов: ${selectedUsers}`);
