<?php
    include('./library/conn.php');

    $sql = "select * from product";

    $res = $mysql->query($sql);

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    echo json_encode($arr);
?>