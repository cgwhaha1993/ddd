/* 
* @Author: 周洲
* @Date:   2017-08-04 19:57:58
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-08 21:57:54
*/
var zz_arr1 = [{num:"1.",new:"MY SHOPPING CART"},{num:"2.",new:"SHIPPING"},{num:"3.",new:"PAYMENT"},{num:"4.",new:"ORDER SUCCESSFUL"}];
var zz_dv1 = document.getElementById('zz_dv1');
var zz_dv2 = document.getElementById('zz_dv2');
var zz_dv3 = document.getElementById('zz_dv3');
var zz_dv4 = document.getElementById('zz_dv4');

var btnClear = document.getElementById('btnClear');
var cartList = document.getElementById('cartList');
var subPrice = document.getElementsByClassName('subPrice')[0];

zz_arr1.forEach(function(item){
    // console.log(typeof item.num);
    var z_h3 = document.createElement('h3');
    z_h3.innerHTML = item.num ;
    // console.log(z_h3)
    zz_dv1.appendChild(z_h3);
    var z_span = document.createElement('span');
    z_span.innerHTML = item.new;
    z_h3.appendChild(z_span);
    // console.log(888)  
});
var zz_good5 = document.getElementById('zz_good5');
var zz_good6 = document.getElementById('zz_good6');

// console.log(zz_good5)
var zz_ul = document.createElement('ul')
var zz_arr2 = [
                 {
                    imgurl:"../images/z2.png",
                    name:"Louis Vuitton Monogram Ver...",
                    price:"$2455.00",
                    sale:"225.99",
                    save:"py6."
                },
                 {
                    imgurl:"../images/z3.png",
                    name:"Louis Vuitton Peqase Ardos...",
                    price:"$2455.00",
                    sale:"225.99",
                    save:"py6."
                },
                 {
                    imgurl:"../images/z4.png",
                    name:"Louis Vuitton Damier Canva...",
                    price:"$2455.00",
                    sale:"225.99",
                    save:"py6."
                },
                 {
                    imgurl:"../images/z5.png",
                    name:"Louis Vuitton Monogram Ver...",
                    price:"$2455.00",
                    sale:"225.99",
                    save:"py6."
                },
                 {
                    imgurl:"../images/z6.png",
                    name:"Louis Vuitton Monogram Ver...",
                    price:"$2455.00",
                    sale:"225.99",
                    save:"py6."
                },
                 {
                    imgurl:"../images/z7.png",
                    name:"Omeqa Seamaster Aqua Terra...",
                    price:"$2455.00",
                    sale:"225.99",
                    save:"py6."
                }
            ]
            //封装函数
            function sum(){
                var z_res = zz_arr2.map(function(item){
                    return '<li data-guid="'+item.guid+'">'
                                    + '<img src="'+item.imgurl+'">'
                                    + '<h4>'+item.name+'</h4>'
                                    + '<p class="price1"><del>'+item.price+'</del></p>'
                                    + '<p class="price2"><span>'+item.sale+'</span>'+'<span>'+item.save+'</span></p>'
                                + '</li>'
                }).join('');
                return z_res
            }
zz_ul.innerHTML = sum();
zz_dv2.appendChild(zz_ul);
// 给zz_dv2下的h4的每一项添加一个鼠标移动上去时的高亮事件
zz_ul.onmouseover=function(event){
// 事件委托获得h4
    event = event|| window.event;
    var target = event.target||srcElement;
    // console.log(target.children)
    // console.log(target.tagName)
    if(target.tagName.toLowerCase()==='h4'){
        target.className ='active';
    }
}
//给zz_dv2下的h4的每一项添加一个鼠标移走时的去掉高亮事件
zz_ul.onmouseout=function(e){
    event = event|| window.event;
    var target = event.target||srcElement;
    if(target.tagName.toLowerCase()==='h4'){
        target.className ='act';
    }
}
zz_good5.onclick=function(item){
    // console.log(item)
    // 删除ul的第一项放到数组最后一项
    zz_arr2.push(zz_arr2.shift(0));
    // zz_good5.style.cursor = 'hand'
    console.log(zz_arr2);
    zz_ul.innerHTML = sum();
    zz_dv2.appendChild(zz_ul);
    // zz_arr2.push(new_zz_arr2.push(zz_arr2.shift(0)));
    // zz_dv2.innerHTML=new_zz_arr2;
}
zz_good6.onclick=function(item){
    // console.log(item)
    // 删除ul中li的最后一项
    zz_arr2.unshift(zz_arr2.pop(0));
    console.log(zz_arr2);
    // zz_good6.style.cursor = 'hand'
    zz_ul.innerHTML = sum();
    zz_dv2.appendChild(zz_ul);
}
//鼠标移上去变小手
zz_good5.onmouseover=function(){
    zz_good5.style.cursor = 'pointer'
    };
