/* 
* @Author: Marte
* @Date:   2017-08-07 09:29:47
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-08 20:35:06
*/
function w_history(){
  var lishi=document.getElementsByClassName("w_history1")[0];
  var w_h2=document.getElementsByClassName("w_h2")[0];
  var cookie=document.cookie.split("; ");
  var historyjilu=[];
  var a = {};
  var p=location.search.slice(1).split("&");
  p.forEach(function(item){
    var arr=item.split("=");
    if(arr[0]=="name"){
      a.name=arr[1];
    }
    if(arr[0]=="url"){
      a.url=arr[1];
    }
    if(arr[0]=="pre"){
      a.pre=arr[1];
    }
    if(arr[0]=="now"){
      a.now=arr[1];
    }
    if(arr[0]=="sale"){
      a.sale=arr[1];
    }
    if(arr[0]=="guid"){
      a.guid=arr[1];
    }
  });
  cookie.forEach(function(item){
    var arr=item.split("=");
    if(arr[0]=="historyjilu"){
      historyjilu=JSON.parse(arr[1]);
    }
  });
  for(var i=0;i<historyjilu.length;i++){
    if(historyjilu[i].guid==a.guid){
        historyjilu.splice(i,1);
    }
  }
  historyjilu.unshift(a);
  if(historyjilu.length==4){//实现最近浏览记录最多只能三条
    historyjilu.length = 3;
  }
  // console.log(historyjilu);
  document.cookie="historyjilu="+JSON.stringify(historyjilu);
  var ul=document.createElement("ul");
      ul.innerHTML = historyjilu.map(function(item){
        return  "<li>"
                +"<img src="+item.url+">"  
                +"<h4>"+decodeURI(item.name)+"</h4>"
                +"<p class='pre'>List price：$<span>"+item.pre+"</span></p>"
                +"<p class='now'><span>Our price："+item.now+"</span></p>"
                +"<p class='save'>save："+(item.pre-item.now)+"</p>"
                +"</li>"   
      }).join("");
      w_h2.appendChild(ul);
}  
w_history();

