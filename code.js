let etchSize = 16; //H & W for the grid

const etchContainer = document.getElementById("etchContainer");
const reStart = document.createElement('h1');
const buttons = document.getElementById('buttons');

reStart.classList.add('reStart', 'btn');
reStart.textContent = "RESET";
reStart.addEventListener('click', byClick);
reStart.addEventListener('click', () => reset());
reStart.addEventListener('transitionend', removeTransition);

buttons.appendChild(reStart);

function byClick(e) {
    this.classList.add('playing');
}

function reset() {
    clearGrid();
    etchSize = window.prompt("Please enter the size of your grid (a number between 4 and 100)");
    parseInt(etchSize);
    console.log(typeof etchSize);
    console.log(etchSize);
    while (isNaN(etchSize) || etchSize<4 || etchSize>100) {
        etchSize = parseInt(window.prompt("Please enter a valid value for the size of your grid (a number between 4 and 100), or if you're bored, just close this page!"));
    }
    setGrid(etchSize);
}

function clearGrid() {
    etchContainer.innerHTML = ''
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function setGrid(gridSize) {
    etchContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (i = 0; i < gridSize * gridSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        gridElement.addEventListener('mouseover', changeBackground);
        etchContainer.appendChild(gridElement);
    }
}

function changeBackground(e) {
    e.target.style.backgroundColor = 'black';
}

window.onload = () => {
    setGrid(etchSize);
}
/*
const buttonAnimation = document.querySelectorAll(".btn");
buttonAnimation.forEach(btn => btn.addEventListener('transitionend', removeTransition));
buttonAnimation.forEach(btn => btn.addEventListener('click', byClick));
*/
