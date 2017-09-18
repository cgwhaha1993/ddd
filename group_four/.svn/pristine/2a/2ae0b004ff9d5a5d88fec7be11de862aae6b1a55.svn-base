function more_other(){
    var box = document.getElementById("h_bus");
    var cookie = document.cookie.split("; ");
    var carlist;
    // var buslist = [];
    
    cookie.forEach(function(item){
        var arr = item.split("=");
        if(arr[0]=="carlist"){
            carlist = JSON.parse(arr[1]);
            // console.log(carlist);
        }
        // if(arr[0]=="buslist"){
        //     buslist = JSON.parse(arr[1]);
        // }
    });
    var a = carlist;
    // if(carlist){
    //     buslist.forEach(function(item,idx){
    //         if(item.guid == carlist[0].guid){
    //             carlist[0].qty += item.qty;
    //             buslist.splice(idx,1);
    //         }
    //     });
    // }
    

    // if(buslist.length>0){
    //     a = buslist;
    // }
    // if(carlist){
    //     a.unshift(carlist[0]);
    // }
    
    // document.cookie = "buslist="+JSON.stringify(a);

    box.innerHTML = `<ul><li class="h_first">Your Item(s)</li><li></li><li>Quantity</li><li>Price</li><li>Total price</li><li class="h_last">Remove</li></ul>`;
    a.forEach(function(item){
        var ul = document.createElement("ul");
        ul.setAttribute("data-guid",item.guid);
        ul.innerHTML = `<li><img src="${item.url}"/></li><li><span>${item.name}</span><span>ID: ${item.guid}</span><span>Size: ${item.size}</span></li><li><span class="h_down">-</span><span class="h_qty">${item.qty}</span><span class="h_up">+</span></li><li><span class="h_pre">${item.pre}</span><span class="h_price">${item.price}</span></li><li><span class="h_sum">${item.price*item.qty}.</span><span class="h_sale">You save ${(item.pre-item.price)*item.qty}.</span></li><li><span class="del">&times;</span></li>`;
        box.appendChild(ul);
    });

    var up = document.getElementsByClassName("h_up");
    var down = document.getElementsByClassName("h_down");
    var _qty = document.getElementsByClassName("h_qty");
    var _pre = document.getElementsByClassName("h_pre");
    var _price = document.getElementsByClassName("h_price");
    var _sum = document.getElementsByClassName("h_sum");
    var _sale = document.getElementsByClassName("h_sale");
    var span_1 = document.querySelector("#h_ob>div>p:nth-child(1)>span");
    var span_2 = document.querySelector("#h_ob>div>p:nth-child(2)>span");
    function toCount(){
        var count = 0;
        var favour = 0;
        for(var i=0;i<_sum.length;i++){
            count += _sum[i].innerHTML*1;
            favour += _sale[i].innerHTML.replace("You save ","")*1;
        }
        span_1.innerHTML = count + ".";
        span_2.innerHTML = favour + ".";
    }
    toCount();
    for(var i=0;i<up.length;i++){
        up[i].index = i;
        up[i].onclick = function(){
            var _this = this.index;
            _qty[this.index].innerHTML = _qty[this.index].innerHTML*1 + 1;
            _sum[_this].innerHTML = _price[_this].innerHTML*_qty[_this].innerHTML + ".";
            _sale[_this].innerHTML = "You save "+(_pre[_this].innerHTML-_price[_this].innerHTML)*_qty[_this].innerHTML + ".";
            var ul = this.parentNode.parentNode;
            a.forEach(function(item,idx){
                if(item.guid == ul.getAttribute("data-guid")){
                    item.qty = _qty[_this].innerHTML*1;
                }
            });
            toCount();
            var _now = new Date();
            _now.setDate(_now.getDate()+7);
            document.cookie = "carlist="+JSON.stringify(a) + ";path=/;expires=" + _now;
            changeCarList();
        }
    }
    
    for(var i=0;i<down.length;i++){
        down[i].index = i;
        down[i].onclick = function(){
            var _this = this.index;
            if(_qty[this.index].innerHTML*1==0){
                // _qty[this.index].innerHTML*1="0";
            }else{
                _qty[this.index].innerHTML = _qty[this.index].innerHTML*1 - 1;
            }
            _sum[_this].innerHTML = _price[_this].innerHTML*_qty[_this].innerHTML + ".";
            _sale[_this].innerHTML = "You save "+(_pre[_this].innerHTML-_price[_this].innerHTML)*_qty[_this].innerHTML + ".";
            var ul = this.parentNode.parentNode;
            a.forEach(function(item,idx){
                if(item.guid == ul.getAttribute("data-guid")){
                    item.qty = _qty[_this].innerHTML*1;
                }
            });
            toCount();
            var _now = new Date();
            _now.setDate(_now.getDate()+7);
            document.cookie = "carlist="+JSON.stringify(a) + ";path=/;expires=" + _now;
            changeCarList();
        }
    }

    box.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "del"){
            var ul = target.parentNode.parentNode;
            box.removeChild(ul);
            a.forEach(function(item,idx){
                if(item.guid == ul.getAttribute("data-guid")){
                    a.splice(idx,1);
                }
            });
            toCount();
            var _now = new Date();
            _now.setDate(_now.getDate()+7);
            document.cookie = "carlist="+JSON.stringify(a) + ";path=/;expires=" + _now;
            changeCarList();
        }
    }

    /*说好的清空购物车呢*/
    // var getout = document.getElementById("h_getout");
    // getout.onclick = function(){
    //     box.innerHTML = `<ul><li class="h_first">Your Item(s)</li><li></li><li>Quantity</li><li>Price</li><li>Total price</li><li class="h_last">Remove</li></ul>`;
    //     document.cookie = "buslist="+JSON.stringify(a)+";expires="+now;
    // }
    // var checkout = document.getElementById("h_out");
    // checkout.onclick = function(){
        
    // }
    // document.cookie = "carlist="+JSON.stringify(a)+";path=/;expires="+now;
}
more_other();

