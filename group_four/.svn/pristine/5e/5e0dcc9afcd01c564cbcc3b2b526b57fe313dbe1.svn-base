(function(){

    var btn1=document.getElementsByClassName("icon-jiajian-")[0];
    var btn2=document.getElementsByClassName("icon-jiajian-")[1];
    var btn3=document.getElementsByClassName("icon-jiajian-")[2];
    var height1=document.getElementsByClassName("w_left1_1")[0];
    var height2=document.getElementsByClassName("w_left1_1")[1];
    var height3=document.getElementsByClassName("w_left1_1")[2];
    var i1=document.getElementsByClassName("i1")[0];
    var i2=document.getElementsByClassName("i1")[1];
    var i3=document.getElementsByClassName("i1")[2];
    btn1.onclick=function(){
        if(height1.style.display==""||height1.style.display=="block"){
            height1.style.display="none";
            i1.className="iconfont icon-jiajian-1";
        }else{
            height1.style.display="block";
            i1.className="iconfont icon-jiajian-";
        }
    }
    btn2.onclick=function(){
        if(height2.style.display==""||height2.style.display=="block"){
            height2.style.display="none";
            i2.className="iconfont icon-jiajian-1";
        }else{
            height2.style.display="block";
            i2.className="iconfont icon-jiajian-";
        }
    }
    btn3.onclick=function(){
        if(height3.style.display==""||height3.style.display=="block"){
            height3.style.display="none";
            i3.className="iconfont icon-jiajian-1";
        }else{
            height3.style.display="block";
            i3.className="iconfont icon-jiajian-";
        }
    }
    var arr = [
        {
            name:'Decent Module Case Silicone Skin Cover ...',
            list:4998,
            our:3892,
            imgurl:'../images/0.png'

        },
        {
            name:'Decent Module Case Silicone Skin Cover ...',
            list:498,
            our:382,
            imgurl:'../images/1.png'
        },
        {
            name:'Decent Module Case Silicone Skin Cover ...',
            list:998,
            our:892,
            imgurl:'../images/2.png'
        }
    ];
    for(var i=0;i<arr.length;i++){
        arr[i].save=arr[i].list-arr[i].our;
        // console.log(arr[i]);
    }
    var goodslist=document.getElementById("goodslist");
    
    for(var i=0;i<arr.length;i++){
        var div=document.createElement("div");
        var ul =document.createElement("ul");
        var li =document.createElement("li");
        //图片
        var img=document.createElement("img");
        var a=document.createElement("a");
        img.src=arr[i].imgurl;
        a.target = '_blank';
        a.href='html/weidatail.html?name='+encodeURI(arr[i].name)+'&list='+encodeURI(arr[i].list)+'&our='+encodeURI(arr[i].our)+'&imgurl='+encodeURI(arr[i].imgurl)+'&save='+encodeURI(arr[i].save)+'';//注意分号的使用，里面不用引号
        li.appendChild(a);
        a.appendChild(img);
        ul.appendChild(li);

        //名字
        var title=document.createElement("h4");
        title.innerHTML=arr[i].name;
        // var txt=document.createTextNode(arr[i].name);
        // title.appendChild(txt);
        li.appendChild(title);
        //列表价格
        var list=document.createElement("p");
        list.className="list";//创建一个类，方便写span的样式
        list.innerHTML="List Price：$<span>"+arr[i].list+"</span>";
        li.appendChild(list);
        //our
        var our=document.createElement("p");
        our.className="our";
        our.innerHTML="Our Price：$<span>"+arr[i].our+"</span>";
        li.appendChild(our);
        //save
        var save=document.createElement("p");
        save.className="save";
        save.innerHTML="<span>Save:$"+arr[i].save+"</span>";
        li.appendChild(save);
         div.appendChild(ul);
        goodslist.appendChild(div);
    }
    // div.appendChild(ul);
    // goodslist.appendChild(div);
})();