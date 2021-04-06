// bigp
var content = document.getElementById("content");
var bigp = document.getElementsByClassName("bigp")[0];
var shoubiao = document.getElementsByClassName("shoubiao")[0];
var Fw_u = document.getElementsByClassName("Fw_u")[0];
var Fw_span = document.getElementsByClassName("Fw_span")[0];

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
bigp.onclick = function(){
    toggleClass(bigp,"skindbp");
    toggleClass(content,"skindc");
    toggleClass(shoubiao,"sshoubiao");
    toggleClass(Fw_u,"sFw_u");
    toggleClass(Fw_span,"sFw_span");
}
// bigp


// 登陆JS
var zhdl = document.getElementById("zhdl");
var smdl = document.getElementById("smdl");
var userform = document.getElementById("userForm");
var scan = document.getElementById("scan");
zhdl.onclick = function(){
    userform.style.display = "block";
    scan.style.display = "none";
    zhdl.style.color = "rgb(194, 77, 141)";
    smdl.style.color = "rgb(102, 102, 102)";
}
smdl.onclick = function(){
    userform.style.display = "none";
    scan.style.display = "block";
    zhdl.style.color = "rgb(102, 102, 102)";
    smdl.style.color = "rgb(194, 77, 141)";
}
// 登陆JS

// 注册JS
var zhuce = document.getElementById("zhuce");
var shadow = document.getElementsByClassName("shadow")[0];
var zhuce_content = document.getElementsByClassName("zhuce_content")[0];
var cha = document.getElementsByClassName("cha")[0];
function close (){
    toggleClass(shadow,"close");
    toggleClass(zhuce_content,"close"); 
}
zhuce.onclick = close;
cha.onclick = close;
// 注册JS
console.log(5201314)