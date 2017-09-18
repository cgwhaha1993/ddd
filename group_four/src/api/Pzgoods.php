<?php
$pageSum = isset($_GET['pageSum'])?$_GET['pageSum']:"20";
$pageNo = isset($_GET['pageNo'])?$_GET['pageNo']:"2";
$change = isset($_GET['change'])?$_GET['change']:"3";
$myfile = fopen("data/goods.json","r");
$content = fread($myfile,filesize("data/goods.json"));

$content = json_decode($content);
// var_dump($content);

for($x=0;$x<count($content);$x++){
    $a[] = $content[$x]->now*1;
}
array_multisort($a,$change*1,$content);

$sum = count($content);

$start = $pageSum*($pageNo-1);
$len = count($content)-$start<$pageSum?count($content):20+$start;
$arr = array();
for($x=$start;$x<$len;$x++){
    $arr[] = $content[$x];
}
// echo SORT_ASC;
// echo SORT_DESC;

// var_dump($arr);
// $res = array(
//     "data"=>$arr,
//     "sum"=>$sum
// );
// // var_dump($res);
$res = json_encode($arr,JSON_UNESCAPED_UNICODE);

echo $res;

fclose($myfile);
// echo $res;
?>