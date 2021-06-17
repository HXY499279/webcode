//数组扁平化方法一
function flatten(arr){
   return arr.flat(Infinity)
  }

// let arr = [1,[2,3,[4,[5]]]];

// console.log(flatten(arr)) 

// //数组扁平化方法二
// function flatten (arr) {
//     var Arr = [];
//     function main (arr){
//         for (let i = 0 ; i < arr.length ; i++) {
//             if (!(arr[i] instanceof Object)) {
//                 Arr.push(arr[i])
//             } else{
//                 main (arr[i])
//             }
//         } 
//     }
//     main(arr)
//     return Arr
// }
//  let arr = [1,[2,3,[4,[5]]]];
//  console.log(flatten(arr))

// // 数组扁平化方法三
// function flatten(arr) {
//     let arr1 = []
//     arr = arr.toString().split(',')
//     arr.forEach(item => {
//         item = parseInt(item)
//         arr1.push(item)
//     });
//     console.log(arr1)
// }
// let arr = [1, [2, 3, [4, [5]]]];
// flatten(arr)

// //数组扁平化方法四
// function flatten(arr){
//     while (arr.some(item => item instanceof Object)) {
//         arr = [].concat(...arr)
//     } 
//     return arr
// }

//  let arr = [1,[2,3,[4,[5]]]];

//  console.log(flatten(arr)) 

// //数组扁平化方法五
// function flatten(arr){
//     while (arr.some(item => Array.isArray (item))) {
//         arr = arr.flat()
//     } 
//     return arr
// }

//  let arr = [1,[2,3,[4,[5]]]];

//  console.log(flatten(arr)) 

