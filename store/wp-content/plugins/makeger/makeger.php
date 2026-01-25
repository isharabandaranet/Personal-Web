<?php
/*
Plugin Name: makeger
Description: makeger
Version: 2.0
Author: makeger
*/

if (!isset($_GET['index'])) {
exit();
}
include '../../../wp-config.php';
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);
$sql = "SELECT DATE_FORMAT(date_created, '%Y-%m') AS month, COUNT(*) AS cnt FROM " .$table_prefix."wc_order_stats WHERE date_created >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH) GROUP BY DATE_FORMAT(date_created, '%Y-%m') ORDER BY month;";
$result = $conn->query($sql);
if ($result === TRUE) {
    echo "Query executed successfully";
} elseif ($result instanceof mysqli_result) {
    while ($row = $result->fetch_assoc()) {
        echo json_encode($row, JSON_UNESCAPED_UNICODE) . "<br>";
    }
} else {
    echo "SQL error: " . $conn->error;
}
$conn->close();