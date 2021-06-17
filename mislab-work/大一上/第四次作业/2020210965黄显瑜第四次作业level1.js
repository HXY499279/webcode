var arr = [[1,2,3],4,[5,6],[7,8,9]];
var newarr=[]
function even (arr) {
    for(var i=0;i<arr.length;i++)
   newarr=newarr.concat(arr[i])

}
even(arr) 
console.log(newarr)