zz_good6.onmouseover=function(){
    zz_good6.style.cursor = 'pointer'
};


var zz_arr3 = ['Quantity','Price','Total Price','Remove'];
var zz_ul1 = document.createElement('ul');
zz_arr3.forEach(function(item){
    var zz_li = document.createElement('li');
    zz_ul1.innerHTML += '<li>'+item+'</li>'
});
zz_dv3.appendChild(zz_ul1);



//模拟cookie
var zz_goodslist = [
                {
                    "imgurl":"../images/z2.png",
                    "name":"Gucci Dressage Original GG Canvas Tote Bag 296850 Coffe",
                    "ID":"#24234",
                    "Size":"Dafault",
                    "price":189.93,
                    "sale":120.69,
                    "save":"You save 69.24 py6.",
                    "guid":"goo1",
                    "qty":1
                },
                {
                    "imgurl":"../images/z3.png",
                    "name":"Gucci Dressage Original GG Canvas Tote Bag 296850 Coffe",
                    "ID":"#24234",
                    "Size":"Dafault",
                    "price":698.28,
                    "sale":600.23,
                    "save":"You save 89.05 py6.",
                    "guid":"goo2",
                    "qty":1
                },
                {
                    "imgurl":"../images/z4.png",
                    "name":"Gucci Dressage Original GG Canvas Tote Bag 296850 Coffe",
                    "ID":"#24234",
                    "Size":"Dafault",
                    "price":1896,
                    "sale":1209,
                    "save":"You save 687.00 py6.",
                    "guid":"goo3",
                    "qty":1
                }
            ]
            //zz_dv4,商品信息
// var goodslist = document.getElementsByClassName('goodslist')[0];
var zz_ul2 =document.createElement('ul');
// var qty = 0;
 zz_ul2.innerHTML = zz_goodslist.map(function(item){
    return '<li data-guid='+item.guid+'>'
        + '<img src="'+item.imgurl+'">'
        + '<h4>'+item.name+'</h4>'
        + '<span>'+item.ID+'</span>' 
        + '<span>Size:'+item.Size+'</span>' 
        + '<p class="price1"><del>'+item.price+' py6.</del></p>'
        + '<p class="price2"><span>'+item.sale+' py6.</p>'
        + '<p class="price3"><span>You save '+(item.price-item.sale).toFixed(2)+' py6.</p>'
        +'<button class="button">x</button>'
        +'<span><button class="movecart">-</button>'+item.qty+'<button class="addcart">+</button></span>'
        + '</li>';
}).join('') ;
 zz_dv4.appendChild(zz_ul2);
 // 添加到购物车
 // console.log(zz_goodslist)
 zz_dv2.onclick = function(ee){
     ee = ee || window.event;
     var target = ee.target || ee.srcElement;
     // console.log(target.parentNode.previousSibling.children[2].children[0].childNodes)
     if(target.className === 'add'){
         var currentLi = target.parentNode.previousSibling.children[2].children[0].childNodes;
        console.log(666,currentLi,zz_goodslist)
         // 判断cookie中是否已经存在当前商品
         // var res
         for(var i=0;i<zz_goodslist.length;i++){
                 zz_goods ={
                    guid:guid,
                    img:currentLi[i].children[0].src,
                    name:currentLi[i].children[1].innerText,
                    ID:currentLi[i].children[2].innerText,
                    Size:currentLi[i].children[3].innerText,
                    price:currentLi[i].children[4].children[0].innerText,
                    sale:currentLi[i].children[5].children[0].innerText,
                    save:currentLi[i].children[6].children[0].innerText,
                    qty:1
                }
            console.log(zz_goods,989898)
            for(var j =0;j<=currentLi.length-1;j++){
                // console.log(111,currentLi[j])
                var guid = currentLi[j].getAttribute('data-guid');
                // console.log(guid)    
                // _goodslist中不存在当前商品
                if(i===zz_goodslist.length){
                   // console.log(444,guid,currentLi[j])
                    zz_goodslist.push(zz_goods);
                    }
            if(zz_goodslist[i].guid === guid){
        // console.log(zz_goodslist[i,7777])
                 zz_goodslist[i].qty++;
                 break;
             }   
            }
         }
            console.log(zz_goods,987)
            // zz_goodslist.push(res);
                    document.cookie = 'zz_goods=' + JSON.stringify(zz_goods);
                    // console.log(zz_goods);
                    var now = new Date();
                    now.setDate(now.getDate()+7);
                    document.cookie = 'zz_goods=' + JSON.stringify(zz_goods);
         }
     }


    var cookies =document.cookie;

  //获取cookie内的内容
  var _goodslist = zz_goodslist;
  if(document.cookie('cartlist')!=''){
      _goodslist = JSON.parse(document.cookie('cartlist'));       
  }
  zz_dv4.innerHTML = '';
 // console.log(zz_goods);
 // 查看是不是有cookie
