/* 
* @Author: 陈文贵
* @Date:   2017-08-12 09:50:52
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-26 09:31:49
*/
document.addEventListener('DOMContentLoaded',()=>{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&(xhr.status===200||xhr.status===304)){
            var g_goods_arr = JSON.parse(xhr.responseText);
            abc(g_goods_arr);
        }
    }
    xhr.open("get","api/idx_imgs.php",true);
    xhr.send();
    let g_goods = document.querySelector('.g_goods');
    function abc(g_goods_arr){
        for(let item of g_goods_arr){
            let a = document.createElement('a');
            a.dataset.gid = item.gid;
            a.href = item.href;
            a.innerHTML = `
                            <i class="${item.src}">
                                <span class="g_mask_img"></span>
                            </i>
                            <div class="g_mes">
                                <h3>${item.title}</h3>
                                <p>${item.text1}</p>
                                <p>${item.text2}</p>
                            </div>
                        `;
            g_goods.appendChild(a);
            a.querySelector('.iconfont').style.color = item.color;
        }
    }
    


    //头部
    (function(){
        //登陆
        var g_hello = document.getElementsByClassName('g_test')[0];
        var cookies = document.cookie;
        if(cookies.length>0){
            cookies = cookies.split(';');
            cookies.forEach(function(item){
                var arr = item.split('=');
                if(arr[0]=='username'){
                    g_hello.innerText = arr[1];
                    return;
                }
            });
        }
        //退出登陆
        var sign_out = g_hello.nextElementSibling;
        sign_out.onclick = function(){
            var cookies = document.cookie;
            if(cookies.length>0){
                cookies = cookies.split('; ');
                cookies.forEach(function(item){
                    var arr = item.split('=');
                    if(arr[0]=='username'){
                        var now = new Date();
                        now.setDate(now.getDate()-7);
                        document.cookie = 'username=xx;path=/;expires='+now.toUTCString();
                        location.reload();
                        return;
                    }
                });
            }
        }
        //导航吸顶
        var nav_menu = document.getElementsByClassName('nav_menu')[0];
        var nav_menu_one = nav_menu.getElementsByClassName('nav_menu_one')[0];
        nav_menu_one.style.display = 'block';
        function logoFixed(len){
            document.onscroll = function(){
                if(window.scrollY>len){
                    nav_menu.className = 'nav_menu g_fl nav_fixed';
                    nav_menu.style.left = (window.innerWidth-17-980)/2 +'px';
                    window.onresize = function(){
                        nav_menu.style.left =  document.getElementsByClassName('g_m_r_inner')[0].offsetLeft- nav_menu.offsetWidth +'px';
                    }
                    // nav_menu_one.style.
                }else{
                    nav_menu.className = 'nav_menu g_fl';
                    nav_menu.style.left = '0px';
                }
            }
        }
        logoFixed(120);
        //顶部Account移入移出
        var account = document.getElementsByClassName('account')[0];
        var account_a = account.children[0];
        var account_list = account.getElementsByClassName('account_list')[0];
        var accountTimer;
        account.onmouseenter = function(){
            clearTimeout(accountTimer);
            account_list.style.display = 'block';
            account_a.className = 'g_hover';
        }
        account.onmouseleave = function(){
            accountTimer = setTimeout(function(){
                account_list.style.display = 'none';
                account_a.className = '';
            },600);
        }
        //热搜动态生成
        var g_top_b_arr = ['LV handbags','shoes','Rolex watch'];
        var g_top_b = document.getElementsByClassName('g_top_b')[0];
        function createHotSearch(arr){
            for(var i = 0;i < arr.length;i++){
                var a = document.createElement('a');
                a.href = '#';
                a.innerHTML = arr[i];
                g_top_b.appendChild(a);
            }
        }
        createHotSearch(g_top_b_arr);
        //模拟数据
        // var car_items_list_arr = [
        //     {
        //        src:'images/g_item1.png',
        //        des:'Lorem ipsum dolor, consectetur adipisicing',
        //        price:1266,
        //        num:1
        //     },
        //     {
        //        src:'images/g_item3.png',
        //        des:'Lorem dolor ipsum adipisicing,consectetur',
        //        price:896,
        //        num:1
        //     }
        // ];
        //  var g_car_items = document.getElementsByClassName('g_car_items')[0];
        //  var car_num = g_car_items.getElementsByClassName('g_num')[0];
        //  var car_total_price = g_car_items.getElementsByClassName('g_price')[0];
        //  car_num.innerHTML = 0;
        //  car_total_price.innerHTML = 0;
        // function createCarBox(arr){
        //     if(!arr.length){
        //         return;
        //     }
        //     var car_items_box = document.createElement('div');
        //     car_items_box.className = 'car_items_box';
        //     g_car_items.appendChild(car_items_box);
        //     var mask = document.createElement('span');
        //     mask.className = 'g_mask';
        //     car_items_box.appendChild(mask);
        //     var ul_list = document.createElement('ul');
        //     ul_list.className = 'car_items_list';
        //     car_items_box.appendChild(ul_list);
        //     var subtotal_price = 0;
        //     var g_num = 0;
        //     car_items_list_arr.forEach(function(item){
        //         subtotal_price+=item.price*item.num;
        //         g_num += item.num;
        //         var li = document.createElement('li');
        //         ul_list.appendChild(li);
        //         var left = document.createElement('div');
        //         left.className = 'g_item_left';
        //         li.appendChild(left);
        //         var img = document.createElement('img');
        //         img.src = item.src;
        //         left.appendChild(img);
        //         var right = document.createElement('div');
        //         right.className = 'g_item_right';
        //         li.appendChild(right);
        //         var p = document.createElement('p');
        //         right.appendChild(p);
        //         var des = document.createElement('a');
        //         des.href = '#';
        //         des.innerHTML = item.des;
        //         p.appendChild(des);
        //         var price = document.createElement('span');
        //         price.className = 'g_item_price';
        //         price.innerHTML = item.price;
        //         right.appendChild(price);
        //         var num = document.createElement('span');
        //         num.className = 'g_item_num';
        //         num.innerHTML = item.num;
        //         right.appendChild(num);
        //     });
        //     car_num.innerHTML = g_num;
        //     car_total_price.innerHTML = subtotal_price;
        //     var sub_total = document.createElement('div');
        //     car_items_box.appendChild(sub_total);
        //     var sub_total_text = document.createTextNode('Subtotal:');
        //     sub_total.appendChild(sub_total_text);
        //     var sub_total_span = document.createElement('span');
        //     sub_total_span.className = 'subtotal_price';
        //     sub_total_span.innerHTML = subtotal_price;
        //     sub_total.appendChild(sub_total_span);
        //     var check_out = document.createElement('div');
        //     car_items_box.appendChild(check_out);
        //     var check_out_span = document.createElement('a');
        //     check_out_span.href="html/good_car.html";
        //     check_out_span.className = 'check_out';
        //     check_out_span.innerHTML = 'Checkout';
        //     check_out.appendChild(check_out_span);
        //     var g_mask = g_car_items.getElementsByClassName('g_mask')[0];
        //     g_mask.style.width = g_car_items.offsetWidth+5+'px';
        // }
        //  createCarBox(car_items_list_arr);
        //购物车列表接收cookie动态生成
        function changeCarList(){
            var car_items_list_arr = [];
            var carlist_arr = [];
            var cookies = document.cookie;
            if(cookies.length>0){
                cookies = cookies.split('; ');
                cookies.forEach(function(item){
                    var arr = item.split('=');
                    if(arr[0] == 'carlist'){
                        carlist_arr = JSON.parse(arr[1]);
                    }
                });
            }
            carlist_arr.forEach(function(item){
                var obj = {};
                obj.src='images/'+item.url;
                obj.des=item.name;
                obj.price=item.price;
                obj.num=item.qty;
                car_items_list_arr.push(obj);
            });
             var g_car_items = document.getElementsByClassName('g_car_items')[0];
             var car_num = g_car_items.getElementsByClassName('g_num')[0];
             var car_total_price = g_car_items.getElementsByClassName('g_price')[0];
             car_num.innerHTML = 0;
             car_total_price.innerHTML = 0;
            function createCarBox(arr){
                if(!arr.length){
                    return;
                }
                var car_items_box = document.createElement('div');
                car_items_box.className = 'car_items_box';
                g_car_items.appendChild(car_items_box);
                var mask = document.createElement('span');
                mask.className = 'g_mask';
                car_items_box.appendChild(mask);
                var ul_list = document.createElement('ul');
                ul_list.className = 'car_items_list';
                car_items_box.appendChild(ul_list);
                var subtotal_price = 0;
                var g_num = 0;
                car_items_list_arr.forEach(function(item){
                    subtotal_price+=item.price*item.num;
                    g_num += item.num;
                    var li = document.createElement('li');
                    ul_list.appendChild(li);
                    var left = document.createElement('div');
                    left.className = 'g_item_left';
                    li.appendChild(left);
                    var img = document.createElement('img');
                    img.src = item.src;
                    left.appendChild(img);
                    var right = document.createElement('div');
                    right.className = 'g_item_right';
                    li.appendChild(right);
                    var p = document.createElement('p');
                    right.appendChild(p);
                    var des = document.createElement('a');
                    des.href = '#';
                    des.innerHTML = item.des;
                    p.appendChild(des);
                    var price = document.createElement('span');
                    price.className = 'g_item_price';
                    price.innerHTML = item.price;
                    right.appendChild(price);
                    var num = document.createElement('span');
                    num.className = 'g_item_num';
                    num.innerHTML = item.num;
                    right.appendChild(num);
                });
                car_num.innerHTML = g_num;
                car_total_price.innerHTML = subtotal_price;
                var sub_total = document.createElement('div');
                car_items_box.appendChild(sub_total);
                var sub_total_text = document.createTextNode('Subtotal:');
                sub_total.appendChild(sub_total_text);
                var sub_total_span = document.createElement('span');
                sub_total_span.className = 'subtotal_price';
                sub_total_span.innerHTML = subtotal_price;
                sub_total.appendChild(sub_total_span);
                var check_out = document.createElement('div');
                car_items_box.appendChild(check_out);
                var check_out_span = document.createElement('a');
                check_out_span.href="html/good_car.html";
                check_out_span.className = 'check_out';
                check_out_span.innerHTML = 'Checkout';
                check_out.appendChild(check_out_span);
                var g_mask = g_car_items.getElementsByClassName('g_mask')[0];
                g_mask.style.width = g_car_items.offsetWidth+5+'px';
            }
            createCarBox(car_items_list_arr);
        }  
        changeCarList();
        //购物车列表移入移出
        var g_car_items = document.getElementsByClassName('g_car_items')[0];
        var g_car_items_a = g_car_items.children[0];
        var g_car_items_list = g_car_items.children[1];
        if(g_car_items_list){
            var g_car_items_timer;
            g_car_items.onmouseenter = function(){
                clearTimeout(g_car_items_timer);
                g_car_items_a.className = 'shop_car g_hover';
                g_car_items_list.style.display = 'block';
            }
            g_car_items.onmouseleave = function(){
                g_car_items_timer = setTimeout(function(){
                    g_car_items_a.className = 'shop_car';
                    g_car_items_list.style.display = 'none';
                },600);
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
    })();
});

