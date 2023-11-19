//Створити масив, довжину та елементи якого задає користувач.
let array = [];
let length;
do {
  length = +prompt('Enter array length');
  // console.log(isNaN(length));
} while (isNaN(length));

for (let i = 0; i < length; i++) {
  let index = prompt(`Enter array element for index ${i}`);

  if (isNaN(index) == false) {
    index = Number(index);
  }

  array[i] = index;
}

document.write(`Your array: ${array} <br>`);

//Відсортувати масив за зростанням.

let isArrayIncludeString = array.find((el) => typeof el == 'string');

if (typeof isArrayIncludeString == 'undefined') {
  array.sort(function (a, b) {
    return a - b;
  });
} else {
  array.sort();
}

array.sort();

document.write(`Your sorted array: ${array} <br>`);

//Видалити елементи з масиву з 2 по 4 (включно!).

array.splice(1, 3);

document.write(`Cutting elements from 2 to 4 from your array: ${array} `);
console.log(array);
