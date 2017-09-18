function h_index(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&(xhr.status===200||xhr.status===304)){
            // console.log(xhr.responseText);
            var arr = JSON.parse(xhr.responseText);
            abc(arr);
        }
    }
    xhr.open("get","api/lyh_index.php",true);
    xhr.send();
    function abc(arr){
        var box = document.querySelector(".h_main");
        for(var i=0;i<arr.length;i++){
            var div = document.createElement("div");
            var img = document.createElement("img");
            // var input = document.createElement("input");
            var p_1 = document.createElement("p");
            var span_1 = document.createElement("span");
            var span_2 = document.createElement("span");
            var p_2 = document.createElement("p");
            var a_1 = document.createElement("a");
            var a_2 = document.createElement("a");
            var a_3 = document.createElement("a");
            var p_3 = document.createElement("p");
            var span_3 = document.createElement("span");

            img.src = arr[i].url.replace("../","");
            // input.type = arr[i].type;
            span_1.innerHTML = "USD "+arr[i].pre;
            span_2.innerHTML = "USD "+arr[i].now;
            p_2.innerHTML = "save USD "+(arr[i].pre-arr[i].now);
            a_2.innerHTML = arr[i].name;
            // a_1.target = "_blank";
            // a_2.target = "_blank";

            var a_name = arr[i].name.replace(/&/g,"!");

            a_1.href = "html/goods.html?name="+encodeURI(a_name)+"&url="+arr[i].url+"&pre="+encodeURI(arr[i].pre)+"&now="+encodeURI(arr[i].now)+"&sale="+arr[i].sale+"&guid="+arr[i].guid;
            a_2.href = "html/goods.html?name="+encodeURI(a_name)+"&url="+arr[i].url+"&pre="+arr[i].pre+"&now="+arr[i].now+"&sale="+arr[i].sale+"&guid="+arr[i].guid;
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
            // div.appendChild(input);
            div.appendChild(a_2);
            div.appendChild(p_1);
            div.appendChild(p_2);
            div.appendChild(p_3);
            box.appendChild(div);     
        }
    }
}
h_index();