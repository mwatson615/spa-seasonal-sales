// var products = document.getElementById("products")
// var seasonal = document.getElementById("seasonal")

//Functions

// function seasonalDisc("click", ???) {
// 	console.log("Hello");
// }


// function multDiscount() {
// 	if (products.category_id === 1) {
// 		var winterDisc = products.price * categories.discount;
// 		return winterDisc;
// 	} else if (products.category_id === 2) {
// 		var autumnDisc = products.price * categories.discount;
// 		return autumnDisc;
// 	} else {
// 		var springDisc = products.price * categories.discount;
// 		return springDisc;
// 	}
// }

var regInventory = []
function loadProducts(e) {
	product = JSON.parse(e.target.responseText);
	regInventory = product.products;
	console.log(regInventory);
	for (i = 0; i < .length; i++) {
		regInventory.push([products.name, products.price]);
		document.getElementById("products").innerHTML = regInventory;
}


}

// for (var i = 0, i < product.length, i++) {
// 	productArray.push();
// 	document.getElementById("products").innerHTML = productArray
// }

var seasInventory = []
function loadCats(e) {
	category = JSON.parse(e.target.responseText)
	seasInventory = category;
	console.log(seasInventory);
	document.getElementById("seasonal").innerHTML = seasInventory;
}



//XHRs

var myProducts = new XMLHttpRequest();
myProducts.addEventListener("load", loadProducts);
myProducts.open("GET", "products.json");
myProducts.send();


var myCategories = new XMLHttpRequest();
myCategories.addEventListener("load", loadCats);
myCategories.open("GET", "categories.json");
myCategories.send();
