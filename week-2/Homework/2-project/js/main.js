// PART 1 SOLUTION

// When i clicking the blue button
//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`
const btnBlue = document.getElementById("blueBtn");
const jumbotron = document.getElementsByClassName("jumbotron")[0];
const btnDonate = jumbotron.children[3].children[0];
const btnVolunteer = jumbotron.children[3].children[1];
console.log(btnDonate, btnVolunteer);

btnBlue.addEventListener("click", () => {
	jumbotron.style.backgroundColor = "#588fbd";
	btnDonate.style.backgroundColor = "#ffa500";
	btnVolunteer.style.backgroundColor = "black";
	btnVolunteer.style.color = "white";
});

// - When clicking **orange** it should change:

//   - **Jumbotron** background color to `#f0ad4e`
//   - **Donate a bike** button background color to `#5751fd`
//   - **Volunteer** button background color to `#31b0d5` and text color to `white`
const btnOrange = document.getElementById("orangeBtn");

btnOrange.addEventListener("click", () => {
	jumbotron.style.backgroundColor = "#f0ad4e";
	btnDonate.style.backgroundColor = "#5751fd";
	btnVolunteer.style.backgroundColor = "#31b0d5";
	btnVolunteer.style.color = "white";
});

// - When clicking **green** it should change:
//   - **Jumbotron** background color to `#87ca8a`
//   - **Donate a bike** button background color to `black`
//   - **Volunteer** button background color to `#8c9c08`
const btnGreen = document.getElementById("greenBtn");

btnGreen.addEventListener("click", () => {
	jumbotron.style.backgroundColor = "#87ca8a";
	btnDonate.style.backgroundColor = "black";
	btnVolunteer.style.backgroundColor = "#8c9c08";
});
