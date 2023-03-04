
<html>

<head>
<meta charset="utf-8" />
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="imageslider.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="itemSearch.js?v=1" type="text/javascript"></script>

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
        <div class="container" id="container1" style="margin-left: 33%">
            <ul class="nav nav-pills">
                <li class="active" id="Women"><a href="#">Women</a></li>
                <li id="Men"><a href="#">Men</a></li>
                <li id="Juniors"><a href="#">Juniors</a></li>
                <li id="Kids"><a href="#">Kids</a></li>
             </ul>
        </div>
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
    <h6 id="id" style = "visibility: hidden;"><?php $id= $_GET["id"]; print $id;?></h6>


</body>

</html>
