var fasong=document.getElementById("btn");
fasong.onclick=function(){

    var text=document.getElementById("text");
    var tr=document.createElement("tr");
    tr.innerHTML="<td>"+text.value+"</td>"+
                  "<td><button class='shanchu'>删除</button></td>";
    var table=document.getElementById("table");
    var tbody=table.getElementsByTagName("tbody")[0];
    tbody.appendChild(tr);

    var shanchu=document.getElementsByTagName("button");
        for(var i=0;i<shanchu.length-1;i++){
        shanchu[i].onclick=function(){
            var tr=this.parentNode.parentNode;
            var ret=confirm("确定删除你的留言吗？");
            if(ret){
                tr.parentNode.removeChild(tr);
                   }
            }        
        }   
    text.value=null;
}


