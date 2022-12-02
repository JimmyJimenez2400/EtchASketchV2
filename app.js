const gridContainer = document.getElementById('gridContainer');
const allButtons = document.querySelectorAll('.buttons button');
const gridButton = document.querySelector('#grid');
const container = document.getElementById('container').parentNode;

let colorMode;

//reusable grid
function grid(size){
    for(let i = 0; i < size; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        gridContainer.appendChild(column);
        for(let j = 0; j < size; j++){
            const row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        }
    }
}

function getUserValue(){
    do{
        gridDefine = parseInt(prompt("How many columns and rows do you want? Less than 100 \nExample: 2 is 2x2, 4 is 4x4, 16 is 16x16"));
    } while(gridDefine >= 101);

    return gridDefine;
}


function createGrid(){
    let size = getUserValue();
    grid(size);
    const newCells = gridContainer.querySelectorAll(".row");
    newCells.forEach(drawListener);
    
} 

function addButtonEventListeners(){
    allButtons.forEach(button =>{
        button.addEventListener('click', (e)=>{
            colorMode = e.currentTarget.id;
        });
    })
}

function addCellListeners(){
    const cells = document.querySelectorAll('.row');
    cells.forEach(drawListener);
}

function drawListener(cell){
    cell.addEventListener('mouseover', penSelectorThatDraws);
}

function penSelectorThatDraws(event){
    const cell = event.target;
    if(colorMode === "black"){
        cell.style.backgroundColor = 'black';
        cell.style.opacity = "initial";
    }
    if(colorMode === "darken"){
        cell.style.backgroundColor = "black";
        cell.style.opacity = (parseFloat(cell.style.opacity) || 0) + 0.2;
    }
    if(colorMode === "eraser"){
        cell.style.backgroundColor = "";
        cell.style.opacity = "initial";
    }
    if(colorMode === "rainbow"){
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max-min + 1));
        const r = randomBetween(0,255);
        const g = randomBetween(0,255);
        const b = randomBetween(0,255);
        const rgb = `rgb(${r}, ${g}, ${b})`;
        cell.style.backgroundColor = rgb;
    }
}

function replaceGrid(){
    let gridParent = document.getElementById("gridContainer");
    while(gridParent.firstElementChild){
        gridParent.removeChild(gridParent.firstElementChild);
    }
}

function updateGridHandler(){
    replaceGrid();
    createGrid();
}

gridButton.addEventListener('click', updateGridHandler);
grid(4);
addButtonEventListeners();
addCellListeners();
