//
// Task 1
// =======
// Write JavaScript below that logs:
//     1. all the "p" element nodes of the document,
//     --> should log a list of nodes with a length of 6
console.log(document.querySelector("p"));
//     2. the first div element node
//     --> should log the ".site-header" node
console.log(document.querySelector("p"));
//     3. the element with id "jumbotron-text"
//     --> should log the "#jumbotron-text" node
console.log(document.getElementById("jumbotron-text"));
//     4. all the "p" elements of contained inside  the .primary-content element node
//     --> should log a list of nodes with a length of 3

//

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
function changeColor(event) {
	event.preventDefault();
	const body = document.querySelector("body");
	if (body.style.backgroundColor === "black") {
		body.style.backgroundColor = "white";
	} else {
		body.style.backgroundColor = "black";
	}
}
const colorButton = document.getElementById("bgrChangeBtn");
colorButton.addEventListener("click", changeColor);
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
function addText(event) {
	event.preventDefault();
	const mainArticles = document.getElementById("mainArticles");
	const paragraph = document.createElement("p");
	paragraph.innerText = "new paragraph";
	mainArticles.appendChild(paragraph);
	console.log("addText");
}
const addSomeTextButton = document.getElementById("addTextBtn");
addSomeTextButton.addEventListener("click", addText);

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
