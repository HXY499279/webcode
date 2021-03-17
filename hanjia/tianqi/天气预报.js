// 页面元素获取
var input = document.getElementsByClassName("input")[0];
var i = document.getElementsByClassName("i")[0];
var footer = document.getElementsByClassName("footer");
var placelocation = document.getElementsByClassName("top_placelocation")[0];
var back = document.getElementsByClassName("back")[0];
var mid = document.getElementsByClassName("mid");

// Ajax涉及元素获取

// 未来天气
var riqi = document.getElementsByClassName("riqi");
var tianqi = document.getElementsByClassName("tianqi");
var gaowen = document.getElementsByClassName("gaowen");
var diwen = document.getElementsByClassName("diwen");
// 今日天气
var temperature = document.getElementsByClassName("temperature")[0];
var cloud = document.getElementsByClassName("cloud")[0];
var wind = document.getElementsByClassName("wind")[0];
var tip = document.getElementsByClassName("tip")[0];
// 生活指数
var zhishu = document.getElementsByClassName("zhishu");
var dengji = document.getElementsByClassName("dengji");
var tishi = document.getElementsByClassName("tishi");

// main_js
i.onclick = function(){
     const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("get",'https://tianqiapi.com/api?version=v1&appid=85214918&appsecret=m5rMoSIV &city='+input.value);
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >=200 && xhr.status <300){
                    var text = xhr.response;           
                    console.log(text);
                    footer[0].onclick = function(){
                        footer[0].className = "footer on";
                        footer[2].className = "footer";
                        footer[1].className = "footer";
                        mid[0].style.display = "none";
                        mid[1].style.display = "block";
                        mid[2].style.display = "none";
                        mid[3].style.display = "none";
                        
                        for(let i=0;i<3;i++){
                            riqi[i].innerHTML = text.data[i].day;
                        }
                        for(let i=3;i<7;i++){
                            riqi[i].innerHTML = text.data[i].day;
                        }
                        for(let i=0;i<7;i++){
                            tianqi[i].innerHTML = text.data[i].wea;
                        }
                        for(let i=0;i<7;i++){
                            gaowen[i].innerHTML = text.data[i].tem1;
                            diwen[i].innerHTML = text.data[i].tem2;
                        }
                    }
                    
                    
                    footer[1].onclick = function(){
                        footer[1].className = "footer on";
                        footer[0].className = "footer";
                        footer[2].className = "footer";
                        mid[0].style.display = "none";
                        mid[2].style.display = "block";
                        mid[1].style.display = "none";
                        mid[3].style.display = "none";

                        temperature.innerHTML = text.data[0].tem;
                        cloud.innerHTML = text.data[0].wea;
                        wind.innerHTML = text.data[0].win[0];
                        tip.innerHTML = text.data[0].air_tips;                       
                    }

                    
                    footer[2].onclick = function(){
                        footer[2].className = "footer on";
                        footer[0].className = "footer";
                        footer[1].className = "footer";
                        mid[0].style.display = "none";
                        mid[3].style.display = "flex";
                        mid[2].style.display = "none";
                        mid[1].style.display = "none";

                        zhishu[0].innerHTML = text.data[0].index[0].title;
                        dengji[0].innerHTML = text.data[0].index[0].level;
                        tishi[0].innerHTML = text.data[0].index[0].desc;

                        zhishu[1].innerHTML = text.data[0].index[4].title;
                        dengji[1].innerHTML = text.data[0].index[4].level;
                        tishi[1].innerHTML = text.data[0].index[4].desc;

                        zhishu[2].innerHTML = text.data[0].index[3].title;
                        dengji[2].innerHTML = text.data[0].index[3].level;
                        tishi[2].innerHTML = text.data[0].index[3].desc;

                        zhishu[3].innerHTML = text.data[0].index[1].title;
                        dengji[3].innerHTML = text.data[0].index[1].level;
                        tishi[3].innerHTML = text.data[0].index[1].desc;
                    }
                    footer[1].onclick();
                    placelocation.innerHTML = text.city; 
                    var li = document.createElement("li");
                    li.innerHTML = `<span class='history_li_span'>${text.city}</span><i class='iconfont X' style='background-color: white;font-size: 12PX;color: rgb(153,153,153);'>&#xe69d;</i>`;
                    hstul.appendChild(li); 
                }
        }
}
// 返回键
    back.innerHTML = "<" ;
    back.onclick = function(){
        mid[2].style.display = "none";
        mid[0].style.display = "block";
        mid[1].style.display = "none";
        mid[3].style.display = "none";
        footer[2].className = "footer";
        footer[0].className = "footer";
        footer[1].className = "footer";
        hst.style.display = "none";
    }
    input.value = null;
}

