/*直播左上右*/ 
var hyh = document.getElementsByClassName("zhibo-left-top-right-hyh");
hyh[0].addEventListener("click",function(){
    alert("别点了我没做那么高级！");
})
/*直播右下轮播图*/  
var zhiboa = document.getElementsByClassName("zhibo-right-bottom-li-a")[0];
var zhiboimg = document.getElementsByClassName("zhibo-right-bottom-li-img")[0];
var zhibob = document.getElementsByClassName("zhibo-right-bottom-b-text")[0];
var zhibodaohangdian = document.getElementsByClassName("zhibo-daohangdian");
var imgs1 = ["./图片/直播轮播图1.webp","./图片/直播轮播图2.webp","./图片/直播轮播图3.webp"];
var hrefs = ["https://www.bilibili.com/blackboard/activity-wRRweqKsS.html",
             "https://live.bilibili.com/blackboard/activity-AKB48TeamSH-slt-2021-PC.html?is_live_webview=1&spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.22",
             "https://live.bilibili.com/21622787"];
var texts = ["航海行动启动，围观赢豪礼~","AKB48 Team SH《缩略图》云公演","2021CFML春季赛"];
    for(let i = 0;i<3;i++){
        zhibodaohangdian[i].onclick = function(){
            zhiboa.href = hrefs[i];
            zhiboa.title = texts[i]
            zhiboimg.src = imgs1[i];
            zhibob.innerHTML = texts[i];
        }
    }
var ind = 0;
setInterval(function(){
    ind++;
    ind = ind % 3;
    zhibodaohangdian[ind].onclick();
},4000)

/*直播右上切换*/ 
var spans2 = document.getElementsByClassName("zhibo-right-top-span");
var parts2 = document.getElementsByClassName("zhibo-right-bottom-part");
spans2[0].onclick = function(){
    spans2[0].className = "zhibo-right-top-span on";
    spans2[1].className = "zhibo-right-top-span";
    spans2[2].className = "zhibo-right-top-span";
    parts2[0].className = "zhibo-right-bottom-part";
    parts2[1].className = "zhibo-right-bottom-part hidden";
    parts2[2].className = "zhibo-right-bottom-part hidden";
}
spans2[1].onclick = function(){
    spans2[1].className = "zhibo-right-top-span on";
    spans2[0].className = "zhibo-right-top-span";
    spans2[2].className = "zhibo-right-top-span";
    parts2[1].className = "zhibo-right-bottom-part";
    parts2[0].className = "zhibo-right-bottom-part hidden";
    parts2[2].className = "zhibo-right-bottom-part hidden";
}
spans2[2].onclick = function(){
    spans2[2].className = "zhibo-right-top-span on";
    spans2[1].className = "zhibo-right-top-span";
    spans2[0].className = "zhibo-right-top-span";
    parts2[2].className = "zhibo-right-bottom-part";
    parts2[1].className = "zhibo-right-bottom-part hidden";
    parts2[0].className = "zhibo-right-bottom-part hidden";
}
