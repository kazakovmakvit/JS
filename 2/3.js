"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const dayNumber = Number(prompt("Введите число в интервале [1, 32)"));
if (dayNumber > 0 && dayNumber < 32) {
    dayNumber < 21 ?
        dayNumber < 10 ?
            alert("Число: " + dayNumber + " попадает в первую декаду месяца")
            : alert("Число: " + dayNumber + " попадает во вторую декаду месяца")
        : alert("Число: " + dayNumber + " попадает в третью декаду месяца");
} else {
    alert("Невеонле значение, вы ввели: " + dayNumber);
}
