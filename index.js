// var x = 10;
// var y = 20;

// functon test() {
//   if (x === 5 && y > 19) {
//     alert('A variável x é igual a ' + x + ' e y é igual a ' + y);
//   } else if (y == 20) {
//     var soma = x + y;
//     alert('A soma de x + y é igual a ' + soma);
//   }
// }

// test();

// var person = {
//   age: 35,
//   name: 'Julius Rock',
//   hight: 1.60,
//   isMarried: false
// }

// const introduce = () => {
//   alert(
//     '\nName: ' + person.name
//     + '\nAge: ' + person.age
//     + '\nHeght: ' + person.hight
//     + '\nIs Married: ' + person.isMarried);

//     if (person.isMarried === false) {
//       console.log(person.name, 'é gay...');
//     }
// }

// introduce();



// var person = {
//   age: 35,
//   name: 'Julius Rock',
//   hight: 1.60,
//   isMarried: false,
//   birthday: function() {
//     person.age ++;
//   }
// };

// person.birthday();
// console.log(person);

// var number = 1;
// var boolean;
// const func = () => {
//   if (number) {
//     boolean = true;
//     console.log(boolean);
//   } else {
//     boolean = false;
//     console.log(boolean);
//   }
// };

// Condicional ternário

// func();

// var car = {
//   doors: 4,
//   brand: 'Fiat',
// }

// var model;
// const test = () => {
//   if (car.doors === 4) {
//     model = '4 doors';
//     console.log(model);
//   } else if (car.doors === 2) {
//     model = '2 doors';
//     console.log(model);
//   } else if (car.doors === 3) {
//     model = '3 doors'
//     console.log(model + ': 2017 Hyundai Veloster Turbo: A 3-Door Funster')
//   } else {
//     console.log('Is this a car?')
//   }
// }
// test();

// var car = {
//   doors: 2,
//   brand: 'Fiat',
// }

// var model;
// var ternario = car.doors === 4 ?
//   (
//     model = '4 doors'
//   ) :
//   (
//     model = '2 doors'
//   );

// Retorno de funções com arrays e objetos

//   console.log(ternario);

// function func(a, b, c) {
//   return a;
// }

// console.log(func('var a, b and c are only inside the function'));

// const arr = () => {
//   return [8712, 1981, 8798, 52, 41, 841, 8416, 687165, 8716, 841]
// }

// console.log(arr()[7] + ' + ' + arr()[3]);

// function calc() {
//   var sum = arr()[3] + arr()[7];

//   return sum;
// }

// alert(calc());

// const person = () => {
//   return {
//     weight: 78,
//     age: 28,
//     name: 'Fulanius'
//   };
// }
// console.log(person().name + ' ' + person().age, 'anos');

// Parâmetros de Funções como arrays e objetos

// var arr = [8798, 52, 41, 841, 8416, 687165];
// var obj = {
//   name: 'Fofondiformio',
//   height: 1.62,
//   weight: 61,
//   age: 32,
// }

// const myFunction = (arg) => {
//   return arg;
// }

// console.log(myFunction(arr)[1]);

// const myFunctionToo = (arg) => {
//   return arg[0];
// }

// console.log(myFunctionToo(arr));

// const alsoMyFunction = (arg) => {
//   return arg;
// }

// console.log(alsoMyFunction(obj).age);

// Operador Virgula e Estrutura Condicional switch

// var a, b = 2, c = 3;
// function func() {
//   return (b += 1, b); // Ou return ++b;
// }

// console.log(func());

// const fun = (x) => {
//   switch(x) {
//     case 1:
//       console.log('The number is equals to 1');
//     break;

//     case 2:
//       console.log('The number is equals to 2');
//     break;

//     default:
//       console.log('The number is undefined...');
//     break;
//   }
// }
// fun(2);
// fun(7);

// Estrutura de Repetição While

// var counter = 0;
// while(counter < 10) {
//   console.log(counter);
//   counter++;
// }

// while(counter !== 0) {
//   console.log(counter);
//   counter--;
// }

// O Operador Módulo

// var division = 10 / 2;
// var divisionToo = division % 2; // resto da divisão por 2
// var number = 0;

// while (number <= 100) {
//   number % 2 === 0 ? console.log(number) : ''; // only even numbers
//   number++;
// }

// console.log(division);    // iquals 5
// console.log(divisionToo); // iquals 1

// Array e a Propriedade Length

// var arr = ['Julius', 'Vila', 'Cesamus', { age: '73 years old' }];
// var quantity = arr.length;

// console.log('Essa é a quantidade de ítem:', quantity);

// while (quantity > 0) {
//   console.log(arr[--quantity]);
//   if (quantity === 3) {
//     console.log(arr[quantity].age);
//   }
// }

// Método "push()" e Loop "for"

// var arr = ['Vila', 'Cesamus', 'Party', 8712, 1981, 8798, '+2'];

// const updatArr = () => {
//   arr.push('String too');
//   return arr;
// }

// console.log(updatArr());

// var arr = ['Vila', 'Cesamus', 'Party', 8712, 1981, 8798, '+2'];

// const updatArr = () => {
//   arr.push(function sum(x, y) {
//     return x + y;
//   });
//   return arr;
// }

// console.log(updatArr());

// var arr = ['Vila', 'Cesamus', 'Party', 8712, 1981, 8798, '+2'];

// const updatArr = () => {
//   arr.push([1, 7, 'dois']);
//   return arr;
// }

// console.log(updatArr());

// for (var num = 1; num < 9752; num++) {
//   console.log(num);
// }

// Funções auto-executáveis (IIFE)

// var methods = {
//   prop: function name() {
//     console.log(10 + 12);
//   }
// }

// console.log(methods.prop());

// const func = () => {
//   console.log(20 +12);
// }

// console.log(func());

// // (function () {
// // console.log(40 + 25);
// // })();
// // OU
// (function () {
// console.log(40 + 25);
// }());

// Wrapper Objects e Construtores

// var name = 'Esperiquitidiberto';
// console.log(name.length);

// var bool = Boolean(0);
// console.log(bool.valueOf());

// Teste de valores ( TypeOf )

// var name = 'Esperiquitidiberto';
// var number = 842;
// var bool = false;
// document.write(`<h1>${typeof name}</h1>`);
// document.write(`<h1>${typeof number}</h1>`);
// document.write(`<h1>${typeof bool}</h1>`);

// const sum = (num1, num2) => {
//   if (typeof num1 === 'number' && typeof num2 === 'number') {
//     resulted = num1 + num2;
//     document.write(`<h1>O resultado da soma é: ${resulted}</h1>`);
//   } else {
//     document.write(`<h1>O resultado da soma não é numérico!`);
//   }
// }

// sum(541, 840);
// sum('541', 840);
