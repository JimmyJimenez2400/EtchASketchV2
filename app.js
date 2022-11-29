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

function buttonChoice(){
    if(colorMode === "black"){
        this.style.backgroundColor = 'black';
    }
    if(colorMode === "darken"){
        this.style.backgroundColor = "black";
        this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.2;
    }
    if(colorMode === "eraser"){
        this.style.backgroundColor = "white";
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

