function h_goods(){
    var h2 = document.createElement("h2");

    var params = location.search.slice(1).split("&");

    var img = document.createElement("img");
    var div_2 = document.getElementById("h_qq");
    var img_2 = div_2.getElementsByTagName("img")[0];
    var imgs = div_2.getElementsByTagName("img");
    params.forEach(function(items){
        var arr = items.split("=");
        if(arr[0]=="url"){
            arr[1] = arr[1];
            img.src = arr[1];
            img_2.src = arr[1];//替换第一张图片
            src = arr[1];
        }
        if(arr[0]=="pre"){
            pre = arr[1];
        }
        if(arr[0]=="now"){
            now = arr[1];
        }
        if(arr[0]=="name"){
            _name = decodeURI(arr[1]).replace("!","&");
        }
        if(arr[0]=="guid"){
            guid = arr[1];
        }
    });
    var div = document.getElementById("h_gg");
    div.appendChild(img);


    div_2.onclick = function(e){

        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "imgs"){
            img.src = target.src;
            div.innerHTML = "";
            div.appendChild(img);
            for(var i=0;i<imgs.length;i++){
                imgs[i].style.borderColor = "#ccc";
            }
            target.style.borderColor = "#FF6701";
        }
    }

    var price = document.getElementsByClassName("h_pri");
    var g_buy = now;
    for(var i=0;i<price.length;i++){
        if(i!=0){
            g_buy = g_buy*0.95;
        }
        price[i].innerHTML = parseInt(g_buy);
    }

    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    a.innerHTML = pre;
    b.innerHTML = now;
    c.innerHTML = pre - now;
    d.innerHTML = _name;

    var size = document.getElementsByClassName("h_size")[0];
    var color = document.getElementsByClassName("h_color")[0];
    var span_1 = size.getElementsByTagName("span");
    var span_2 = color.getElementsByTagName("span");
    size.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "h_ox"){
            for(var i=2;i<span_1.length;i++){
                span_1[i].style.border = "1px solid #E0E0E0";
                span_1[i].children[0].style.display = "none";
            }
            target.style.border = "1px solid #FF4500";
            target.children[0].style.display = "block";
        }
    }
    color.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "h_ox"){
            for(var i=2;i<span_1.length;i++){
                span_2[i].style.border = "1px solid #E0E0E0";
                span_2[i].children[0].style.display = "none";
            }
            target.style.border = "1px solid #FF4500";
            target.children[0].style.display = "block";
        }
    }

    var qty = document.getElementById("h_qty");
    var e = document.getElementById("e");
    var f = document.getElementById("f");
    var g = document.getElementById("g");
    var sum = 0;
    var price = now;
    e.innerHTML = now;
    f.innerHTML = "1 = ";
    g.innerHTML = now * 1;
    sum = g.innerHTML*1;
    qty.oninput = function(){
        var num = qty.value;
        if(num<0){
            qty.value = 0;
            num = 0;
        }else if(num<5){
            price = now;
        }else if(num>=5&&num<10){
            price = parseInt(now*0.95);
        }else if(num>=10&&num<20){
            price = parseInt(now*0.95*0.95);
        }else if(num>=20){
            price = parseInt(now*0.95*0.95*0.95);
        }
        f.innerHTML = num + " = ";
        g.innerHTML = price*num;
        e.innerHTML = price;
        sum = g.innerHTML*1;
    }
     
    // var carlist = [];   
    var size = 0;
    // var color = 0;
    var tocar = document.getElementById("tocar");
    tocar.onclick = function(){
        var qty = f.innerHTML.slice(0,-3)*1;
        for(var i=2;i<span_1.length;i++){
            if(getComputedStyle(span_1[i]).border=="1px solid rgb(255, 69, 0)"){
                size = span_1[i].innerText.slice(0,-1)*1;
            }
        }
        // console.log(qty,_name,guid,pre,now,src,size,sum,price);

        var a = {guid:guid,name:_name,pre:pre,now:now,qty:qty,url:src,size:size,sum:sum,price:price};
        var _now = new Date();
        _now.setDate(_now.getDate()+7);

        var carlist = "";
        var _arr = document.cookie.split("; ");
        for(var i=0;i<_arr.length;i++){
            var aaa = _arr[i].split("=");
            if(aaa[0]=="carlist"){
                carlist = [];
                JSON.parse(aaa[1]).forEach(function(item){
                    if(a.guid==item.guid){
                        a.qty = a.qty + item.qty;
                    }else{
                        carlist.push(item);
                    } 
                });
                carlist.unshift(a);
            }
        }
        if(carlist==""){
            var bbb = [];
            bbb.unshift(a);
            carlist = bbb;
        }
        
        // console.log(carlist);
        document.cookie = "carlist=" + JSON.stringify(carlist) + ";path=/;expires=" + _now;
        // console.log(document.cookie);
        changeCarList();
    }
}
h_goods();

function h_run(){
    var left = document.querySelector(".h_toward");
    var right = document.querySelectorAll(".h_toward")[1];
    var box = document.querySelector("#h_qq");
    var img = box.querySelectorAll("img");
    var ul = box.querySelector("ul");
    right.onclick = function(){
        var l = getComputedStyle(ul).left;
        ul.style.left = parseInt(l)==-370 ? "0px" : "-370px";
    }
    left.onclick = function(){
        var l = getComputedStyle(ul).left;
        ul.style.left = parseInt(l)==0 ? "-370px" : "0px";
    }
    box.onclick = function(e){
        var pic = document.createElement("img");
        var div = document.getElementById("h_gg");
        var l = getComputedStyle(ul).left;
        if(e.target.tagName.toLowerCase() == "img"){
            pic.src = e.target.src;
            div.innerHTML = "";
            div.appendChild(pic);
            for(var i=0;i<img.length;i++){
                if(e.target==img[i]){
                    for(var j=0;j<img.length;j++){
                        img[j].style.borderColor = "#ccc";
                    }
                    e.target.style.borderColor = "#FF6701";
                    break;
                }
            }
            // console.log(i);
            ul.style.left = -(i-2)*74+"px";
            // console.log(-(i-2)*74);
            var _l = -(i-2)*74;
            if(i<=4){
                ul.style.left = _l>0 ? "0px" : _l+"px";
            }else if(i>5){
                ul.style.left = _l<-370 ? "-370px" : _l+"px";
            }
        }
    }
}
h_run();