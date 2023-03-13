document.addEventListener("DOMContentLoaded", function () {
	let sizeDefault = document.querySelector(".form-range").value;
	createBoard(sizeDefault);
	let slider = document.querySelector(".form-range");
	slider.addEventListener("click", function () {
		size = document.querySelector(".form-range").value;
		createBoard(size);
	});
	let resetButton = document.querySelector(".btn-danger");
	resetButton.addEventListener("click", function () {
		resetBoard();
	});
});

function createBoard(size) {
	let board = document.querySelector(".board");

	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let numDivs = size * size;
	for (let i = 0; i < numDivs; i++) {
		let div = document.createElement("div");
		div.setAttribute("id", "boardDiv");
		div.addEventListener("mouseover", colorDiv);

		board.insertAdjacentElement("beforeend", div);
	}
}

function colorDiv() {
	let theColor = document.getElementById("colorWheel").value;
	this.style.backgroundColor = theColor;
}

let theInput = document.getElementById("colorWheel");
theInput.addEventListener(
	"input",
	function () {
		let theColor = theInput.value;
		console.log(theColor);
		return theColor;
	},
	false
);

function resetBoard() {
	let board = document.querySelector(".board");
	let divs = board.querySelectorAll("div");
	for (let i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = "#ffffff";
	}
}
