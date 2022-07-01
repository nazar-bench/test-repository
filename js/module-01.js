// 1. Пріоритет операторів; Оператори і їх скорочення;

// const val = (0 && 1) || 3;
// console.log(val);


// 2. Оператори і їх скорочення;

// i++;
// i += 1;
// i = i + 1;

// let a = 5;
// console.log(a);

// a = a + 1;
// console.log(a);

// a++;
// console.log(a);

// a += 1;
// console.log(a);



// 3. Об'єкт Math;

// Знайти площу кола через радіус, R = 5см;

// const radius1 = 5;
// const area1 = Math.PI * Math.pow(radius1, 2);
// const result1 = Number(area1.toFixed(1));

// console.log(`Площа окружності кола через радіус: ${result1} см;`);


// 4. Знайти площу кола через діаметр, знаючи радіус; R = 5;

// const radius = 5;
// const diameter = radius * 2;

// const area = Math.pow(diameter, 2) / 4 * Math.PI;
// const result = area.toFixed(1);
// console.log(`Площа окружності кола через діаметр: ${result} см;`);

// Максимальне безпечне число в js;
// console.log(Number.MAX_VALUE);


// 5. Оператори порівняння і приведення типів;

// console.log('5 > 4');
// console.log(5 > 4);

// console.log('10 >= "7"');
// console.log(10 >= '7');

// console.log('"2" > "12"');
// console.log('2' > '12');

// console.log('"2" < "12"');
// console.log('2' < '12');

// console.log("'4' == 4");
// console.log('4' == 4);

// console.log("'6' === 6");
// console.log('6' === 6);

// console.log("'false' === false");
// console.log('false' === false);

// console.log('1 == true');
// console.log(1 == true);

// console.log('1 === true');
// console.log(1 === true);

// console.log("'0' == false");
// console.log('0' == false);

// console.log("'0' === false");
// console.log('0' === false);

// console.log("'Ананас' < 'їжак'");
// console.log('Ананас' < 'їжак');

// console.log("'Ананас' === 'їжак'");
// console.log('Ананас' === 'їжак');

// console.log('undefined == null');
// console.log(undefined == null);

// console.log('undefined === null');
// console.log(undefined === null);

// console.log('"200" < "120"');
// console.log('200' < '120');


// 6. Оператор %;
// Знайти кількість годин / хвилин в певному числі;

// const total = 430;
// const hours = Math.floor(total / 60);
// const minutes = total % 60;

// const digitHoursTotal = `${hours}`.padStart(2, 0);
// const digitMinutesTotal = `${minutes}`.padStart(2, 0);

// console.log(`${digitHoursTotal}:${digitMinutesTotal}`);

// const totalMinutes = 450;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hoursResult);
// console.log(minutesResult);
// const hoursNormalize = String(hours).padStart(2, 0);
// const minutesNormalize = String(hours).padStart(2, 0);

// console.log(`${hoursNormalize}:${minutesNormalize}`);



// 7. Коли switch, коли if()elseif(){};

// const dish = 'french fries'; // 'chiken', 'french fries', 'burger'

// switch (dish) {
//   case 'chicken':
//     console.log("it's a chicken!");
//     break;
//   case 'french fries':
//     console.log("it's a french fries!");
//     break;
//   case 'donat':
//     console.log("it's a donat!");
//     break;
//   case 'burger':
//     console.log("it's a burger!");
//     break;
//   default:
//     console.log("I don't know");
// }

// Один типу умови;
// if (dish === 'chicken') {
//   console.log("it's a chicken!");
// } else if (dish === 'french fries') {
//   console.log("it's a french fries!");
// } else if (dish === 'donat') {
//   console.log("it's a donat!");
// } else if (dish === 'burger') {
//   console.log("it's a burger!");
// } else {
//   console.log("I don't know");
// }


// 8. Тернарний оператор;

// const appleRadius = 5;
// const size = appleRadius > 4 ? 'big' : 'small';

// Скорочена версія if()else{};
// let size;
// if (appleRadius > 4) size = 'big';
// else size = 'small';

// console.log(size);


