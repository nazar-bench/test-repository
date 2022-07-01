

const dish = 'french fries'; // 'chiken', 'french fries', 'burger'

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

const appleRadius = 8;
// const size = appleRadius > 4 ? 'big' : 'smole';

// console.log(size);

// let size;

// if (appleRadius > 5) size = 'big';
// else size = 'smole';

// console.log(size);

// console.log(10 && 10 && !true && !NaN && 'aa');
const num1 = 5;

// const result = num1 > 4 ? 'Вірно!' : 'Не вірно!';
// console.log(result);


// Перевірка на null та undefined;
let response = 'abc';
let defaultMsg = 'Це null або undefined';

// const result = response ?? defaultMsg;
// console.log(result);

// const result = response === null || response === undefined
//     ? defaultMsg : response;
// console.log(result);


// Вивести парні числа від 2 до 10;
// 1
// for (let i = 2; i <= 10; i += 2){
//     console.log(i);
// }

// 2
// for (let i = 0; i <= 10; i += 1) {
//     if (i % 2) {
//         console.log('Не парні',i);
//         continue;
//     }
//     console.log('Парні',i);
// }

// 3
// for (let i = 0; i <= 10; i += 1) {
//     if (!(i % 2)) {
//         console.log('Парні',i);
//         continue;
//     }
//     console.log('Не парні',i);
// }


// Бесконечные циклы

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel, и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.
//                                   Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать
//                                   alert со строкой 'Общая сумма чисел равна [сумма]'.

let total = 0;
let result = 0;

// while (result !== null) {
//     result = prompt('Введіть число:');
//     let resultNum = Number(result);

//     if (!isNaN(resultNum)) {
//         total += resultNum;
//     }
// }

// alert(`Total sum ${total}`);

// парним називається таке число, яке можна поділити на 2 без остачі, тоді як непарне число ділиться на два з остачею.

// Ділене: Дільник = неповна частка;остача;
// 23 : 7 = 3(2);