// var cookies =document.cookie;
var zz_carlist = [];
if(cookies.length>0){
    //变成数组
    cookies = cookies.split(', ');//,（逗号）后面有个空格
    // console.log(cookies)
    cookies.forEach(function(item){
        var zz_arr_1 = item.split('=');
        // console.log(zz_arr_1)
        if(zz_arr_1[0]==='zz_goods'){
            zz_carlist= JSON.parse(zz_arr_1[1]);
        }
    })
}
zz_dv4.onclick=function(et){
   et = et || window.event;
   var target = et.target || et.srcElement;
   // console.log(target.className);
   // console.log(999)
    if(target.className=='movecart'){
       var guid = target.parentNode.parentNode.getAttribute('data-guid');
       _goodslist.forEach(function(item,idx){      
        if(item.guid==guid){
            if(item.qty>0){
            item.qty--;
            }
            if(item.qty==0){
                _goodslist.splice(idx,1);
            }                                
        }
       })
       document.cookie = 'cartlist='+JSON.stringify(_goodslist)+';expires='+now.toUTCString();
       zz_dv4.innerHTML = '';
       addcar(_goodslist);
   }
       if(target.className=='addcart'){
       var guid = target.parentNode.parentNode.getAttribute('data-guid');
       _goodslist.forEach(function(item){
        if(item.guid==guid){
            item.qty++;
        }
       })
       document.cookie = 'cartlist='+JSON.stringify(_goodslist)+';expires='+now.toUTCString();
       zz_dv4.innerHTML = '';
       addcar(_goodslist);
    }
}

// // console.log(zz_goods);
// // total()
    // total();

   // 判断当前cookie里是否有该商品,商品删除
   // 事件委托删除cookie跟DOM节点
   zz_ul2.onclick=function(evt){
    // console.log(zz_carlist)
       evt = evt || window.event;
       var target = evt.target||evt.srcElement;
       // console.log(target.tagName)
       // console.log(555)
       if(target.className.toLowerCase() === 'button'){
           var currentLi = target.parentNode;
           var guid = currentLi.getAttribute('data-guid');
           // console.log(guid);
           //删除cookie,并重写           
           //zz_carlist为obj，要转为数组
       // console.log((JSON.stringify(zz_carlist)).split(','))
       // console.log(zz_carlist)
       var zz_new_carlist =(JSON.stringify(zz_carlist)).split('; ');
       //  var zz_new_carlist=[];
       // for(var attr in zz-carlist){
       //      zz_new_carlist[attr]=zz_carlist[attr]
       // }
       // console.log(zz_new_carlist)
       console.log(zz_new_carlist)

            zz_new_carlist.forEach(function(item,idx){
                console.log(item.guid)
               if(item.guid === guid){
                    console.log(zz_new_carlist);
                    zz_carlist.splice(idx,1)
               }
               target.parentNode.remove('zz_carlist');
               // console.log(zz_new_carlist)
           });
       }
             
   }
   // 清空购物车
   var zz_dv5 =document.getElementById('zz_dv5');
       zz_dv5.onclick = function(e){
            e = e || window.event;
            var target = e.target||e.srcElement;
            console.log(target,9999)
            console.log(target.parentNode.parentNode)
            if(target.className === 'btnClear'){
                console.log(888)
            target.parentNode.previousSibling.remove('zz_dv4');
            zz_dv4.innerHTML='';
            subPrice.innerHTML='总计:'+'0.00';
        }
       }
// 计算总价格
function total(){
    var zz_res = 0;
    var zz_ul3=document.createElement('ul');
    ul.innerHTML = zz_goodslist.map(function(item){
        zz_res += item.sale*item.qty;
        return '<li data-guid="'+item.guid+'">'
                        + '<img src="'+item.imgurl+'">'
                        + '<h4>'+item.name+'</h4>'
                        + '<p class="price1"><del>'+item.price+'</del></p>'
                        + '<p class="price2"><span>'+item.sale+'</span>'+'<span>'+item.save+'</span></p>'
                    + '</li>'  
    }).join('');
    zz_dv5.innerHTML='';
    zz_dv5.appendChild(ul);
    subPrice.innerHTML = 'Cart Total：'+zz_res.toFixed(2);
}
