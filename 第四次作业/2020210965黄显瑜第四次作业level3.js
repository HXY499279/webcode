var arr=[-4,-1,0,3,10]
var arr1=arr.map(function(index,item,array){
    return item*item
})
function sor(a,b){
    return a-b;
}
arr1.sort(sor);
console.log(arr1)