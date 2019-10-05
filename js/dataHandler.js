"use strict"

function loadCars() {
	var xhr = new XMLHttpRequest()

	xhr.open("GET", "../assets/cars.json", true)

	xhr.onload = function() {
		if (this.status == 200) {
			var cars = JSON.parse(this.responseText)

			var output = ""

			for (var i in cars) {
				output +=
					'<div class="car">' +
					'<img class="car__image" src="' +
					cars[i].imageUrl +
					'" width="180">' +
					"<ul>" +
					"<li><b>" +
					cars[i].carName +
					"</b></li>" +
					"<li>Kategori: " +
					cars[i].category +
					"</li>" +
					"<li> " +
					cars[i].info +
					"</li>" +
					"</ul>" +
					'<a href="./booking.html" class="button--car">Velg</a>' +
					"</div>"
			}
			document.getElementById("cars").innerHTML = output
		}
	}

	xhr.send()
}

loadCars()
