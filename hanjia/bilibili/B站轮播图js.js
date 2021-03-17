/*轮播图JS */  
var spans = document.getElementsByClassName("daohangdian");
var lis = document.getElementsByClassName("sanlan-li-img");
var index = 0;
var imgArr = ["./图片/轮播图1.jpg@880w_388h_1c_95q","./图片/轮播图2.jpg@880w_388h_1c_95q","./图片/轮播图3.jpg@880w_388h_1c_95q","./图片/轮播图4.jpg@880w_388h_1c_95q","./图片/轮播图5.jpg@880w_388h_1c_95q"];
spans[0].onclick=function(){
    lis[0].src = imgArr[0];
    spans[4].style.backgroundColor="white";
    spans[4].style.border=" 3px transparent solid";
}
spans[1].onclick=function(){
    lis[0].src = imgArr[1];
    spans[0].style.backgroundColor="white";
    spans[0].style.border=" 3px transparent solid";
}
spans[2].onclick=function(){
    lis[0].src = imgArr[2];
    spans[1].style.backgroundColor="white";
    spans[1].style.border=" 3px transparent solid";
}
spans[3].onclick=function(){
    lis[0].src = imgArr[3];
    spans[2].style.backgroundColor="white";
    spans[2].style.border=" 3px transparent solid";
}
spans[4].onclick=function(){
    lis[0].src = imgArr[4];
    spans[3].style.backgroundColor="white";
    spans[3].style.border=" 3px transparent solid";
}
setInterval(function(){   
    index++;
    index = index % imgArr.length;
    spans[index].onclick();
    spans[index].style.backgroundColor=" rgb(0,161,214)";
    spans[index].style.border="3PX solid white";
    
},4000);

