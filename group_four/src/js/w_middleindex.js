/* 
* @Author: Marte
* @Date:   2017-08-13 17:21:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-14 11:31:46
*/

function w_middleindex(){
    var prev=document.querySelector(".w_prev");
    var next=document.querySelector(".w_next");
    var ul=document.querySelector(".w_middlenewul");
    prev.onclick=function(){
        ul.style.left=0+"px";
    }
    next.onclick=function(){
        ul.style.left=-770+"px";
    }
}
w_middleindex();