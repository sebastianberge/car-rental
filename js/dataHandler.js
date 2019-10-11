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
					'<div class="car" onclick="location.href=' +
					"'./booking.html'" +
					'">' +
					'<img class="car__image" src="' +
					cars[i].imageUrl +
					'" width="200" alt="' +
					cars[i].alt +
					'">' +
					"<ul>" +
					"<li><b>Kategori: " +
					cars[i].category +
					"</b></li>" +
					"<li>" +
					cars[i].carName +
					"</li>" +
					"<li>Dagspris: " +
					cars[i].dayPrice +
					"</li>" +
					"<li>Ukespris: " +
					cars[i].weeklyPrice +
					"</li>" +
					"<li>Helgepris: " +
					cars[i].weekendPrice +
					"</li>" +
					"</ul>" +
					"</div>"
			}
			document.getElementById("cars").innerHTML = output
		}
	}

	xhr.send()
}

loadCars()
