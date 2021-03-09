//--1 створити функцію яка виводить масив
// function ar() {
//     let arr =[1,2,3,4];
//     console.log(arr)
// }
// ar();

//---2 створити функцію яка заповнює масив рандомними числами та виводить його
// function rand() {
//     let arr =[];
//     for (let i=0;i<10;i++){
//         arr[i] = Math.round(Math.random()*100);
//     }
//     console.log(arr);
// }
// rand();

//---3 створити функцію яка знаходить найбільше число в масиві. Для створення масиву використати попередню функцію
// function rand() {
//     let arr =[];
//     for (let i=0;i<10;i++){
//         arr[i] = Math.round(Math.random()*100);
//     }
//     function ma(){
//         let number = Math.max.apply(null, arr);
//         console.log(number);
//     }
//     ma();
//     console.log(arr);
// }
// rand();

//----4 створити функцію яка скаладає значення елементів масиву та повертає його.
// function rand() {
//     let arr =[];
//     for (let i=0;i<10;i++){
//         arr[i] = Math.round(Math.random()*100);
//     }
//     function plus() {
//       let sum = arr.reduce(function (acum, currentValue) {
//             return acum+currentValue;
//         });
//         console.log(sum);
//     }
//     plus();
//     console.log(arr);
// }
// rand();

//----5
// class MyArray {
//     constructor(innerArray,index){
//         this.innerArray = innerArray;
//         this.index = index;
//     }
// }
// let arr = new MyArray([1,2,3,4,5],[0,1,2,3,4]);
// arr.next = function () {
//
//     };
// console.log(arr);

