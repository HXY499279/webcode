var navlis = document.getElementsByClassName("nav-li");
navlis[0].onclick = function(){
    window.scrollTo(0,854);
    for(let i = 0;i<navlis.length;i++){
      navlis[i].style.backgroundColor = "";
      if(i==0) navlis[i].style.backgroundColor = "rgb(0, 161, 214)";
  }
}

navlis[1].onclick = function(){
    window.scrollTo(0,1310);
    for(let i = 0;i<navlis.length;i++){
      navlis[i].style.backgroundColor = "";
      if(i==1) navlis[i].style.backgroundColor = "rgb(0, 161, 214)";
  }
}
navlis[2].onclick = function(){
    window.scrollTo(0,1770);
    for(let i = 0;i<navlis.length;i++){
      navlis[i].style.backgroundColor = "";
      if(i==2) navlis[i].style.backgroundColor = "rgb(0, 161, 214)";
  }
}
navlis[3].onclick = function(){
    window.scrollTo(0,2810);
    for(let i = 0;i<navlis.length;i++){
      navlis[i].style.backgroundColor = "";
      if(i==3) navlis[i].style.backgroundColor = "rgb(0, 161, 214)";
  }
}


var back = document.getElementById("back");
var timer = 0;
back.onclick = function () {
  if (document.documentElement.scrollTop >= 0) {
    timer = setInterval(function () {
      document.documentElement.scrollTop = document.documentElement.scrollTop - 60;
      console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop == 0) clearInterval(timer);
    }, 6);

  }
}

