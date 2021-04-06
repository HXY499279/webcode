var arr=[4,3,5,2,7,34,6,64];
let t;
function sort(arr){
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        { 
         if(arr[i]>arr[j])
         {
            t=arr[i];
            arr[i]=arr[j];
            arr[j]=t;
         }
        }
    }
}
sort(arr);
console.log(arr);