// 9. Цикл for; Вивести числа від min до max, і навпаки;

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i++) {
//   console.log(i);
// }

// for (let i = max; i >= min; i--) {
//   console.log(i);
// }


// 10. За допомогою циклу for, вивести парні числа від 2 до 10;

// O(n/2)
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

//// O(n)
// for (let i = 2; i <= 10; i += 1) {
//   if (!(i % 2)) {
//     console.log(i, 'Парні');
//     continue;
//   }
//   console.log(i, 'Не парні');
// }


// 11. Цикл while або do while;
// Запитувати число поки не буде більше 100;

// let result = 0;

// do {
//   result = prompt('Enter number under 100');
// } while (result < 100);

// while (result < 100) {
//   result = prompt('Enter number under 100');
// }

// console.log(result);


 // 12. Бесконечные циклы;

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel, и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.
//                                   Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать
//                                   alert со строкой 'Общая сумма чисел равна [сумма]'.

// let total = 0;
// let result = 0;

// while (result != null) {
//   result = prompt('Enter a number');
//   let resultNum = Number(result);
//   if (!isNaN(resultNum)) {
//     total += resultNum;
//   }
// }

// alert(`Total sum ${total}`);


// 13. Перевірка на null and undefined;

// let serverResponse = null;
// let defaultValue = 'server unavaliable';

//const response = serverResponse ?? defaultValue;

// Аналогічний запис через тернарний оператор;
// const response =
//   serverResponse === null || serverResponse === undefined
//     ? defaultValue
//     : serverResponse;

// console.log(response);



// 14. var ;
// 'use strict';

// Перевизначення ключовиї слів;
// var undefined = 555;
// console.log(undefined);


// 15. Перетворення значення у число;
// +Перед змінною;
// А ще Number(); parseFloat(); parseInt(); Повертають числа;
// toFixed; працює з числами але повертає рядок;

// const number = '5';
// console.log(+number);


// 16. Метод Number.isNaN();

// const str = '555qwed';
// const strNormalize = Number(str);
// console.log(strNormalize);

// const newStr = Number.isNaN(strNormalize);
// console.log(newStr);


// 17. Конкатенація рядків;

// const a = 5;
// const b = '5';
// const c = 5;

// console.log(a + b + c);

// Лише додавання зшиває, решта приводить до цисла,
// і виконує нормальні математичні операції;

// console.log(5 + '5');
// console.log(5 * '5');
// console.log(5 / '5');
// console.log('5' * 2);

// Якщо спочатку є операнди, не рядки, то відбувається обчислення,
// а вже потім конкатенація;
// console.log(5 + 1 + '10');

// Якщо 'рядок' стоїть перший і після цього операнди,
// тоді відбувається лише конкатенація без математичних операцій;
// console.log('5' + 1 + 10);


// 18. Остача від ділення;

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


// 19.

// Буде NaN;
// console.log(10 % 0);

// Буде Infinity;
// console.log(10 / 0);

// number;
// console.log(typeof Infinity);


// 20. Індекс маси тіла необхідно округлити,
//  до однієї цифри після коми;

// let weight = '80,5';
// let height = '1.85';

// const weightNorm = Number(weight.replace(',' , '.'));
// const heightNorm = Number(height.replace(',', '.'));

// console.log(weightNorm);
// console.log(heightNorm);

// const bmIndex = Number((weightNorm / heightNorm ** 2).toFixed(1));
// console.log('Body mass index:', bmIndex);


// 21. Логічні оператори;

// console.log('ASD' || 'asd');
// console.log('ASD' && 'asd');

// Задача: всередині відрізка;
// 0-----10-----20;

// const num = 20;
// console.log(num >= 10 && num <= 20);

// const num1 = 50;
// console.log(num1 <= 10 || num1 > 20);


// console.log(true || false || 7);

// console.log(true && 0 && 'hello');

// console.log(null || 2 || undefined);

// console.log(true && 4 && 'hello');

// console.log(!null || !(2 && undefined));

// console.log((1 && null && 2) >= 0);

// console.log(null || (2 && 3) || 4);

// console.log(0 || '' || '0');

// console.log(0 || null || '0');

// console.log(0 || undefined || null);

// console.log(4 + 5 === 8 || 5 * 4 === 20 || 'q' + 'w' >= 'qw');

// console.log(false || true && true);

// console.log(0 || '' || 0);

// console.log(0 || 'undefined' || null);

// console.log(NaN || null || 5);

// console.log(28 || null || '');

// console.log(Infinity || 55 || NaN);

// console.log(undefined || 'true' || NaN);

// console.log('a' && 1 && 0);

// console.log('a' && 1 && 2);

// console.log('a' && 0 && 2);

// console.log('0' && NaN && 2);

// console.log('' && NaN && 2);

// console.log(' ' && NaN && 2);

// console.log([] && 'null' && 2);

// console.log([] && null && 2);

// console.log([] && undefined && 2);

// console.log([] && 8 && -Infinity);

// console.log(false && 'false' && -Infinity);

// console.log('true' && -0 && null);



// true;
// console.log(Boolean(' '));

// true;
// console.log(Boolean(Infinity));
// console.log(Boolean(-Infinity));

// false;
// console.log(Boolean(''));

// false;
// console.log(Boolean(-0));


// 22. Оператор нульового злиття ??;
// const incomingValue = 0;
// const defaultValue = 'Значення по замовчюванню';

// const result = incomingValue || defaultValue;
// console.log(result);

// const result1 = incomingValue ?? defaultValue;
// console.log(result1);

// Через тернарний оператор;
// const result3 = incomingValue === null || incomingValue === undefined ? defaultValue : incomingValue;
// console.log(result3);


// 23. Напиши скрипт для відображення годин та хвилин у консолі браузера,
//  у вигляді рядка формату '14 годин. 26 хвилин'.
//  Якщо значення змінної minutes дорівнює 0, то виводь рядок '14 годин', без хвилин.

// const hours = 15;
// const minutes = 0;
// let timestring;

// if (minutes === 0) {
//     timestring = `${hours} год.`;
// } else {
//     timestring = `${hours} год. ${minutes}хв.`;
// }

// Апґрейд;
// const hours = 15;
// const minutes = 10;
// let timestring = `${hours} годин`;

// if (minutes > 0) {
//     timestring += ` ${minutes} хвилин`;
// }
// console.log(timestring);


// 24. Напиши скрипт, який виводить у консоль рядок 'Це позитивне число',
// якщо в prompt() користувач ввів число більше за нуль.
// Якщо введено нуль, виводь у консоль рядок 'Це нуль'.
// Якщо передали від'ємне число, у консолі має бути рядок 'Це від'ємне число';

// const userInput = Number(prompt('Введіть число:'));

// if (userInput === 0) {
//     // alert();
//     console.log('Це нуль');
// } else if (userInput > 0) {
//     // alert('Це позитивне число.');
//     console.log('Це позитивне число.');
// } else {
//     // alert('Це від"ємне число');
//     console.log('Це відємне число.');
// }


// 25. Напиши скрипт, який порівнює числа змінних a i b.
// Якщо обидва значення більше 100, виведи в консоль максимальне з них.
// Інакше у консолі має бути сума значення b та числа 512;

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// } else {
//     console.log(b + 512);
// }

// Інший розвязок;
// if (a > 100 && b > 100) {
//     console.log(Math.max(a, b));
// } else {
//     console.log(b + 512);
// }


// 26. Напиши скрипт який перевіряє чи закінчується
// значення змінної link символом /.
// Якщо ні, додай до кінця значення link цей символ.
// Використовуй інструкцію if else.

// let link = 'https://my-site.com/about';
// console.log(link);

// if (!link.endsWith('/')) {
//     link += '/';
// }

// console.log(link);

// Додаток до завдання;
// Напиши скрипт який перевіряє чи закінчується
// значення змінної link символом /.
// Якщо ні, додай у кінець значення link цей символ,
// але тільки в тому випадку, якщо в link є підрядок 'my-site'.
// Використовуй конструкцію if else;

// let link = 'https://somesite.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//     link += '/';
// }

// console.log(link);


// 27. Напиши скрипт який виводитиме в консоль браузера
// рядок залежно від значення змінної hours.

// Якщо значення змінної hours:
// менше 17, виводь рядок 'Pending',
// - більше або дорівнює 17 і менше або дорівнює 24,
// - виводь рядок 'Expires'.
// - більше 24, виводь рядок 'Overdue'.

// const hours = 10;
// let message;

// if (hours < 17) {
//     message = 'Pending';
// } else if (hours >= 17 && hours <= 24) {
//     message = 'Expires';
// } else {
//     message = 'Overdue';
// }

// console.log(message);


// 28. Тернарний оператор;
// const cash = 190;
// const taxiPrice = 100;

// const result = cash >= taxiPrice ? 'Lets go!' : 'Not enough';
// console.log(result);

// 29. Вкладений тернарний оператор;

// let a = 40;
// let b = 40;
// let result = '';

// if (a > b) {
//     result = '"B" wins';
// } else if (a < b) {
//     result = '"B" wins';
// } else {
//     result = 'Draw!';
// }

// Ніколи не робити тернарний оператор;
// result = a > b ? '"B" wins' : a < b ? '"B" wins' : 'Draw!';
// console.log(result);


// 30. Область видимості;
// let a = 5;

// if (true) {
//     let a = 55;
//     console.log('Локальна область видимості:', a);
// }

// console.log('Глобальна область видимості:', a);


// 31. Hoisting - Вспливання;

// undefined;
// console.log(x);
// var x = 10;

// Uncaught ReferenceError:
// Cannot access 'y' before initialization;
// console.log(y);
// let y = 5;


// 32. Напиши цикл for який виводить у консоль браузера,
// числа за зростанням від min до max,
// але тільки якщо число кратне 5.
// Кратність чисел;

// Якщо одне натуральне число ділиться націло на інше натуральне число,
// тоді перше число називають кратним другого числа,
// а друге число — дільником першого числа.

// const min = 20;
// const max = 50;

// console.log('Start');
// for (let i = min; i <= max; i += 1){
//     // console.log(i);
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
// console.log('End');

// console.log('Start');
// for (let i = min; i <= max; i += 1){
//     // console.log(i);
//     if (i % 5 !== 0) {
//         continue;
//     }
//     console.log(i);
// }
// console.log('End');

// break;
// const min = 5;
// const max = 15;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     if (i === 10) {
//         console.log(i);
//         break;
//     }
// }


// 33. Цикл while;
/*
 * Приклад 3 - Запитати у користувача число 3 рази (`Enter a number #${currentCount} of ${totalCount}`)
 * Порахувати суму цих чисел і вивести на екран (`Total sum is ${sum}`)
 * Якщо користувач натиснув Cancel, необхідно зупинити цикл і вивести на екран повідомлення ('You finished the game').
 * Якщо ввів не число, то вивести на екран повідомлення (`${userAnswer} is not a number! Try again`) і перервати цю ітерацію
 */

// 1) лічильник, кількість ітерацій, сума
// 2) умова виконання циклу
// 3) тіло циклу зі зверненням до користувача
// 4) перевірка на Cancel
// 5) перевірка на не число
// 6) лічильник та сума повинні змінюватися

// const totalCount = 3;
// let currentCount = 1;
// let sum = 0;

// while (currentCount <= totalCount) {
//     const userInput = Number(prompt(`Введіть число ${currentCount} з ${totalCount}`));

//     if (userInput === 0) {
//         alert(`Гра закінчена.`);
//         break;
//     }

//     // const userNumber = Number(userInput);

//     if (Number.isNaN(userInput)) {
//         alert(`Це не число! Спробуйте ще раз.`);
//         continue;
//     }

//     sum += userInput;
//     currentCount += 1;
// }

// // alert('Гра завершена!');
// alert(`Загальна сума: ${sum}`);


// const array = ['js', 'html', 'css', 'react'];
// const lastIndex = array.length;
// // console.log(lastIndex);

// for (let i = 0; i < lastIndex; i += 1) {
//     console.log(i, array[i]);
//     // console.log();
// }