const container = document.getElementById("container");

const DEFAULT_SIZE = 16;
let mouseDown = false;

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let total = size*size;
    for (let i = 0; i < total; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('mouseover', changeColor);
      cell.addEventListener('mousedown', changeColor);
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