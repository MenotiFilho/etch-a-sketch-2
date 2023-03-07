document.addEventListener("DOMContentLoaded", function () {
	let sizeDefault = document.querySelector(".form-range").value;
	createBoard(sizeDefault);
	let slider = document.querySelector(".form-range");
	slider.addEventListener("click", function () {
		size = document.querySelector(".form-range").value;
		createBoard(size);
	});
});

function createBoard(size) {
	let board = document.querySelector(".board");

	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let numDivs = size * size;
	for (let i = 0; i < numDivs; i++) {
		let div = document.createElement("div");
		div.style.backgroundColor = "yellow";
		board.insertAdjacentElement("beforeend", div);
	}
}
