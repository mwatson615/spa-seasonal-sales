// var products = document.getElementById("products")
// var seasonal = document.getElementById("seasonal")

var inventory = {"products" : products, "seasonal" : seasonal}

//Functions

function seasonalDisc("click", ???) {
	console.log("Hello");
}



function multDiscount() {
	if (products.category_id === 1) {
		var winterDisc = products.price * categories.discount;
		return winterDisc;
	} else if (products.category_id === 2) {
		var autumnDisc = products.price * categories.discount;
		return autumnDisc;
	} else {
		var springDisc = products.price * categories.discount;
		return springDisc;
	}
}

//XHRs

var myProducts = new XMLHttpRequest();
myProducts.addEventListener("load", ???);
myProducts.open("GET", products.json);
myProducts.send();

myProducts = JSON.parse(e.target.responseText)
	console.log("I'm working");
	document.getElementById("products").innerHTML = myProducts


var myCategories = new XMLHttpRequest();
myCategories.addEventListener("load", ???);
myCategories.open("GET", categories.json);
myCategories.send();

myCategories = JSON.parse(e.target.responseText)
	console.log("I'm also working");
document.getElementById("categories").innerHTML = myCategories;
