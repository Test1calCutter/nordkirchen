<?php
$dbLizenzen = new mysqli('localhost', 'root', 'newpassword', 'lizenzen');
$dbPartner = new mysqli('localhost', 'root', 'newpassword', 'partners');

if ($dbLizenzen->connect_error) {
    die("Connection failed: " . $dbLizenzen->connect_error);
}
if ($dbPartner->connect_error) {
    die("Connection failed: " . $dbPartner->connect_error);
}

$lizenzenData = [];
$lizenzenResult = $dbLizenzen->query("SELECT * FROM lizenzen");
if ($lizenzenResult) {
    while ($row = $lizenzenResult->fetch_assoc()) {
        $lizenzenData[] = $row;
    }
}
$dbLizenzen->close();

$partnerData = [];
$partnerResult = $dbPartner->query("SELECT * FROM partner");
if ($partnerResult) {
    while ($row = $partnerResult->fetch_assoc()) {
        $partnerData[] = $row;
    }
}
$dbPartner->close();

echo json_encode([
    'lizenzen' => $lizenzenData,
    'partner' => $partnerData
]);