/* 
* @Author: Marte
* @Date:   2017-08-05 20:08:45
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-08 09:25:53
*/
function w_tab(){
    var middle=document.getElementsByClassName("w_middle1")[0];
    var ul =middle.getElementsByTagName("ul")[0];
    var li=ul.getElementsByTagName("li");
    var goods =document.getElementsByClassName("goods");
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
        li[i].onmouseover=function(){
            a();
            this.className="active";
            goods[this.index].style.display="block";

         }
     }
    function a(){
        for(var j=0;j<li.length;j++){
                li[j].className="";
                 goods[j].style.display="none";
             }
     }
 }
 w_tab();

