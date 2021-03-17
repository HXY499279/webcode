const div = document.getElementById("div");
const btn = document.getElementById("btn");
const span = document.getElementById("span");
const span1 = document.getElementById("span1");
btn.onclick=function(){
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('get','http://wthrcdn.etouch.cn/weather_mini?city=重庆');
xhr.send(null);
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if(xhr.status>=200 && xhr.status<300){
      console.log(xhr);
      let xinxi = xhr.response;
      console.log(xinxi);
      new Promise(function(){
        span.innerHTML = xinxi.data.city
      }
      ).then(
      span1.innerHTML = xinxi.data.forecast[0].date
      )
    }
  }

}
}