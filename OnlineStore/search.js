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
		ajax.open("get", "search.php?fname=Tom", true);
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
  

     var categories = document.getElementById("dumpdiv");
    // clear out the list of categories
    while (categories.firstChild) {
        //categories.removeChild(categories.firstChild);
    }
	 var h2 = document.createElement("h2");
	  h2.innerHTML = "Trying";
	categories.appendChild(h2);
	var actor = ajax.responseXML.getElementsByTagName("actor"); 
//	alert(actor[0].getElementsByTagName("firstname")[0].firstChild.nodeValue);
	//var store = ajax.responseXML.getElementsByTagName("store");
	//alert(store[0].getElementsByTagName("store")[0].firstChild.nodeValue);
    
   // var allFilms = ajax.responseXML.getElementsByTagName("film"); 
    

	 var h6 = document.createElement("h2");
        h6.innerHTML = "Results for " + actor[0].getElementsByTagName("firstname")[0].firstChild.nodeValue + " " + actor[0].getElementsByTagName("lastname")[0].firstChild.nodeValue;
        document.getElementById("dumpdiv").appendChild(h6);

	var image = document.createElement("IMG");
	//image.src = actor[0].getElementsByTagName("image")[0].firstChild.nodeValue;
	//image.src = "image1.jpg";	
	image.setAttribute("src", "image1.jpg");
	document.body.appendChild(image);
}