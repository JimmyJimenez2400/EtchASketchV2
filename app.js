const gridContainer = document.getElementById('gridContainer');
const allButtons = document.querySelectorAll('.buttons button');
const gridButton = document.querySelector('#grid');
const container = document.getElementById('container').parentNode;

let colorMode;

//Update Grid Button
gridButton.addEventListener('click', updateGridHandler);


function defaultGrid(gridDefine){
    for(let i = 0; i < gridDefine; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        gridContainer.appendChild(column);
        for(let j = 0; j < gridDefine; j++){
            const row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        }
    }
}

defaultGrid(4);

function createGrid(){
    const cells = gridContainer.querySelectorAll('.row');
    let gridDefine;
    do{
        gridDefine = parseInt(prompt("How many columns and rows do you want? \nExample: 2 is 2x2, 4 is 4x4, 16 is 16x16"));
    } while(gridDefine >= 101);
    for(let i = 0; i < gridDefine; i++){
        const newColumn = document.createElement('div');
        newColumn.classList.add('updatedColumn');
        gridContainer.appendChild(newColumn);
        for(let j = 0; j < gridDefine; j++){
            const newRow = document.createElement('div');
            newRow.classList.add('updatedRow');
            newColumn.appendChild(newRow);
        }
    }

    const newCells = gridContainer.querySelectorAll(".updatedRow");
    newCells.forEach(addMouseOver);
} 



const cells = document.querySelectorAll('.row');

allButtons.forEach(button =>{
    button.addEventListener('click', (e)=>{
        colorMode = e.currentTarget.id;
        console.log(colorMode);
        cells.forEach(addMouseOver);
    });
})

function addMouseOver(cell){
    cell.addEventListener('mouseover', buttonChoice);
}

function buttonChoice(event){
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
    console.log(`First Child: ${gridParent.firstChild}`);
    console.log(`First Element Child:${gridParent.firstElementChild}`);
    while(gridParent.firstElementChild){
        gridParent.removeChild(gridParent.firstElementChild);
    }

    //remove the columns and children of it, and show new columns in grid
    console.log(gridParent);
    
}

function updateGridHandler(){
    replaceGrid();
    createGrid();
}




// console.log(cells);

// cells.forEach(cell =>{
//     cell.addEventListener('mouseover', (e)=>{
//         setColorBlack(e);
        
//     })
// })









// function setToEraser(event){
//     event.currentTarget.style.backgroundColor="white";
// }



 



// cells.forEach((cell)=>{
//     cell.addEventListener('mouseover', setColorBlack);
// });

// // function setColorBlack(){
// //     this.style.backgroundColor = "black";
// // }


