const container = document.querySelector("div#container");

let gridWidth = 512;
let gridSize = 16;


function generateGrid(size)
{   
    const containerRows = [];
    
    for (let j = 0; j < size; j++)
    {   
        const tempRow = document.createElement("div");
        tempRow.id = "grid-row";
        containerRows.push(tempRow);

        container.appendChild(tempRow);

        for (let i = 0; i < size; i++)
        {
            let tempDiv = document.createElement('div');
            tempDiv.id = 'grid-div';
            let divSize = gridWidth / size;
            let divSizeString = divSize + "px";
            tempDiv.style.width = divSizeString;
            tempDiv.style.height = divSizeString;
            tempDiv.addEventListener('mouseover', func = () => {tempDiv.style.backgroundColor = "purple"});

            containerRows[j].appendChild(tempDiv);
        }
    }
}

function clearGrid()
{
    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}

generateGrid(gridSize);


const cSizeButton = document.querySelector("button#c-size");

cSizeButton.addEventListener('click', func = () => { 
    let num = 0;
    do {
        num = prompt("Enter pixel dimension: ")
    } while (num > 100);
    
    gridSize = num;
    clearGrid();
    generateGrid(gridSize);
})

// last updated 4/3/2024 
// coded button and working on onclick function for button,
// need to delete grid and reload a grid with inputted number
// IDEA: make a generate() function from grid generation at the beginning
// that takes number parameter and call generate() in onClick function

