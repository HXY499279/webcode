// 通过改变对象的classname来改变对象的style属性
// 创建需要添加classname的对象
var obj = document.getElementsByClassName("");
// cn = classname

function addClass(obj , cn){
    if(!hasClass(obj , cn)){
        obj.className += " "+cn;
    }
}
function hasClass(obj , cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}
function removeClass(obj , cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    obj.className = obj.className.replace(reg , "");
}

function toggleClass(obj , cn){
    if(hasClass(obj , cn)){
        removeClass(obj , cn);
    }else{
        addClass(obj , cn);
    }
}