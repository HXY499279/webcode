let sum=0
function add(){
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i]
    }
}
add(1,2,3,4,7,4)
console.log(sum) 
