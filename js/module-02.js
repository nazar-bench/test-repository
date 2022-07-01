// 1. Порахувати загальну суму елементів масиву;
// const array = [25, 45, 3, 21, 11, 9, 56, 5];
// console.log(array);
// let total = 0;


// for (let i = 0; i < array.length; i += 1){
//     // console.log(i);
//     total += array[i];
// };

// console.log('Загальна сума:', total);

// for (const number of array) {
//     total += number;
// }

// console.log('Загальна сума:', total);


// 2. Напиши скрипт який підрахує суму всіх парних чисел в масиві;
// const array = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of array) {
//     if (number % 2 === 0) {
//         total += number;
//         console.log(`Парні числа ${number}`);
//     }
// }

// console.log(total);


// 3. Напиши скрипт пошуку логіна;
// Якщо логіна не має, вивести повідомлення 'Користувач [логін] не знайдено';
// Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено';
// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// Вирішення 1;

// for (let i = 0; i < logins.length; i += 1) {
//     if (logins[i] === loginToFind) {
//         message = `Користувача: ${loginToFind} знайдено;`;
//         break;
//     }
//     message = `Користувача: ${loginToFind} не знайдено;`;
// }

// console.log(message);


// Вирішення 2;
// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Користувача: ${loginToFind} не знайдено;`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     // console.log(login);

//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайдений;`
//         break;
//     }
    
// }

// console.log(message);


// Вирішення 3;
// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Користувача: ${loginToFind} не знайдено;`;

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайдений;`
//         break;
//     }
// }

// console.log(message);


// Вирішення 4;
// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// // let message = `Користувача: ${loginToFind} не знайдено;`;

// const result = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайдений;` : `Користувача: ${loginToFind} не знайдено;`;
// console.log(result);

// const str = 'Hello world';
// const array = [1, 2, 3];

// console.log(str.includes('H'));
// console.log(array.indexOf(3));


// 4. Напиши скрипт пошуку найменшого числа в масиві;
// При умові, що числа унікальні(не повторюються);

// const numbers = [51, 18, 13, 24, 7, 85, 100];
// let smoleNumber = numbers[0];
// console.log(smoleNumber);

// for (const number of numbers) {
//     if (number < smoleNumber) {
//         smoleNumber = number;
//     }
// };

// console.log(smoleNumber);


// 5. Напиши скрипт, який об'єднає всі елементи масиву
// в один рядок, розділені комою.
// Спочатку через for of, потім через join();

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// Через for;
// for (const friend of friends) {
//     // console.log(friend);
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1)
// console.log(string);


// Через join();
// let string = friends.join(', ');
// console.log(string);


// 6. Напиши скрипт який заміняє регістр кожного символа
// в рядку на протилежний;
// Наприклад, якщо рядок 'JavaScript',
// то на виході має бути рядок 'jAVAsCRIPT';

// const string = 'JavaScript';
// const letters = string.split('');
// // console.log(letters);

// let newString = '';

// for (const letter of letters) {
    // console.log(letter);

    // if (letter === letter.toLowerCase()) {
    //     newString += letter.toUpperCase();
    // } else {
    //     newString += letter.toLowerCase();
    // }

    // newString += letter === letter.toLowerCase()
    //     ? letter.toUpperCase()
    //     : letter.toLowerCase();
// }

// console.log(newString);


// 7.Робимо slug в URL із навзи статті;
// Наприклад : https://dev.to/santosh3700/vs-code-cheat-sheet-2022-2akd
// Заголовок статті складається тільки з букв і пробілів;

// Нормалізуємо рядок;
// Розбиваємо по словах;
// Зшиваємо в рядок з роздільником;
// Має вийти: top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';
// console.log(title);

// const array = title.toLowerCase().split(' ').join('-');
// const stringNormalize = array.join('-');
// console.log(array);
// console.log(array);


// 8. Напиши скрипт який рахує суму елементів двох масивів;

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const newArray = array1.concat(array2);
// console.log(newArray);

