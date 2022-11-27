const gridContainer = document.getElementById('gridContainer');


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



createGrid(2,2);


