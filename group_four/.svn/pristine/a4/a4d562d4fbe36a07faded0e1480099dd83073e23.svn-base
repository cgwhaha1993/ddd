function h_main(a,b){
    var z=1;
    var flag = true;
    var change = 1;
    function setPage(sum){
        var page = document.querySelector("#h_page");
        var mmp = document.querySelector("#h_mmp");
        page.innerHTML = "";
        mmp.innerHTML = "";
        var pageNum = Math.ceil(sum/20);
        for(var i=0;i<pageNum+2;i++){
            if(i==0){
                page.innerHTML += `<li><a>&lt;</a></li>`;
            }else if(i==pageNum+1){
                page.innerHTML += `<li><a>Next<span class="iconfont">&#xe610;</span></a></li>`
            }else{
                page.innerHTML += `<li><a>${i}</a></li>`;
            }
        }
        var _mmp = page.cloneNode(true);
        mmp.appendChild(_mmp);
        var a = page.querySelectorAll("a");
        var _a = mmp.querySelectorAll("a");
        for(var i=0;i<a.length;i++){
            a[i].style.cursor = "pointer";
            _a[i].style.cursor = "pointer";
        }
        // console.log(z);
        a[z].style.color = "rgb(255, 84, 0)";
        _a[z].style.color = "rgb(255, 84, 0)";
        page.onclick = function(e){
            if(e.target.tagName.toLowerCase()=="a"){
                for(var i=0;i<a.length;i++){
                    if(getComputedStyle(a[i]).color == "rgb(255, 84, 0)"){
                        var num = a[i].innerHTML*1;
                        break;
                    }
                }
                if(e.target.innerHTML == "&lt;"&&num!=1){
                    clearColor();
                    z = num-1;
                    xhr(num-1);
                }else if(e.target == a[a.length-1]&&num!=pageNum){
                    clearColor();
                    z = num + 1;
                    xhr(num+1);
                }else{
                    if(!isNaN(e.target.innerHTML*1)&&e.target.innerHTML*1!=z){
                        clearColor();
                        z = e.target.innerHTML*1;
                        xhr(z);
                    }
                }
            }
        }
        mmp.onclick = function(e){
            if(e.target.tagName.toLowerCase()=="a"){
                for(var i=0;i<_a.length;i++){
                    if(getComputedStyle(_a[i]).color == "rgb(255, 84, 0)"){
                        var num = _a[i].innerHTML*1;
                        break;
                    }
                }
                if(e.target.innerHTML == "&lt;"&&num!=1){
                    clearColor();
                    z = num-1;
                    xhr(num-1);
                }else if(e.target == _a[_a.length-1]&&num!=pageNum){
                    clearColor();
                    z = num + 1;
                    xhr(num+1);
                }else{
                    if(!isNaN(e.target.innerHTML*1)&&e.target.innerHTML*1!=z){
                        clearColor();
                        z = e.target.innerHTML*1;
                        xhr(z);
                    }
                }
            }
        }
        function clearColor(){
            for(var i=0;i<a.length;i++){
                a[i].style.color = "none";
            }
        }
    }
    

    function xhr(num){
        var total = document.querySelector("#h_total");
        var xhr = new XMLHttpRequest();
        var pageNo = num ? num : 1;
        xhr.onreadystatechange = function(){
            if(xhr.readyState===4&&(xhr.status===200||xhr.status===304)){
                // console.log(xhr.responseText);
                var arr = JSON.parse(xhr.responseText).data;
                // console.log(arr);
                var sum = JSON.parse(xhr.responseText).sum;
                total.innerHTML = sum;
                setGoods(arr);
                setPage(sum);
            }  
        }
        
        if(change==1){
            xhr.open("get","../api/goods.php?pageSum=20&pageNo="+pageNo,true);
            xhr.send();
        }else{
            // console.log(change);
            xhr.open("get","../api/goods.php?pageSum=20&pageNo="+pageNo+"&change="+change,true);
            xhr.send();
        }
        
        
    }
    xhr();
    function setGoods(arr){
        var box = document.getElementById("h_main");
        var date = document.getElementById("date");
        var price = document.getElementById("price");
        
        box.innerHTML = "";
        // if(a){
        //     arr = a;
        //     box.innerHTML = "";
        // }
        // if(b==false){
        //     flag = b;
        // }
        price.onclick = function(){
            var arrow = document.getElementById("arrow");
            
            if(flag){
                date.style.color = "#000";
                price.style.color = "#FF5400";
                arrow.innerHTML = "&#xe612;";
                flag = false;
                change = 3;
                // var a = arr.sort(function(a,b){
                //     return b.now - a.now;
                // });   
            }else{
                arrow.innerHTML = "&#xe65c;";
                flag = true;
                change = 4;
                // var a = arr.sort(function(a,b){
                //     return a.now - b.now;
                // });
                
            }
            var xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(xhr.status===200||xhr.status===304){
                    // console.log(JSON.parse(xhr.responseText));
                    setGoods(JSON.parse(xhr.responseText),flag); 
                }
            }
            xhr.open("get","../api/Pzgoods.php?pageSum=20&pageNo="+z+"&change="+change,true);
            xhr.send();      
        }
        for(var i=0;i<arr.length;i++){
            var div = document.createElement("div");
            var img = document.createElement("img");
            var input = document.createElement("input");
            var p_1 = document.createElement("p");
            var span_1 = document.createElement("span");
            var span_2 = document.createElement("span");
            var p_2 = document.createElement("p");
            var a_1 = document.createElement("a");
            var a_2 = document.createElement("a");
            var a_3 = document.createElement("a");
            var p_3 = document.createElement("p");
            var span_3 = document.createElement("span");

            img.src = arr[i].url;
            input.type = arr[i].type;
            span_1.innerHTML = "USD "+arr[i].pre;
            span_2.innerHTML = "USD "+arr[i].now;
            p_2.innerHTML = "save USD "+(arr[i].pre-arr[i].now);
            a_2.innerHTML = arr[i].name;
            // a_1.target = "_blank";
            // a_2.target = "_blank";

            var a_name = arr[i].name.replace(/&/g,"!");

            a_1.href = "goods.html?name="+encodeURI(a_name)+"&url="+arr[i].url+"&pre="+encodeURI(arr[i].pre)+"&now="+encodeURI(arr[i].now)+"&sale="+arr[i].sale+"&guid="+arr[i].guid;
            a_2.href = "goods.html?name="+encodeURI(a_name)+"&url="+arr[i].url+"&pre="+arr[i].pre+"&now="+arr[i].now+"&sale="+arr[i].sale+"&guid="+arr[i].guid;
            a_3.innerHTML = arr[i].sale;
            a_3.href = "#";
            span_3.innerHTML = "&#xe610;";
            span_3.className = "iconfont";

            a_3.appendChild(span_3);
            p_3.appendChild(a_3);
            p_3.appendChild(span_3);
            a_1.appendChild(img);
            p_1.appendChild(span_1);
            p_1.appendChild(span_2);
            div.appendChild(a_1);
            div.appendChild(input);
            div.appendChild(a_2);
            div.appendChild(p_1);
            div.appendChild(p_2);
            div.appendChild(p_3);
            box.appendChild(div);     
        }
    }
    var toTop = document.getElementById("toTop");
    window.onscroll = function(){
        if(window.scrollY>=200){
            toTop.style.display = "block";
        }else{
            toTop.style.display = "none";
        }
    }
    toTop.onclick = function(){
        var timer = setInterval(function(){
            if(window.scrollY<=0){
                clearInterval(timer);
            }
            scrollBy(0,-130);
        },30);
    }
}
h_main();
function h_tocar(){
    document.addEventListener("DOMContentLoaded",()=>{
        var main = document.querySelector("#h_main");
        var lyh = document.querySelector("#lyh");
        var inp = main.querySelectorAll("input");
        var car = document.querySelector(".shop_car");
        var li = document.querySelector(".g_car_items");
        main.onclick = function(e){
            if(e.target.tagName.toLowerCase()=="input"&&e.target.checked){
                var div = e.target.parentNode;
                var img = e.target.parentNode.querySelector("img");
                var _img = img.cloneNode();
                _img.style.position = "absolute";
                _img.style.display = "block";
                _img.style.left = img.offsetLeft + "px";
                _img.style.top = img.offsetTop + "px";
                main.appendChild(_img);
                animate(_img,{"left":li.offsetLeft-lyh.offsetLeft,"top":-130,"width":10,"height":10},function(){
                    main.removeChild(_img);
                });  
            }
        }
    });
}
h_tocar();

