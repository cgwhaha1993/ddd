/* 
* @Author: 陈文贵
* @Date:   2017-08-05 14:04:52
*/
(function(){
	 var reviews_enter = document.getElementById('reviews_enter');
	 var choose_stars = reviews_enter.getElementsByClassName('choose_stars')[0];
	 var stars = reviews_enter.getElementsByClassName('icon-xing1');
	 var customer_name = document.getElementById('customer_name');
	 var enter_content = document.getElementById('enter_content');
	 var share_pto = document.getElementById('share_pto');
	 var code_value = document.getElementById('code_value');
	 var code_btn = reviews_enter.getElementsByClassName('code_btn')[0];
	 var submit_btn = reviews_enter.getElementsByClassName('submit_btn')[0];
	 
	 // 评分：星级
	 var reviews_stars_num = 0;
	 //鼠标移入
	choose_stars.onmouseover = function(e){
		e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.tagName.toLowerCase()=='i'){
				var idx = target.getAttribute('data-idx');
				changeStars(stars,idx,'iconfont icon-xing1 star_light');
		}
	}
	//鼠标移出
	choose_stars.onmouseout = function(e){
		e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.tagName.toLowerCase()=='i'){
			changeStars(stars,reviews_stars_num,'iconfont icon-xing1 star_clicked');
		}
	}
	//鼠标点击
	choose_stars.onclick = function(e){
		e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.tagName.toLowerCase()=='i'){
			if(reviews_stars_num==1){
				reviews_stars_num = 0;
			}else{
				var idx = target.getAttribute('data-idx');
				reviews_stars_num = idx;
				changeStars(stars,idx,'iconfont icon-xing1 star_clicked');
			}
		}
	}
	//封装改变星星显示的方法：通过传入数组，数组下标，新类名实现
	function changeStars(arr,idx,newClass){
		for(var i = 0;i<arr.length;i++){
			if(i<idx){
				arr[i].className = newClass;
			}else{
				arr[i].className = 'iconfont icon-xing1 star_dark';
			}
		}
	}
	 //提交内容不成功的话，在输入不合法的地方相应提醒
	 //提交成功的话：
		 //将信息对象添加到评论数组中
		 //改变评论汇总和评论列表
		 //评论输入相关 初始化
	 var reviews_arr = [];
	 var revid = 1;
	 var reviews_enter = document.getElementById('reviews_enter');
	 var check_ress = reviews_enter.getElementsByClassName('check_res');
	 //点击提交按钮：检查各项输入;  若输入无误则改变上边对应的评论汇总和列表
	submit_btn.onclick = function(){
		var customer_name_v = customer_name.value;
		var enter_content_v = enter_content.value;
		var code_value_v = code_value.value;
		var code_btn_v = code_btn.innerText;
		for(var i = 0;i<check_ress.length;i++){
			check_ress[i].style.display = 'none';
		}
		if(reviews_stars_num == 0){
			check_ress[0].style.display = 'inline';
			return;
		}
		if(!customer_name_v.trim().length){
			check_ress[1].style.display = 'inline';
			return;
		}
		if(code_value_v.toLowerCase() != code_btn_v.toLowerCase()){
			check_ress[2].style.display = 'inline';
			code_btn.onclick();
			return;
		}
		var obj = {
			guid:'00009',
			revid:'000'+revid,
			revsup:0,
			revopp:0,
			starnums:reviews_stars_num,
			date:new Date().toLocaleDateString(),
			name:customer_name_v,
			text:filterText(enter_content_v),
			imgsrcs:fun_imgs_arr()
		};
		reviews_arr.push(obj);
		init_rev_enter();
		change_rev_total(reviews_arr);
		change_rev_list(reviews_arr,0,2);//0指的是数组下标；2以及以下的2指的都是每页显示多少条评论
		change_rev_pages(reviews_arr,2);
	}

	 //改变评论汇总
	 var reviews_total_l = document.getElementsByClassName('reviews_total_l')[0];
	 var l_stars = reviews_total_l.getElementsByClassName('icon-xing1');
	 var ratings_num = reviews_total_l.getElementsByClassName('ratings_num')[0].children[0];
	 var reviews_total_r = document.getElementsByClassName('reviews_total_r')[0];
	 var r_pro_inners = reviews_total_r.getElementsByClassName('pro_inner');
	 var r_star_nums = reviews_total_r.getElementsByClassName('star_num');
	 var top_stars = document.getElementsByClassName('w_xing')[0].getElementsByClassName('icon-xing1');
	 var top_rev_num = document.getElementsByClassName('w_xing')[0].getElementsByClassName('w_sp2')[0];
	 // console.log(top_stars,top_rev_num)
	function change_rev_total(arr){
		var total_rev_num = arr.length;
		var ave_rev_num = 0;
		var arr_levers = [0,0,0,0,0];
		arr.forEach(function(item){
			arr_levers[item.starnums-1]++;
		});
		ave_rev_num = Math.round(arr_levers.reduce(function(prev,cur,idx){
			return prev+cur*(1+idx);
		},0)/total_rev_num);
		ratings_num.innerText = total_rev_num;
		top_rev_num.innerText = total_rev_num;
		changeStars(l_stars,ave_rev_num,'iconfont icon-xing1 star_light');
		changeStars(top_stars,ave_rev_num,'iconfont icon-xing1 star_light');
		for(var i = 0;i<arr_levers.length;i++){
				r_star_nums[arr_levers.length-i-1].innerText = arr_levers[i];
				r_pro_inners[arr_levers.length-i-1].style.width = arr_levers[i]/total_rev_num*100+'%';
		}
	}
	 //改变评论列表
	 var reviews_list = document.getElementsByClassName('reviews_list')[0];
	 var rev_ul = reviews_list.children[0];
	 //显示对应页码的评论列表：idx指的是数组下标；len指的都是每页显示多少条评论
	function change_rev_list(arr,idx,len){
		var str = '';
		for(var k = idx;k<idx+len;k++){
		if(k>=arr.length){
			break;
		}
		var star_str = '';
		for(var i = 0;i<5;i++){
			 if(i<arr[k].starnums){
				star_str += '<i class="iconfont icon-xing1 star_light"></i>';
			 }else{
				star_str += '<i class="iconfont icon-xing1 star_dark"></i>';
			 }
		}
		var imgs_str = '';
		for(var i = 0;i<arr[k].imgsrcs.length;i++){
				imgs_str += '<img src="'+arr[k].imgsrcs[i]+'" height="48" width="48" />';
		}
		str+= '<li class="reviews_item g_clear" data-revid="'+arr[k].revid+'">'
				+'<div class="reviews_item_l g_fl">'
				+'<div class="review_stars">'
						+star_str
				+'</div>'
				+'<div class="review_date">'+arr[k].date+'</div>'
				+'<div class="review_test">'+arr[k].name+'</div>'
				+'<div class="review_view">'
				+'<span class="view_suppot"><i class="iconfont icon-zhichi0"></i>(<span class="suppot_num">'+arr[k].revsup+'</span>)</span>'
				+'<span class="view_oppo"><i class="iconfont icon-fandui"></i>(<span class="oppo_num">'+arr[k].revopp+'</span>)</span>'
				+'</div>'
				+'</div>'
				+'<div class="reviews_item_r g_fr">'
				+'<p>'+arr[k].text+'</p>'
				+imgs_str
				+'<div class="g_thanks"><i class="iconfont icon-icon164"></i><span>Thank you for rating</span></div>'
				+'</div>'
		 +'</li>'
		}
			// arr.forEach(function(item){
			// 		var star_str = '';
			// 		for(var i = 0;i<5;i++){
			// 			 if(i<item.starnums){
			// 					star_str += '<i class="iconfont icon-xing1 star_light"></i>';
			// 			 }else{
			// 					star_str += '<i class="iconfont icon-xing1 star_dark"></i>';
			// 			 }
			// 		}
			// 		var imgs_str = '';
			// 		for(var i = 0;i<item.imgsrcs.length;i++){
			// 				imgs_str += '<img src="'+item.imgsrcs[i]+'" height="48" width="48" />';
			// 		}
			// 		str+= '<li class="reviews_item g_clear" data-revid="'+item.revid+'">'
			// 						+'<div class="reviews_item_l g_fl">'
			// 								+'<div class="review_stars">'
			// 										+star_str
			// 								+'</div>'
			// 								+'<div class="review_date">'+item.date+'</div>'
			// 								+'<div class="review_test">'+item.name+'</div>'
			// 								+'<div class="review_view">'
			// 										+'<span class="view_suppot"><i class="iconfont icon-zhichi0"></i>(<span class="suppot_num">'+item.revsup+'</span>)</span>'
			// 										 +'<span class="view_oppo"><i class="iconfont icon-fandui"></i>(<span class="oppo_num">'+item.revopp+'</span>)</span>'
			// 								+'</div>'
			// 						+'</div>'
			// 						+'<div class="reviews_item_r g_fr">'
			// 								+'<p>'+item.text+'</p>'
			// 								+imgs_str
			// 								+'<div class="g_thanks"><i class="iconfont icon-icon164"></i><span>Thank you for rating</span></div>'
			// 						+'</div>'
			// 				 +'</li>'
			// });
			rev_ul.innerHTML = str;
	}
	 var pages_inner = document.getElementsByClassName('pages_inner')[0];
	 //显示分页栏：page_num指的都是每页显示多少条评论
	function change_rev_pages(arr,page_num){
 		var str = [];
 		switch(true){
			case arr.length>page_num*7&&arr.length<=page_num*8:
					str.unshift('<span>8</span>');
			case arr.length>page_num*6&&arr.length<=page_num*7:
					str.unshift('<span>7</span>');
			case arr.length>page_num*5&&arr.length<=page_num*6:
					str.unshift('<span>6</span>');
			case arr.length>page_num*4&&arr.length<=page_num*5:
					str.unshift('<span>5</span>');
			case arr.length>page_num*3&&arr.length<=page_num*4:
					str.unshift('<span>4</span>');
			case arr.length>page_num*2&&arr.length<=page_num*3:
					str.unshift('<span>3</span>');
			case arr.length>page_num&&arr.length<=page_num*2:
					str.unshift('<span>2</span>');
					str.push('<strong>Next<i class="iconfont icon-yousanjiaoxing-copy"></i></strong>')
			case arr.length<=page_num:
				 str.unshift('<span class="g_active">1</span>');
 		}
 		pages_inner.innerHTML = str.join('');
	}
	 //实现分页
	 var page_spans = pages_inner.getElementsByTagName('span');
	pages_inner.onclick = function(e){
 		e = e || window.event;
 		var target = e.target || e.srcElement;
 		var cur_idx = 0;
 		for(var i = 0;i<page_spans.length;i++){
			if(page_spans[i].className == 'g_active'){
					page_spans[i].className = '';
					cur_idx = i;
					break;
			}
 		}
 		if(target.tagName.toLowerCase() == 'span'){
			target.className = 'g_active';
			var idx = (target.innerText-1)*2;
			change_rev_list(reviews_arr,idx,2);
 		}else if(target.tagName.toLowerCase() == 'strong'||target.tagName.toLowerCase() == 'i'){
			if(cur_idx==page_spans.length-1){
				page_spans[cur_idx].className = 'g_active';
				return;
			}
			page_spans[cur_idx+1].className = 'g_active';
			change_rev_list(reviews_arr,(cur_idx+1)*2,2);
 		}else{
 			page_spans[cur_idx].className = 'g_active';
 		}
	}
	 //改变点赞/反对数量:  【未完善】
	rev_ul.onclick = function(e){
		e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.className == 'iconfont icon-zhichi0'||target.className == 'iconfont icon-fandui'){
			if(target.nextElementSibling.innerText == 0){
					target.nextElementSibling.innerText = 1;
			}else{
					target.nextElementSibling.innerText = 0;
			}
				// target.nextElementSibling.innerText = target.nextElementSibling.innerText*1 + 1;
				// var rewid = target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-revid');
				// console.log(rewid);
		}
	}
	 //评论输入相关 初始化
	function init_rev_enter(){
		revid++;
		reviews_stars_num=0;
		changeStars(stars,reviews_stars_num,'iconfont icon-xing1 star_clicked');
		customer_name.value = '';
		enter_content.value = '';
		code_value.value = '';
		code_btn.onclick();
	}
	 //评论过滤敏感字符
	 // enter_content.onchange = function(){
	 //    this.value = filterText(this.value);
	 // }
	 var filter_arr = ['fuck','shit','操','混蛋','日','垃圾','死','傻逼','tmd','你大爷','tm','他妈的','渣'];
	function filterText(str){
		var res = str;
		filter_arr.forEach(function(item){
			var reStr = '';
			for(var i = 0;i<item.length;i++){
				reStr+='*';
			}
			res = res.replace(new RegExp(item,'gi'),reStr);
		});
		return res;
	}
	 //生成随机验证码
	 code_btn.onclick = function(){
			this.innerText = randomCode(4);
	 }
	 code_btn.onclick();
	function randomCode(num){
			var res = '';
			for(var i = 0;i<num;i++){
				var code = Math.floor(Math.random()*75)+48;
				if(code>57&&code<65||code>90&&code<97){
					i--;
					continue;
				}
				res+=String.fromCharCode(code);
			}
			return res;
	}
	 //先阻止文件的上传(默认行为)
	 share_pto.onclick = function(e){
		e = e || window.event;
		e.preventDefault?e.preventDefault():e.returnValue = false;
	 }
		//以下是测试：随机生成一个图片地址数组
	function fun_imgs_arr(){
		var imgs_arr = [];
		var len = Math.ceil(Math.random()*5);
		var arr = [];
		for(var i = 0;i<len;i++){
			var index =  Math.ceil(Math.random()*4)+1;
			if(arr.indexOf(index) == -1){
					arr.push(index);
					imgs_arr.push('../images/g_review_'+index+'.png');
			}
				// }else{//可能会占CPU导致浏览器崩溃
				// 	i--;
				// }
		}
		return imgs_arr;
	}
})();
