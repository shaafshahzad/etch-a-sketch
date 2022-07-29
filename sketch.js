let color = 'black';
let currentColor = 'black';
const colorPicker = document.getElementById('colorPicker');
colorPicker.oninput = (e) => changeColor(e.target.value);

function populateGrid(size) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) { 
        let square = document.createElement("div");
        square.setAttribute("id", "cell");
        square.addEventListener('mouseover', colorSquare);
        square.addEventListener('mousedown', colorSquare);
        square.style.backgroundColor = "white";
        grid.insertAdjacentElement('beforeend', square); 
    } 
}

populateGrid(16);

function changeSize(input) {
    if (input >= 2 & input <= 64) {
        populateGrid(input);
        currentSize.setAttribute('style', 'white-space: pre;');
        currentSize.textContent = 'Size: ' + input + ' x ' + input;
    } else {
        alert("Value can only be between 2-64");
    }
}

let mouseDown = false 
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function colorSquare(e) {
    if (e.type === 'mouseover' && !mouseDown) return

    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;  
    } else if (color === 'white') {
        this.style.backgroundColor = 'white';
    } else {   
        this.style.backgroundColor = currentColor;
    }
}

function changeColor(choice) {

    color = choice;

    if (choice === 'random') {
        currentMode.setAttribute('style', 'white-space: pre;');
        currentMode.textContent = 'Current Mode:\r\n';
        currentMode.textContent += 'Rainbow Brush';
    } else if (choice === 'white') {
        currentMode.setAttribute('style', 'white-space: pre;');
        currentMode.textContent = 'Current Mode:\r\n';
        currentMode.textContent += 'Eraser';
    } else {
        currentMode.setAttribute('style', 'white-space: pre;');
        currentMode.textContent = 'Current Mode:\r\n';
        currentMode.textContent += 'Colored Brush';
    }
}

function resetGrid() {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white'); 
}

function changeHex(pickerColor) {
    currentColor = pickerColor;
    return currentColor;
}