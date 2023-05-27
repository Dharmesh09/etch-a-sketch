const container = document.getElementById("container");

const DEFAULT_SIZE = 16;

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let total = size*size;
    for (let i = 0; i < total; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      container.appendChild(cell);
    }
  }

// createGrid(DEFAULT_SIZE);

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}