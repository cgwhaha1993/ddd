<?php
$myfile = fopen("data/goods.json","r");
$content = fread($myfile,filesize("data/goods.json"));
// var_dump($content);
$content = json_decode($content);
$arr = array();
for($x=0;$x<12;$x++){
    $arr[] = $content[$x];
}
$arr = json_encode($arr,JSON_UNESCAPED_UNICODE);
echo $arr;
fclose($myfile);

?>