let str = "i love you";
let arr = str.split(" ");
let newArr = [];
for(let i=0;i<arr.length;i++)
{
    newArr.push(arr[i][0].toUpperCase()+arr[i].substr(1));
}
console.log(newArr);
