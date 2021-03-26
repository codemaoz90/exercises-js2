/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
	let content = document.querySelector("#content");
	arrayOfPeople.forEach((person) => {
		const h1 = document.createElement("h1");
		const h2 = document.createElement("h2");

		h1.innerText = person.name;
		h2.innerText = person.job;
		content.appendChild(h1);
		content.appendChild(h2);
	});
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
	//Write your code in here
	let content = document.querySelector("#content");
	let unorderList = document.createElement("ul");
	console.log(unorderList);
	shopping.forEach((el) => {
		const li = document.createElement("li");
		li.innerText = el;
		unorderList.appendChild(li);
		// const li = `<li>${el}</li>`;
		// unorderList.innerHTML += li;
	});
	content.appendChild(unorderList);
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
	//Write your code in here
	let content = document.querySelector("#content");

	// titulo
	let title = document.createElement("h1");
	title.style.textAlign = "center";
	title.innerText = "BOOK LIST";

	// contenedor books
	let contentBooks = document.createElement("div");
	contentBooks.style.display = "flex";
	contentBooks.style.justifyContent = "space-around";
	contentBooks.style.alignItems = "center";

	books.forEach((book) => {
		const displayBooks = `
    <div style="display:flex; margin:10px;padding:10px;align-items:center; flex-direction:column; height:283px; ${
			book.alreadyRead ? "background:green" : "background:red"
		}" >
    <p>${book.title} - ${book.author} </p>
    <img src="img/${book.image}" style="text-align:center" width="150px">
    </div>
    `;
		contentBooks.innerHTML += displayBooks;
	});
	content.appendChild(title);
	content.appendChild(contentBooks);
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
	{ name: "Chris", job: "Teacher" },
	{ name: "Joanna", job: "Student" },
	{ name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
	{
		title: "The Design of Everyday Things",
		author: "Don Norman",
		alreadyRead: false,
		image: "1.jpg",
	},
	{
		title: "The Most Human Human",
		author: "Brian Christian",
		alreadyRead: true,
		image: "2.jpg",
	},
	{
		title: "The Pragmatic Programmer",
		author: "Andrew Hunt",
		alreadyRead: true,
		image: "3.jpg",
	},
];

exerciseThree(books);
