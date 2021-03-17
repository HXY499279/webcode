    /*首栏JS*/
    var shoulanposition = document.getElementsByClassName("shoulan-position")[0];
    var shoulandierbufen1 = document.getElementsByClassName("shoulan-dierbufen1")[0];
    var diyibufen_i = document.getElementsByClassName("diyibufen_i");
    window.onscroll = function(){
    if(document.documentElement.scrollTop > 47){
        hiddenbackground.style.backgroundColor = "rgb(244,244,244)";
        shoulanposition.style.position = "fixed";
        shoulanposition.style.backgroundColor = "white";
        shoulanposition.style.boxShadow = "0 2px 4px 0 rgb(0 0 0 / 8%)";
        shoulandierbufen1.style.backgroundColor = "rgb(244,244,244)"
        diyibufen_i[0].style.color = "rgb(0,161,214)";
        diyibufen_i[1].style.color = "rgb(0,161,214)";
    }else{
        hiddenbackground.style.backgroundColor = "white";
        shoulanposition.style.position = "absolute";
        shoulanposition.style.backgroundColor = "transparent";
        shoulanposition.style.boxShadow = "0 0px 0px 0 rgb(0 0 0 / 0%)";
        shoulandierbufen1.style.backgroundColor = "white";
        diyibufen_i[0].style.color = "";
        diyibufen_i[1].style.color = "";
    }

    if(document.documentElement.scrollTop > 0 && document.documentElement.scrollTop<700){
    for(let i = 0;i<navlis.length;i++){
      navlis[i].style.backgroundColor = "";
    }
  }else if(document.documentElement.scrollTop >= 700 && document.documentElement.scrollTop<1105){
    for(let i = 0;i<navlis.length;i++){
      navlis[i].style.backgroundColor = "";
      if(i==0) navlis[i].style.backgroundColor = "rgb(0, 161, 214)";
    }
  }else if(document.documentElement.scrollTop >= 1105 && document.documentElement.scrollTop<1565){
    for(let i = 0;i<navlis.length;i++){
      navlis[i].style.backgroundColor = "";
      if(i==1) navlis[i].style.backgroundColor = "rgb(0, 161, 214)";
    }
  }else if(document.documentElement.scrollTop >= 1565 && document.documentElement.scrollTop<2000){
    for(let i = 0;i<navlis.length;i++){
      navlis[i].style.backgroundColor = "";
      if(i==2) navlis[i].style.backgroundColor = "rgb(0, 161, 214)";
    }
  }else if(document.documentElement.scrollTop >= 2000){
    for(let i = 0;i<navlis.length;i++){
      navlis[i].style.backgroundColor = "";
      if(i==3) navlis[i].style.backgroundColor = "rgb(0, 161, 214)";
    }
}

}
    var hiddenbackground = document.getElementsByClassName("shoulan-dierbufen")[0];
    var hidden = document.getElementsByClassName("shoulan-dierbufen1")[0];
    var body = document.getElementsByTagName("body")[0];
    var sousuo = document.getElementsByClassName("shoulan-dierbufen2")[0];
    var hiddenimg = document.getElementsByClassName("hiddenimg")[0];
    window.onresize = function(){
        if(body.clientWidth < 1200){
          hiddenbackground.style.backgroundColor = "transparent";
          hidden.style.display = "none";
          hiddenimg.href = "https://search.bilibili.com/?spm_id_from=333.851.b_696e7465726e6174696f6e616c486561646572.9";
          hiddenimg.target = "_blank";
          sousuo.style.backgroundColor="transparent";
          sousuo.style.position = "relative";
        }
        else{
            hiddenbackground.style.backgroundColor = "white";
            hidden.style.display = "inline-block";
            hiddenimg.href = "javascript:;";
            hiddenimg.target = "_self";
            sousuo.style.backgroundColor="rgb(231,231,231)";
            sousuo.style.position = "absolute";
        }
    }

