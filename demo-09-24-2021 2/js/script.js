/* Populate with current location */
let locationDiv = document.getElementById("locationList");

if (localStorage.curLocation != null) {
	locationDiv.innerHTML = localStorage.curLocation;
}

/* Run code on submit button push */
let locationForm = document.getElementById("locationForm");
locationForm.addEventListener("submit", function(event) {
	let name = locationForm.elements.namedItem("name").value;
	let message = locationForm.elements.namedItem("message").value;
    let new_curLocation = formattedLocation(name, message);

    if (localStorage.curLocation == undefined) {
        localStorage.curLocation = new_curLocation;
    } else {
        localStorage.curLocation = new_curLocation + localStorage.curLocation;
    }

	let locationDiv = document.getElementById("locationList");
	locationDiv.innerHTML = localStorage.curLocation;
	locationDiv.classList.add("highlight");

	/* This stops the usual function of "submit" which is to send data
	to another server */
	event.preventDefault();
})

let formattedLocation = (form_name, form_message) => {
    return `${form_name}: ${form_message}<br />`
}