// for (const array of newArray) {
//     total += array;
// }

// console.log('Загальна сума:', total);


// 9. Працюємо з колекцією карточок в trello;
// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ];

// console.log('Оригінальний масив', cards);
// console.table(cards);

// Видалення по індексу, метод indexOf();
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);

// console.log(index);
// console.log('Видалення Карточки-3', cards);
// console.table(cards);


// Добавляємо по індексу;
// const cardToInsert = 'Карточка-6';
// const indexAdd = 3;
// cards.splice(indexAdd, 0, cardToInsert);

// console.log('Додавання Карточки-6, на 3-й індекс', cards);
// console.table(cards);


// Оновлення по індексу;
// const cardIndex = 'Карточка-4';
// const indexUpdate = cards.indexOf(cardIndex);
// cards.splice(indexUpdate, 1, 'Оновлена карточка');

// console.log(cards);
// console.table(cards);


// 10. Table;
// const medals = [
//     ['Country', 'Hokey', 'Football', 'Volleyball'],
//     ['Ukraine', 1, 5, 3],
//     ['Canada', 10, 2, 4],
//     ['USA', 6, 1, 2]
// ];

// // console.log(medals);

// for (const medal of medals) {
//     let stringTable = '';
//     // console.log(medal);

//     for (const med of medal) {
//         stringTable += ' ' + String(med).padStart(10, ' ');
//     }

//     console.log(stringTable);
// }


// 11.
//   Array basic functions
//   1. Add 'Rock' to the end
//   2. Replace middle value to 'Classic'. It have to work with any length
//   3. Remove first element and type in console
//   4. Add 'Rap' and 'Raggy' to the start

// const styles = ['Jazz', 'Blues'];
// console.log(styles);

// Add 'Rock' to the end
// styles.push('Rock');
// console.log(styles);

// Replace middle value to 'Classic'. It have to work with any length
// styles[1] = 'Classic';
// styles[Math.floor(styles.length / 2)] = 'Classic';
// styles[parseInt(styles.length / 2)] = 'Classic';
// styles.splice(styles.length / 2, 1, 'Classic');
// console.log(styles);

// Remove first element and type in console
// styles.shift();
// console.log(styles);

// Add 'Rap' and 'Raggy' to the start
// styles.unshift('Rap', 'Raggy');
// console.log(styles);


// 12. Create function that returns smallest value;
// const min = function (a, b) {
//     if (a > b) {
//         return b;
//     }
//     return a;
// }

// console.log(min(10, 100));
// console.log(min(5, - 6));
// console.log(min(9, 1));


// 13.
// Array brute force
// Log in console array in format <item number> - <item value>
// Number starts from 1
// Example "1 - Jazz"

// const array = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1}: ${array[i]};`);
// }


// 14. Find smallest number in array;

// const array1 = [2, 17, 94, 1, 23, 37];
// const array2 = [49, 4, 83, 7, 12];

// const minInArray = function (array) {
//     let a = array[0];

//     for (let i = 0; i < array.length; i += 1) {
//         if (a > array[i]) {
//             a = array[i];
//         }
//     }
//     return a;
// };

// console.log(minInArray(array1));
// console.log(minInArray(array2));



// 15. Array-like object arguments;

/**
 * Array-like object arguments
 */

// const argFunc = function () {
  // for (const item of arguments) console.log(item);
  // for (let i = 0; i < arguments.length; i++) console.log(arguments[i]);

//   const array = Array.from(arguments);
//   arguments[arguments.length] = 'new';

//   console.log(arguments);
//   console.log(array);
// };

// argFunc(1, 3, 2, 0);
// console.log([1, 3, 2, 0]);


// 16.

// const array = ['start', '', 'end'];
// console.log(array);

// // console.log(array[array.length - 1]);
// // console.log(array[array.length / 2]);
// // console.log(array.at(-1));
// // array.push('');
// // console.log(array);

// array[Math.floor(array.length / 2)] = '&&';
// array.splice(array.length, 1, 2);
// console.log(array);




