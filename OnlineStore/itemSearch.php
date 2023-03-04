<?php


 $db = new PDO("mysql:dbname=onlineShopping;host=localhost:8889", "root", "root");
 $id = $_GET["id"];
$id_db = $db->quote($id);
 $rows = $db->query("SELECT m.colorID, m.image, m.itemsID
                        FROM images m
                        WHERE m.itemsID = $id_db;");

$rows2 = $db->query("SELECT i.description, i.name, i.price, i.quantity
                        FROM items i
                        WHERE i.itemsID = $id_db;");





header("Content-type: application/xml");
$film = "";
print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";

print "<films>\n\t<item>\n";
foreach($rows as $row) {
print "\t\t<image> " . "data:image;base64," . $row["image"] . "</image>\n";
}
foreach($rows2 as $row) {
    print "\t\t<description> " . $row["description"] . "</description>\n";
    print "\t\t<name> " . $row["name"] . "</name>\n";
    print "\t\t<price> " . $row["price"] . "</price>\n";
    print "\t\t<quantity> " . $row["quantity"] . "</quantity>\n";
}

print "\t</item>\n";


$order = 1;
$films = array();

print "</films>"; 

 
?>