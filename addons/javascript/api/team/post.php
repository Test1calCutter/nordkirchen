<?php
$db = new mysqli('localhost', 'root', 'newpassword', 'team');

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

$result = $db->query(query: "SELECT * FROM team.members");
$data = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode(value: $data);
$db->close();

