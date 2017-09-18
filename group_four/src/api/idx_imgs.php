<?php
$myfile = fopen("data/idx_imgs.json","r");
$content = fread($myfile,filesize("data/idx_imgs.json"));
// var_dump($content);
$content = json_decode($content);
$arr = array();
// var_dump($content);
for($x=0;$x<count($content);$x++){
    $arr[] = $content[$x];
}
$arr = json_encode($arr,JSON_UNESCAPED_UNICODE);
echo $arr;
fclose($myfile);
?>