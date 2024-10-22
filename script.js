//your JS code here. If required.
let input = document.getElementById("fname")
input.addEventListener("focusout", (e) => {
	e.target.value = e.target.value.toUpperCase()
})