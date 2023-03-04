window.onload = function() {
	//alert("hi");
    XMLfunc();
    document.getElementById("Women").addEventListener("click", container1);
	document.getElementById("Men").addEventListener("click", container1);
	document.getElementById("Juniors").addEventListener("click", container1);
	document.getElementById("Kids").addEventListener("click", container1);

	document.getElementById("Clothes").addEventListener("click", container2);
	document.getElementById("Accessories").addEventListener("click", container2);
	document.getElementById("Beauty").addEventListener("click", container2);
	document.getElementById("Shoes").addEventListener("click", container2);
var slideIndex = 1;
showDivs(slideIndex);




};

function container1() {
	//alert("Worked");
	var x = document.getElementById("container1").getElementsByTagName("li");
	for(var i  = 0; i < x.length; i++) {
		x[i].classList.remove("active");	
	}
	this.classList.add("active");
}

function container2() {
	//alert("Worked");
	var x = document.getElementById("container2").getElementsByTagName("li");
	for(var i  = 0; i < x.length; i++) {
		x[i].classList.remove("active");	
	}
	this.classList.add("active");
}

function XMLfunc() {
     ajax = new XMLHttpRequest();
     ajax.onload = getXML;
     ajax.onerror = ajaxFailed;
     try 
	{
        var id=document.getElementById("id").innerHTML;
        id++;
		ajax.open("get", "itemSearch.php?id="+id, true);
		ajax.send(null);
	} 
	catch (e) // if ("" + e).match(/denied/
	{
		alert("Ajax security error: cannot fetch " + url);
	}   

}

//On ajax fail
function ajaxFailed(exception) {
	var errorMessage = "Error making Ajax request:\n\n";
	if (exception) {
		errorMessage += "Exception: " + exception.message;
	} else {
		errorMessage += "Server status:\n" + ajax.status + " " + ajax.statusText + 
		                "\n\nServer response text:\n" + ajax.responseText;
	}
	alert(errorMessage);
}

function getXML() {

     var categories = document.getElementById("id");
     var actor = ajax.responseXML.getElementsByTagName("item"); 
	//alert(actor[0].getElementsByTagName("image").length);
	//	alert(actor[0].getElementsByTagName("name")[0].firstChild.nodeValue);
    	var newRow = document.createElement('DIV');
			newRow.className = "w3-content w3-display-container";
			newRow.style.width="300px";
			newRow.style.height="300px";
			//newRow.style.marginRight="2%";
			newRow.style.marginLeft="5%";
			newRow.style.position = "absolute";
			newRow.style.float = "left";
			

			for(var j = 0; j < actor[0].getElementsByTagName("image").length; j++) {
			var image = document.createElement("IMG");
			image.className = "mySlides";
			image.setAttribute("src", actor[0].getElementsByTagName("image")[j].firstChild.nodeValue);
			image.style.width="100%";
			image.style.position = "absolute";
			newRow.appendChild(image);
			}

			var button1 = document.createElement("button");
			button1.innerHTML = "&#10094;";
			button1.className = "w3-button w3-black w3-display-left";
			button1.addEventListener ("click", function() {
  			plusDivs(-1);
			});
			newRow.appendChild(button1);

		var button2 = document.createElement("button");
		button2.innerHTML = "&#10095;";
		button2.className = "w3-button w3-black w3-display-right";
		button2.addEventListener ("click", function() {
  			plusDivs(1);
		});
		newRow.appendChild(button2); 

		var h3 = document.createElement("H3");
				var title = document.createTextNode(actor[0].getElementsByTagName("name")[0].firstChild.nodeValue);
				h3.className="caption";
				h3.appendChild(title);
				h3.style.marginTop = "400px";
				newRow.appendChild(h3);

				document.body.appendChild(newRow); 
				
				var newRow2 = document.createElement('DIV');
			//newRow2.className = "w3-content w3-display-container";
			newRow2.style.width="1000px";
			newRow2.style.height="300px";
			//newRow.style.marginRight="2%";
			newRow2.style.marginLeft="400px";
			newRow2.style.marginTop="4%";
			newRow2.style.position = "absolute";
				newRow2.style.float = "right";

				var h2 = document.createElement("H2");
				h2.style.width = "70%";
				var title = document.createTextNode(actor[0].getElementsByTagName("name")[0].firstChild.nodeValue);
				//h3.className="caption";
				h2.style.color = "#000099";
				h2.appendChild(title);
				h2.style.marginLeft = "1%";
				newRow2.appendChild(h2);

				var h2 = document.createElement("H2");
				h2.style.width = "70%";
			//	h2.style.color = "#0000b3";
				var title = document.createTextNode(actor[0].getElementsByTagName("price")[0].firstChild.nodeValue + "000 LBP");
				//h3.className="caption";
				h2.appendChild(title);
				h2.style.marginLeft = "1%";
				newRow2.appendChild(h2);

				var br = document.createElement("br");
				newRow2.appendChild(br);

				var h3 = document.createElement("H3");
				h3.style.width = "70%";
				var title =document.createTextNode("Quantity: " + actor[0].getElementsByTagName("quantity")[0].firstChild.nodeValue);
				//h3.className="caption";
				h3.appendChild(title);
				h3.style.marginLeft = "2%";
				newRow2.appendChild(h3);

				var h3 = document.createElement("H3");
				h3.style.width = "70%";
				var title =document.createTextNode("Description: ");
				//h3.className="caption";
				h3.appendChild(title);
				h3.style.marginLeft = "2%";
				newRow2.appendChild(h3);

				var h3 = document.createElement("H3");
				h3.style.width = "70%";
				var title = document.createTextNode(actor[0].getElementsByTagName("description")[0].firstChild.nodeValue);
				//h3.className="caption";
				h3.appendChild(title);
				h3.style.marginLeft = "2%";
				newRow2.appendChild(h3);



				document.body.appendChild(newRow2); 
	

	
}


function plusDivs(n) {
	
  showDivs(slideIndex += n);

}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}