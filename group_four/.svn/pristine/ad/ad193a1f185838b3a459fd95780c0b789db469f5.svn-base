<?php
/**
 * @Author: 陈文贵
 * @Date:   2017-08-19 09:50:30
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-19 17:53:54
 */
    $url = 'data/login.json';
    $file0 = fopen($url, 'r');
    $fileLen = filesize($url);
    $fileContent = fread($file0,$fileLen);
    fclose($file0);
    //写入json文件
    if(count($_POST)>0){
        $postContent = json_encode($_POST,JSON_UNESCAPED_UNICODE);
        $file = fopen($url,'w');
        if($fileLen==2){
            fwrite($file,substr($fileContent,0,1).$postContent.substr($fileContent,-1,1));
        }else{
            fwrite($file,substr($fileContent,0,$fileLen-1).','.$postContent.substr($fileContent,-1,1));
        }
        fclose($file);
        echo 'ok';
    }
    if(count($_GET)>0){
        $arr = json_decode($fileContent,true);
        if($_GET['type']=='reg'){
            $name = $_GET['username'];
            $isContains = false;
            foreach($arr as $item){
                if($name==$item['username']){
                    $isContains = true;
                }
            }
            if(!$isContains){
                echo 'none';
            }else{
                echo 'contains';
            }
        }else if($_GET['type']=='sig'){
            $name = $_GET['username'];
            $psd = $_GET['password'];
            $isLogin = false;
            foreach($arr as $item){
                if($name==$item['username']&&$psd==$item['password']){
                    $isLogin = true;
                }
            }
            if($isLogin){
                echo 'login';
            }else{
                echo 'failed';
            }
        }
    }
    // var_dump(json_decode($fileContent,true));
?>