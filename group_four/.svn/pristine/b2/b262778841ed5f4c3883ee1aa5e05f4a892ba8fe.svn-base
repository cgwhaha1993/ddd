<?php
$myfile = fopen("data/goods.json","r");
$content = fread($myfile,filesize("data/goods.json"));

$content = json_decode($content);
$arr = array();
for($x=0;$x<18;$x++){
    $arr[] = $content[$x];
}
$arr = json_encode($arr,JSON_UNESCAPED_UNICODE);

echo $arr;
fclose($myfile);

?>