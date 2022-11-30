const gridContainer = document.getElementById('gridContainer');
const allButtons = document.querySelectorAll('button');
let colorMode;

function createGrid(column, row){
    for(let i = 0; i < column; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        gridContainer.appendChild(column);
        for(let j = 0; j < row; j++){
            const row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        }
    }
}    

createGrid(16,16);





const cells = gridContainer.querySelectorAll('.row');

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

