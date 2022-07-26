function populateGrid(size) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) { 
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        grid.insertAdjacentElement('beforeend', square);
    } 
}

populateGrid(16);

function changeSize(input) {
    if (input >= 2 || input <= 64) {
        populateGrid(input);
    } else {
        console.log("Too many squares!");
    }
}