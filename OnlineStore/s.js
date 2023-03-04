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
	XMLfunc();
}

function container2() {
	//alert("Worked");
	var x = document.getElementById("container2").getElementsByTagName("li");
	for(var i  = 0; i < x.length; i++) {
		x[i].classList.remove("active");	
	}
	this.classList.add("active");
	XMLfunc();
}

function XMLfunc() {
     ajax = new XMLHttpRequest();
     ajax.onload = getXML;
     ajax.onerror = ajaxFailed;
     try 
	{

		var x = document.getElementsByClassName("active")[0];
		var sizingChart = x.getElementsByTagName("a");

		var y = document.getElementsByClassName("active")[1];
		var style = y.getElementsByTagName("a");


		ajax.open("get", "search.php?sizingChart="+sizingChart[0].innerHTML+"&style="+style[0].innerHTML+"&types=Kimonos", true);
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


     var categories1 = document.getElementById("block1a");
    // clear out the list of categories
   while (categories1.firstChild) {
        categories1.removeChild(categories1.firstChild);
    }
	categories1.innerHTML += '&nbsp;';
	

	var categories2 = document.getElementById("block2a");
    // clear out the list of categories
   while (categories2.firstChild) {
        categories2.removeChild(categories2.firstChild);
    }
	categories2.innerHTML += '&nbsp;';
	var actor = ajax.responseXML.getElementsByTagName("item"); 
		//alert(actor[0].getElementsByTagName("image").length);

		var x = 0;
		var newRow1 = document.createElement('DIV');
		var a = document.createElement("a");
			a.setAttribute('href',"item.php?id="+(actor[0].getElementsByTagName("theItemID")[0].firstChild.nodeValue-1));
			newRow1.style.width="300px";
			newRow1.style.height="300px";
			newRow1.style.position = "absolute";
			var image = document.createElement("IMG");
			image.setAttribute("src", actor[0].getElementsByTagName("image")[0].firstChild.nodeValue);
			image.style.width="100%";
			image.style.position = "absolute";
			a.appendChild(image);
			newRow1.appendChild(a);
			var h3 = document.createElement("H3");
		var title = document.createTextNode(actor[0].getElementsByTagName("price")[0].firstChild.nodeValue+",000 LBP");
		h3.className="caption";
		h3.appendChild(title);
		h3.style.marginTop = "400px";
		newRow1.appendChild(h3);

			var h3_name = document.createElement("H3");
		var name = document.createTextNode(actor[0].getElementsByTagName("name")[0].firstChild.nodeValue);
		h3_name.className="caption";
		h3_name.appendChild(name);
		h3_name.style.marginTop = "10px";
		newRow1.appendChild(h3_name);
		//document.getElementById("block1a").appendChild(newRow);
		var j = 0;
		var x = 1;
		var newRow2 = document.createElement('DIV');

	for(var i = 1; i < actor[0].getElementsByTagName("image").length; i++) {
			if(actor[0].getElementsByTagName("itemsID")[i].firstChild.nodeValue != actor[0].getElementsByTagName("itemsID")[i-1].firstChild.nodeValue) {
			if(x == 1) {
				
			var a = document.createElement("a");
			a.setAttribute('href',"item.php?id="+(actor[0].getElementsByTagName("itemsID")[i].firstChild.nodeValue-1));
			newRow2.style.width="300px";
			newRow2.style.height="300px";
			newRow2.style.position = "absolute";
			var image = document.createElement("IMG");
			image.setAttribute("src", actor[0].getElementsByTagName("image")[i].firstChild.nodeValue);
			image.style.width="100%";
			image.style.position = "absolute";
			a.appendChild(image);
			newRow2.appendChild(a);

			var h3 = document.createElement("H3");
		var title = document.createTextNode(actor[0].getElementsByTagName("price")[j+1].firstChild.nodeValue+",000 LBP");
		h3.className="caption";
		h3.appendChild(title);
		h3.style.marginTop = "400px";
		newRow2.appendChild(h3);

			var h3 = document.createElement("H3");
			var title = document.createTextNode(actor[0].getElementsByTagName("name")[j+1].firstChild.nodeValue);
			h3.className="caption";
			h3.appendChild(title);
			h3.style.marginTop = "10px";
			newRow2.appendChild(h3);
			x = 2;
		}
		else {
			var a = document.createElement("a");
			a.setAttribute('href',"item.php?id="+(actor[0].getElementsByTagName("itemsID")[i].firstChild.nodeValue-1));
			newRow1.style.width="300px";
			newRow1.style.height="300px";
			newRow1.style.position = "absolute";
			var image = document.createElement("IMG");
			image.setAttribute("src", actor[0].getElementsByTagName("image")[i].firstChild.nodeValue);
			image.style.width="100%";
			image.style.position = "absolute";
			a.appendChild(image);
			newRow1.appendChild(a);
			var h3 = document.createElement("H3");
		var title = document.createTextNode(actor[0].getElementsByTagName("price")[j+1].firstChild.nodeValue+",000 LBP");
		h3.className="caption";
		h3.appendChild(title);
		h3.style.marginTop = "320px";
		newRow1.appendChild(h3);

			var h3 = document.createElement("H3");
			var title = document.createTextNode(actor[0].getElementsByTagName("name")[j+1].firstChild.nodeValue);
			h3.className="caption";
			h3.appendChild(title);
			h3.style.marginTop = "10px";
			newRow1.appendChild(h3);
			x = 1;
		}
			j++;
			}
			

	}
	document.getElementById("block1a").appendChild(newRow1);
	document.getElementById("block2a").appendChild(newRow2);
	//alert(actor[0].getElementsByTagName("type")[0].firstChild.nodeValue);

	 var type = document.getElementById("type");
    // clear out the list of categories
   while (type.firstChild) {
        type.removeChild(type.firstChild);
    }

	for(var i = 0; i < actor[0].getElementsByTagName("type").length; i++) {
		var div = document.createElement("div");
		div.className="checkbox";
		var label = document.createElement("label");
		var input = document.createElement("input");
		input.setAttribute("type","checkbox");
		input.setAttribute("value",actor[0].getElementsByTagName("type")[i].firstChild.nodeValue);
		input.className = "mychecked";
		input.id = actor[0].getElementsByTagName("type")[i].firstChild.nodeValue;
		label.appendChild(input);
		label.appendChild(document.createTextNode(actor[0].getElementsByTagName("type")[i].firstChild.nodeValue));
		div.appendChild(label);
		document.getElementById("type").appendChild(div);
	}
	
}

function searchItems() {
	var categories1 = document.getElementById("block1a");
    // clear out the list of categories
   while (categories1.firstChild) {
        categories1.removeChild(categories1.firstChild);
    }
	categories1.innerHTML += '&nbsp;';
	

	var categories2 = document.getElementById("block2a");
    // clear out the list of categories
   while (categories2.firstChild) {
        categories2.removeChild(categories2.firstChild);
    }
	categories2.innerHTML += '&nbsp;';
	var actor = ajax.responseXML.getElementsByTagName("item"); 
	var searchItems = [];
	for(var z = 0; z < document.getElementsByClassName("mychecked").length; z++) {
		//alert("test");
		if(document.getElementsByClassName("checkbox")[z].getElementsByTagName("input")[0].checked) 
		{
			var x = document.getElementsByClassName("checkbox")[z];
			var y = x.getElementsByTagName("input")[0];
			//alert(y.value);
			searchItems.push(y.value);
		}
		
	}
	var x = document.getElementsByClassName("checkbox")[3];
	var y = x.getElementsByTagName("input")[0];

	var type = [];
	for(var a = 0; a < (actor[0].getElementsByTagName("type").length); a++) {
		type.push(actor[0].getElementsByTagName("type")[a].firstChild.nodeValue);
	}


	ajax = new XMLHttpRequest();
     ajax.onload = getXML;
     ajax.onerror = ajaxFailed;
     try 
	{

		var x = document.getElementsByClassName("active")[0];
		var sizingChart = x.getElementsByTagName("a");

		var y = document.getElementsByClassName("active")[1];
		var style = y.getElementsByTagName("a");


		ajax.open("get", "search.php?sizingChart="+sizingChart[0].innerHTML+"&style="+style[0].innerHTML+"&types=Kimonos", true);
		ajax.send(null);
	} 
	catch (e) // if ("" + e).match(/denied/
	{
		alert("Ajax security error: cannot fetch " + url);
	}   

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