// 数组排序（从小到大）

// //第一种方法
// function mySort(arr){
//     var temp;
//     for (let i = 0 ; i < arr.length-1 ; i++) {
//         for (let j = i+1 ;j < arr.length ; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     console.log(arr)
//   }
//   let arr = [3,2,4,1,6,8,7,5,9]
//   mySort(arr)

// //第二种方法
// function mySort(arr){
//     var temp;
//     for (let i = 0 ; i < arr.length-1 ; i++) {
//         var min = i;
//         for (let j = i+1 ;j < arr.length ; j++) {
//             if (arr[min] > arr[j]) {
//                 min = j;
//             }
//         }
//         temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp;
//     }
//     console.log(arr)
//   }
// let arr = [3, 2, 4, 1, 6, 8, 7, 5, 9]
// mySort(arr)

// //第三种方法
// function mySort(arr) {
//     var Arr = [];
//     while (arr.length != 0) {
//         var min = Math.min.apply({}, arr);
//         Arr.push(min);
//         for(let i=0;i<arr.length;i++){
//             if(arr[i] === min){
//                 arr.splice(i,1)
//             }
//         }
//     }
//     console.log(Arr);
// }
// let arr = [3, 2, 4, 1, 6, 8, 7, 5, 9]
// mySort(arr)
