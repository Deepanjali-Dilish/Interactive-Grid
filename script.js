const gridContainer = document.getElementById('grid-container');
const gridSizeInput = document.getElementById('grid-size');
const generateGridButton = document.getElementById('generate-grid');
const errorMessage = document.createElement('div');

function createGrid(size) {
    
    gridContainer.innerHTML = '';


    gridContainer.style.gridTemplateColumns = `repeat(${size}, 50px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 50px)`;

    
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const boxes = document.createElement('div');
            boxes.classList.add('box');
            boxes.dataset.row = row;
            boxes.dataset.col = col;
            gridContainer.appendChild(boxes);
        }
    }


    const cells = document.querySelectorAll('.box');
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            if (!cell.classList.contains("on") && !cell.classList.contains("off")) {
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);
                light(row, col);
            }
        });
    });
}

function light(selectedRow, selectedCol) {
    const cells = document.querySelectorAll('.box');
    cells.forEach((cell) => {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);

        if (!cell.classList.contains("on") && !cell.classList.contains("off")) {
            if (row === selectedRow && col === selectedCol) {
                cell.classList.add('on');
            } else if (
                row === selectedRow ||
                col === selectedCol ||
                Math.abs(row - selectedRow) === Math.abs(col - selectedCol)
            ) {
                cell.classList.add('off');
            }
        }
    });
}

generateGridButton.addEventListener('click', () => {
    const size = parseInt(gridSizeInput.value) || 8; 

    if(size < 1 || size > 10){
        alert('Grid size level is over. please enter a number between 1 and 10')
    }else{
        createGrid(size)
    }

    // createGrid(size)
});

createGrid(8)
