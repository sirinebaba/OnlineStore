

<?php 
    ini_set('mysql.connect_timeout', 300);
    ini_set('default_socket_timeout', 300);
?>

<html>

<head>
<meta charset="utf-8" />
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="imageslider.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="s.js?v=1" type="text/javascript"></script>

    <style>
        #title {
            background-image: url("header.png");
            height: 14%;
            overflow: hidden;
        }
        #btw {
            background-image: url("header.png");
            height: 4%;
        }
        .caption {
    width: 200px;
    text-align: center;
    margin-left:40px;
}
        
    </style>
</head>

<body>
    <div id="title">
<h1 style="margin-left: 34%; color: #000099; opacity: 1">Fashion Shopping</h1>
    </div>

    <div class = "header" style="overflow: hidden; background-color: #000099">
        <nav>
        <div class="container" id="container1" style="margin-left: 33%">
            <ul class="nav nav-pills">
                <li class="active" id="Women"><a href="#">Women</a></li>
                <li id="Men"><a href="#">Men</a></li>
                <li id="Juniors"><a href="#">Juniors</a></li>
                <li id="Kids"><a href="#">Kids</a></li>
        </div>
        </nav>
    </div>

    <div id="btw">

    </div>

    <div class = "header" style="overflow: hidden; background-color: #000099">
        <div class="container" id="container2" style="margin-left: 30%">
            <ul class="nav nav-pills">
                <li class="active" id="Clothes"><a href="#">Clothes</a></li>
                <li id="Accessories"><a href="#">Accessories</a></li>
               <li id="Beauty"><a href="#">Beauty</a></li>
               <li id="Shoes"><a href="#">Shoes</a></li>
           </ul>
        </div>
    </div>
    <br />
    <br />
    <div style="overflow: hidden">
        <div id="block1" style="border-right: 1px solid #000099; float:left; width: 19%; margin-right: 1%;margin-left: 1%" >					
            <p>Type:</p>
            <div class="checkbox">
                <label><input type="checkbox" checked="checked" value="All">All</label>
            </div>
            <div id="type">
            </div>
            <button onclick="searchItems()">Search</button>
            
            <div style="height: 500px"></div>
	    </div>
        <div id="block2" style="float:left; width: 78%;margin-right: 1%">
            <div id="block1a"style="float:left; width: 49%; margin-right: 1%;margin-left: 1%">&nbsp;
            </div>
            <div id="block2a"style="float:left; width: 48%;margin-right: 1%">&nbsp;
            </div>
    
        </div>					
    

    </div>

   <!-- <form method="post" enctype="multipart/form-data">
    <br />
        <input type="file" name="image">
        <br /><br />
        <input type = "submit" name="sumit" value="Upload" />
    </form> -->

    

    <?php
        if(isset($_POST['sumit'])) {
            
                $image = addslashes($_FILES['image']['tmp_name']);
                $name = addslashes($_FILES['image']['name']);
                $image = file_get_contents($image);
                $image = base64_encode($image);
                //saveimage($name,$image);
            
        }
        
        function saveimage($name, $image) {
            $db = new PDO("mysql:dbname=onlineShopping;host=localhost:8889", "root", "root");
            $rows = $db->query("insert into images (imageID,colorID, image,itemsID) values(1,9, '$image',5)");
           
        }
       // displayimage();

        function displayimage() {

             $db = new PDO("mysql:dbname=onlineStore;host=localhost:8889", "root", "root");
             $rows = $db->query("select * FROM images");

            foreach($rows as $row) {
               // echo '<img height = "300" height = "300" src= "data:image;base64,'.$row[2].' "> ';
                
            }

             
        }
    ?>


</body>

</html>
<?php   
                        if(isset($_POST['sumit'])) {
                     
                              showId();
                          
                      }
                       function showId() {
                          $servername = "localhost";
                          $username = "root";
  $password = "root";
  $dbname = "Report";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  } 
  
  $sql = "SELECT Id FROM category";
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          echo "<br> id: ". $row["Id"] . "<br>";
      }
  } else {
      echo "0 results";
  }
  
  $conn->close();
  

             
        }
	?>