function b_toTop(){
    var box = document.querySelector("#h_bus");
    var ul = document.querySelector("#h_bus ul:nth-child(1)");
    box.onscroll = function(){
        if(box.scrollTop>=37){
            ul.style.position = "absolute";
            ul.style.left = "0";
            ul.style.top = box.scrollTop + "px";
            ul.style.background = "#fff";
        }else if(box.scrollTop<37){
            ul.style.position = "relative";
            ul.style.left = "0";
            ul.style.top = "0px";
            ul.style.background = "none";
        }
    }

}
b_toTop();

function h_banner(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&(xhr.status===200||xhr.status===304)){
            var arr = JSON.parse(xhr.responseText);
            abc(arr);
        }
    }
    xhr.open("get","../api/buslist.php",true);
    xhr.send();
    function abc(arr){
        var banner = document.querySelector("#h_lun");
        var box = document.createElement("div");
        for(var i=0;i<arr.length;i++){
            var div = document.createElement("div");
            var img_1 = document.createElement("img");
            var img_2 = document.createElement("img");
            var p = document.createElement("p");
            var span_1 = document.createElement("span");
            var span_2 = document.createElement("span");
            var a = document.createElement("a");
            img_1.src = arr[i].url;
            p.innerHTML = arr[i].name;
            span_1.innerHTML = arr[i].pre;
            span_2.innerHTML = arr[i].now;
            img_2.src = "../images/h_logo8.png";
            div.appendChild(img_1);
            div.appendChild(p);
            div.appendChild(span_1);
            div.appendChild(span_2);
            a.appendChild(img_2);
            a.href = "#";
            div.appendChild(a);
            box.appendChild(div);
        }
        banner.appendChild(box);

        var left = document.querySelector("#h_toleft");
        var right = document.querySelector("#h_toright");
        left.onclick = function(){
            var _left = parseInt(getComputedStyle(box).left);
            box.style.left = _left==0?"-980px":"0";
        }
        right.onclick = function(){
            var _left = parseInt(getComputedStyle(box).left);
            box.style.left = _left==-980?"0":"-980px";
        }
    }
}
h_banner();