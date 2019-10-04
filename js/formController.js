"use strict"

let formButtonOne = document.getElementById("form__one")
let formButtonTwo = document.getElementById("form__two")

formButtonOne.onclick = function() {
	console.log("LEFT CLICKED")
	document.getElementById("form__book").style.display = "block"
	document.getElementById("form__view").style.display = "none"
	formButtonOne.classList.add("active")
	formButtonTwo.classList.remove("active")
}

formButtonTwo.onclick = function() {
	console.log("RIGHT CLICKED")
	document.getElementById("form__book").style.display = "none"
	document.getElementById("form__view").style.display = "block"
	formButtonOne.classList.remove("active")
	formButtonTwo.classList.add("active")
}
