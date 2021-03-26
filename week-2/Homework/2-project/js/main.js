// PART 1 SOLUTION?
// When i clicking the blue button
//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`
const btnBlue = document.getElementById("blueBtn");
const btnOrange = document.getElementById("orangeBtn");
const btnGreen = document.getElementById("greenBtn");
const jumbotron = document.getElementsByClassName("jumbotron")[0];
const btnDonate = jumbotron.children[3].children[0];
const btnVolunteer = jumbotron.children[3].children[1];
// console.log(btnDonate, btnVolunteer);

const colorTheme = [
	{
		id: "blue",
		jumbotron: "#588fbd",
		btnDonate: "#ffa500",
		btnVolunteerBG: "black",
		btnVolunteerColor: "white",
	},
	{
		id: "orange",
		jumbotron: "#f0ad4e",
		btnDonate: "#5751fd",
		btnVolunteerBG: "#31b0d5",
		btnVolunteerColor: "white",
	},
	{
		id: "green",
		jumbotron: "#87ca8a",
		btnDonate: "black",
		btnVolunteerBG: "#8c9c08",
		btnVolunteerColor: "black",
	},
];

function changeTheme(obj) {
	jumbotron.style.backgroundColor = obj.jumbotron;
	btnDonate.style.backgroundColor = obj.btnDonate;
	btnVolunteer.style.backgroundColor = obj.btnVolunteerBG;
	btnVolunteer.style.color = obj.btnVolunteerColor;
}

btnBlue.addEventListener("click", () => changeTheme(colorTheme[0]));
btnOrange.addEventListener("click", () => changeTheme(colorTheme[1]));
btnGreen.addEventListener("click", () => changeTheme(colorTheme[2]));

// PART 2

// Just below the buttons, there's a form called **Register with us**.

// Continue working in `./js/main.js` to add the following functionality:

// When the submit button is pressed, it should check that all the form fields are valid:

const name = document.getElementById("example-text-input"),
	email = document.getElementById("exampleInputEmail1"),
	textArea = document.getElementById("exampleTextarea"),
	submitBtn = document.querySelector("form > button"),
	errorUl = document.createElement("ul");

function formValidation() {
	cleanStylesInput();
	if (
		email.value.length > 0 &&
		textArea.value.length > 0 &&
		name.value.length > 0
	) {
		if (email.value.indexOf("@") === -1) {
			email.style.borderColor = "red";
			email.innerHTML += "Gasda";
			return false;
		}
		return true;
	} else {
		email.style.borderColor = "red";
		name.style.borderColor = "red";
		textArea.style.borderColor = "red";
	}
}
// limpiar valores de los inputs
function cleanInputs() {
	email.value = "";
	name.value = "";
	textArea.value = "";
}

function cleanStylesInput() {
	email.style.borderColor = "";
	name.style.borderColor = "";
	textArea.style.borderColor = "";
}

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const validar = formValidation();
	if (validar) {
		alert("thank you for filling out the form");
		cleanInputs();
	}
});

// - The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
// - For the **Email** field also check if it contains the `@` character

// For all the fields that invalid, it should make their background color `red`.
// IF all the fields are valid, when you click **Submit** it should:

// - Display an alert to thank you for filling out the form
// - Blank out (make empty) all the text fields

// **Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
