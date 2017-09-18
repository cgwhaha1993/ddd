/* 
* @Author: 陈文贵
* @Date:   2017-08-19 09:52:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-21 21:16:10
*/
(function(){
    // 登陆部分
    var sig_box = document.querySelector('.sign_in_box');
    var sig_tip = sig_box.querySelector('.sig_tip');
    var s_username = sig_box.querySelector('#s_username');
    var s_password = sig_box.querySelector('#s_password');
    var s_code = sig_box.querySelector('#s_code');
    var code_text = sig_box.querySelector('.code_text');
    var code_btn = sig_box.querySelector('.code_btn');
    var sig_btn = sig_box.querySelector('.sig_btn');
    var isSig = false;
    s_username.onblur = ()=>{
        if(s_username.value.trim()==""){
            sig_tip.innerText = '请填写账户名';
            sig_tip.style.visibility = 'visible';
            isSig = false;
        }else{
            sig_tip.style.visibility = 'hidden';
            s_password.focus();
            isSig = true;
        }
    };
    s_password.onblur = ()=>{
        if(s_password.value.trim()==""){
            sig_tip.innerText = '请输入密码';
            sig_tip.style.visibility = 'visible';
            isSig = false;
        }else{
            sig_tip.style.visibility = 'hidden';
            isSig = true;
        }
    };
    s_code.onblur = ()=>{
        if(s_code.value.toLowerCase() !== code_text.firstChild.nodeValue.toLowerCase()){
            sig_tip.innerText = '验证码输入错误';
            sig_tip.style.visibility = 'visible';
            code_btn.onclick();
            isSig = false;
        }else{
            sig_tip.style.visibility = 'hidden';
            isSig = true;
        }
    };
    //生成随机验证码
    code_btn.onclick = function(){
        code_text.innerHTML = randomCode(5)+'<span class="g_line"></span>';
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
    sig_btn.onclick = function(){
        if(!isSig){
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status==200||xhr.status==304){
                if(xhr.responseText.toLowerCase()=='login'){
                    // sig_tip.innerText = '登录成功';
                    // sig_tip.style.visibility = 'visible';
                    document.cookie = 'username='+s_username.value+';path=/';
                    history.back();
                    // sig_tip.style.color = 'green';
                }else{
                    sig_tip.innerText = '账户名与密码不匹配';
                    sig_tip.style.visibility = 'visible';
                }
            }
        };
        xhr.open('get','../api/login.php?type=sig&username='+s_username.value.trim()+'&password='+s_password.value.trim(),true);
        xhr.send(null);
    }
    sig_box.onmouseleave = function(){
        sig_tip.innerText = '';
        sig_tip.style.visibility = 'hidden';
    }
    // 注册部分
    var reg_box = document.querySelector('.register_box');
    var reg_tip = reg_box.querySelector('.reg_tip');
    var g_username = reg_box.querySelector('#g_username');
    var g_password = reg_box.querySelector('#g_password');
    var c_password = reg_box.querySelector('#c_password');
    var gpu_checkbox = reg_box.querySelector('#gpu_checkbox');
    var agree_checkbox = reg_box.querySelector('#agree_checkbox');
    var reg_btn = reg_box.querySelector('.reg_btn');
    var isReg = false;
    g_username.onblur = function(){
        if(this.value.trim() === ''){
            reg_tip.innerText = '账号不能为空';
            reg_tip.style.visibility = 'visible';
            isReg = false;
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.onload=function(){
            if(xhr.status==200||xhr.status==304){
                if(xhr.responseText.toLowerCase()=='none'){
                    reg_tip.style.visibility = 'hidden';
                    isReg = true;
                    g_password.focus();
                }else{
                    reg_tip.innerText = g_username.value+'已被注册，来个独一无二的吧';
                    reg_tip.style.visibility = 'visible';
                    isReg = false;
                }
            }
        }
        xhr.open('get','../api/login.php?type=reg&username='+this.value.trim(),true);
        xhr.send(null);
    };
    g_password.onblur = function(){
        if(this.value.trim() === ''){
            reg_tip.innerText = '请输入密码';
            reg_tip.style.visibility = 'visible';
            isReg = false;
        }else{
            reg_tip.style.visibility = 'hidden';
            isReg = true;
            c_password.focus();
        }
    };
    c_password.onblur = function(){
        if(this.value.trim() === ''){
            reg_tip.innerText = '请再次输入密码';
            reg_tip.style.visibility = 'visible';
            isReg = false;
        }
        else if(this.value!==g_password.value){
            reg_tip.innerText = '两次输入的密码不一致';
            reg_tip.style.visibility = 'visible';
            isReg = false;
        }else{
            reg_tip.style.visibility = 'hidden';
            isReg = true;
        }
    };
    function checkOk(){
        if(gpu_checkbox.checked&&agree_checkbox.checked){
            return true;
        }else{
            return false;
        }
    }
    gpu_checkbox.onchange = function(){
        if(checkOk()&&reg_btn.classList.contains('dis_btn')){
            reg_btn.classList.remove('dis_btn');
        }else if(!reg_btn.classList.contains('dis_btn')){
            reg_btn.classList.add('dis_btn');
        }
    }
    agree_checkbox.onchange = function(){
        if(checkOk()&&reg_btn.classList.contains('dis_btn')){
            reg_btn.classList.remove('dis_btn');
        }else if(!reg_btn.classList.contains('dis_btn')){
            reg_btn.classList.add('dis_btn');
        }
    }
    reg_btn.onclick = function(){
        if(this.classList.contains('dis_btn')||!isReg||!g_username.value.trim()||!g_password.value.trim()||!c_password.value.trim()){
            return;
        }
        var data = 'username='+g_username.value+'&password='+g_password.value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4&&(xhr.status==200||xhr.status==304)){
                if(xhr.responseText.toLowerCase()=='ok'){
                    reg_tip.innerText = '注册成功！';
                    reg_tip.style.visibility = 'visible';
                    reg_tip.style.color = 'green';
                    g_username.value = '';
                    g_password.value = '';
                    c_password.value = '';
                    gpu_checkbox.checked = false;
                    agree_checkbox.checked = false;
                    reg_btn.classList.add('dis_btn');
                    setTimeout(function(){
                        reg_tip.innerText = '';
                        reg_tip.style.visibility = 'hidden';
                        reg_tip.style.color = '';
                    },1500);
                }
            }
        }
        xhr.open('post','../api/login.php',true);
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    };
    reg_box.onmouseleave = function(){
        reg_tip.innerText = '';
        reg_tip.style.visibility = 'hidden';
    }
})();
