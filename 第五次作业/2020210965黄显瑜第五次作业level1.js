var arr=[10,50,70,100];
var index=0;
var ziti=document.getElementById("ziti");
ziti.onclick=function(){
    index++;
    if(index>=arr.length){
    index=0;
}
    var text=document.getElementById("text");
    text.style.fontSize=arr[index]+"PX";
    
}
var arr1=["yellow","blue","write","purple","red"];
var zhuti=document.getElementById("zhuti");
zhuti.onclick=function(){
    index++;
    if(index>=arr1.length){
    index=0;
}
    var body=document.getElementById("body");
    body.style.backgroundColor=arr1[index];
}