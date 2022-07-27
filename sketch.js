let color = 'black';
const colorPicker = document.getElementById('colorPicker')
colorPicker.oninput = (e) => changeColor(e.target.value)


function populateGrid(size) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) { 
        let square = document.createElement("div");
        square.addEventListener('mouseover', colorSquare);
        square.addEventListener('mouseDown', colorSquare);
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement('beforeend', square);
    } 
}

populateGrid(16);

function changeSize(input) {
    if (input >= 2 &  input <= 64) {
        populateGrid(input);
    } else {
        alert("Value can only be between 2-64");
    }
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function colorSquare() {
    if (mouseDown) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetGrid() {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white'); 
}