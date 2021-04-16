// // 数组去重方法一
// function unique(arr){
//     for (let i = 0 ; i < arr.length-1 ; i++) {
//         for (let j = i+1 ;j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 arr.splice(i,1)
//                 break;
//             }
//         }
//     }
//     console.log(arr)
// }

// let arr = [1,1,2,3,3]

// unique(arr)

// // 数组去重方法二
// function unique(arr){
//     var Arr = [];
//     for (let i=0;i<arr.length;i++) {
//         if (Arr.indexOf(arr[i]) === -1 ) {
//             Arr.push(arr[i])
//         }
//     }
//     console.log(Arr)
// }

// let arr = [1,1,2,3,3]

// unique(arr)

// // 数组去重方法三
// function unique(arr){
//     var Arr = [];
//     for (let i=0;i<arr.length;i++) {
//         if (Arr.includes(arr[i]) === false ) {
//             Arr.push(arr[i])
//         }
//     }
//     console.log(Arr)
// }

// let arr = [1,1,2,3,3]

// unique(arr)

// // 数组去重方法四
// function unique(arr) {
//     console.log(
//         arr.filter(function (item, index, arr) {
//             return arr.indexOf(item) === index
//         })
//     )

// }

// let arr = [1, 1, 2, 3, 3]

// unique(arr)

// // 数组去重方法五
// function unique(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//       let item = arr[i]
//       if (obj[item] !== undefined) {
//         arr.splice(i, 1);
//         i--;
//         continue;
//       }
//       obj[item] = item
//     }
//     console.log(arr)
// }

// let arr = [1, 1, 2, 3, 3]

// unique(arr)