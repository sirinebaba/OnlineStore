<?php


 $db = new PDO("mysql:dbname=onlineShopping;host=localhost:8889", "root", "root");

 $sizingChart= $_GET["sizingChart"];
$sizingChart_db = $db->quote($sizingChart);

 $style= $_GET["style"];
$style_db = $db->quote($style);

 $style= $_GET["style"];

 $types = $_GET["types"];
 $types_db = $db->quote($types);

 $rows = $db->query("SELECT i.name,i.price,i.itemsID FROM items i 
                    JOIN items t ON i.itemsID = t.itemsID
                    JOIN sizingChart s ON s.sizingChartID = t.sizingChartID 
                    JOIN style y ON y.styleID = t.styleID
                    JOIN types m ON m.typeID = t.typeID
                    WHERE s.sizingChart = $sizingChart_db AND y.style = $style_db");

$rows2 = $db->query("SELECT m.itemsID,m.colorID,m.image FROM images m
                    JOIN items t ON m.itemsID = t.itemsID
                    JOIN sizingChart s ON s.sizingChartID = t.sizingChartID 
                    JOIN style y ON y.styleID = t.styleID
                    WHERE s.sizingChart = $sizingChart_db AND y.style = $style_db ");

$type = $db->query("SELECT t.type FROM types t
                    JOIN sizingChart s ON s.sizingChartID = t.sizingChartID
                    JOIN style y ON y.styleID = t.styleID
                    WHERE s.sizingChart = $sizingChart_db AND y.style = $style_db");
 


header("Content-type: application/xml");
$film = "";
print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";

print "<films>\n\t<item>\n";
foreach($rows as $row) {
print "\t\t<name> " . $row["name"] . "</name>\n\t\t<price> " . $row["price"] . "</price>\n";
print "\t\t<theItemID> " . $row["itemsID"] . "</theItemID>\n";
}

foreach($rows2 as $row) {
print "\t\t<itemsID> " . $row["itemsID"] . "</itemsID>\n\t\t<colorID> " . $row["colorID"] . "</colorID>\n\t\t<image> " . "data:image;base64," . $row["image"] . "</image>\n";
}
foreach($type as $row) {
print "\t\t<type> " . $row["type"] . "</type>\n";
}


print "\t</item>\n";


$order = 1;
$films = array();

print "</films>"; 

 
?>