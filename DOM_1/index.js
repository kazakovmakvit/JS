"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
// 5. Выведите содержимое тега title в консоль.
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// 8. Удалите тег h6 на странице.



//  _____1_____Задание
const idElement = document.getElementById('super_link');
console.log(idElement);



//  _____2_____Задание
const card_link = document.querySelectorAll('.card-link');
card_link.forEach((el) => {
    el.textContent = 'Ссылка'
    console.log(el);
});


//  _____3_____Задание
const collectionCardBody = document.querySelectorAll('.card-body .card-link');
console.log(collectionCardBody);


//  _____4_____Задание
const firstElement = document.querySelector("[data-number = '50']");
console.log(firstElement);

//  _____5_____Задание
const title = document.querySelector('title');
console.log(title.innerText);


//  _____6_____Задание
const parentEl = document.querySelector('.card-title');
console.log(parentEl.parentElement);


//  _____7_____Задание
const paragraph = document.createElement('p');
paragraph.textContent = 'Hello';
const cardEl = document.querySelector('.card');
cardEl.prepend(paragraph);

//  _____8_____Задание
const h6Element = document.querySelector('h6');
h6Element.remove();