// 历史栏——js
var hst = document.getElementsByClassName("history")[0];
var hstul = document.getElementsByClassName("history_ul")[0];
var hstli = document.getElementsByTagName("li");
var hstlispan = document.getElementsByClassName("history_li_span");
var hstX = document.getElementsByClassName("X");
var lispan = document.getElementsByTagName("span");

input.onclick = function(){
        if(hstli[0] !== undefined){
        hst.style.display = "block";
        setInterval(function(){
            for(let i =0;i<hstli.length;i++){
                hstX[i].onclick = function(){
                    hstul.removeChild(hstli[i]);
                    if(hstli[0] == undefined){
                        hst.style.display = "none";
                    }
                }   
            }
        },100)
        setInterval(function(){
            for(let i =0;i<lispan.length;i++){
                lispan[i].onclick = function(){
                    input.value = lispan[i].innerHTML;
                        const xhr = new XMLHttpRequest();
                           xhr.responseType = "json";
                           xhr.open("get",'https://tianqiapi.com/api?version=v1&appid=85214918&appsecret=m5rMoSIV &city='+input.value);
                           xhr.send(null);
                           xhr.onreadystatechange = function(){
                               if(xhr.readyState === 4){
                                   if(xhr.status >=200 && xhr.status <300){
                                       var text = xhr.response;           
                                       console.log(text);
                                       footer[0].onclick = function(){
                                           footer[0].className = "footer on";
                                           footer[2].className = "footer";
                                           footer[1].className = "footer";
                                           mid[0].style.display = "none";
                                           mid[1].style.display = "block";
                                           mid[2].style.display = "none";
                                           mid[3].style.display = "none";
                                           
                                           for(let i=0;i<3;i++){
                                               riqi[i].innerHTML = text.data[i].day;
                                           }
                                           for(let i=3;i<7;i++){
                                               riqi[i].innerHTML = text.data[i].day;
                                           }
                                           for(let i=0;i<7;i++){
                                               tianqi[i].innerHTML = text.data[i].wea;
                                           }
                                           for(let i=0;i<7;i++){
                                               gaowen[i].innerHTML = text.data[i].tem1;
                                               diwen[i].innerHTML = text.data[i].tem2;
                                           }
                                       }
                                       
                                       
                                       footer[1].onclick = function(){
                                           footer[1].className = "footer on";
                                           footer[0].className = "footer";
                                           footer[2].className = "footer";
                                           mid[0].style.display = "none";
                                           mid[2].style.display = "block";
                                           mid[1].style.display = "none";
                                           mid[3].style.display = "none";
                   
                                           temperature.innerHTML = text.data[0].tem;
                                           cloud.innerHTML = text.data[0].wea;
                                           wind.innerHTML = text.data[0].win[0];
                                           tip.innerHTML = text.data[0].air_tips;                       
                                       }
                   
                                       
                                       footer[2].onclick = function(){
                                           footer[2].className = "footer on";
                                           footer[0].className = "footer";
                                           footer[1].className = "footer";
                                           mid[0].style.display = "none";
                                           mid[3].style.display = "flex";
                                           mid[2].style.display = "none";
                                           mid[1].style.display = "none";
                   
                                           zhishu[0].innerHTML = text.data[0].index[0].title;
                                           dengji[0].innerHTML = text.data[0].index[0].level;
                                           tishi[0].innerHTML = text.data[0].index[0].desc;
                   
                                           zhishu[1].innerHTML = text.data[0].index[4].title;
                                           dengji[1].innerHTML = text.data[0].index[4].level;
                                           tishi[1].innerHTML = text.data[0].index[4].desc;
                   
                                           zhishu[2].innerHTML = text.data[0].index[3].title;
                                           dengji[2].innerHTML = text.data[0].index[3].level;
                                           tishi[2].innerHTML = text.data[0].index[3].desc;
                   
                                           zhishu[3].innerHTML = text.data[0].index[1].title;
                                           dengji[3].innerHTML = text.data[0].index[1].level;
                                           tishi[3].innerHTML = text.data[0].index[1].desc;
                                       }
                                       footer[1].onclick();
                                       placelocation.innerHTML = text.city; 
                                       var li = document.createElement("li");
                                       li.innerHTML = `<span class='history_li_span'>${text.city}</span>
                                                        <i class='iconfont X' style=background-color: white;font-size: 12PX;color: rgb(153,153,153);>&#xe69d;</i>`;
                                       hstul.appendChild(li); 
                                   }
                           }
                   }
                }   
            }
        },100)

    }
    else{
        hst.style.display = "none";
    }
}



