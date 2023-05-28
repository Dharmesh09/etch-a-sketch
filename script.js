const container = document.getElementById("container");
let btn = document.getElementById("size");
const DEFAULT_SIZE = 16;
// const DEFAULT_COLOUR = black; 
let mouseDown = false;

let size = 16;

function askSize(){
    size = prompt("Please enter required size: ");
    if(size>100 || size < 1){
        alert("Size must be between 1 and 100!");
        askSize();
    }
    createGrid(size);
}

function createGrid(size) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let total = size*size;
    for (let i = 0; i < total; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        container.appendChild(cell);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover'){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}
// createGrid(DEFAULT_SIZE);

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}