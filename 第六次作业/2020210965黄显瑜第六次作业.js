function count(start,end) {
    var timer;
    console.log(start);
    timer = setInterval(function() {
    if(start < end) {
    start ++;
    console.log(start);
    }else {
    clearInterval(timer);
    }
    },100);
    return {
    cancel: function() {
    clearInterval(timer);
    }
    }
    }
    count(1,10);