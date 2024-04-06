const grid = document.querySelector("div#grid");

let gridWidth = 512;
let gridSize = 16;

function generateGrid(size)
{   
    const gridRows = [];

    for (let j = 0; j < size; j++)
    {   
        const tempRow = document.createElement("div");
        tempRow.id = "grid-row";
        gridRows.push(tempRow);

        grid.appendChild(tempRow);

        for (let i = 0; i < size; i++)
        {
            let tempDiv = document.createElement('div');
            tempDiv.id = 'grid-div';
            let divSize = gridWidth / size;
            let divSizeString = divSize + "px";
            tempDiv.style.width = divSizeString;
            tempDiv.style.height = divSizeString;
            tempDiv.addEventListener('mouseover', func = () => {tempDiv.style.backgroundColor = "purple"});

            gridRows[j].appendChild(tempDiv);
        }
    }
}

function clearGrid()
{
    while (grid.firstChild)
    {
        grid.removeChild(grid.firstChild);
    }
}

function changePaintColor(domObject, colorString)
{
    domObject.style.backgroundColor = colorString;
}

generateGrid(gridSize);

function rollRandomNumber(max)
{
    return Math.floor(Math.random() * max);
}


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

const wackadooModeBtn = document.querySelector("button#wackadoo");

wackadooModeBtn.addEventListener('click', func = () => 
{
    for(let i = 0; i < grid.children.length; i++)
    {  
        for (let j = 0; j < grid.children.item(i).children.length; j++)
        {   
            
            let tempDiv = grid.children.item(i).children.item(j);
            tempDiv.addEventListener('mouseover', func = () => 
        {
            let r = rollRandomNumber(255);
            let g = rollRandomNumber(255);
            let b = rollRandomNumber(255);

            let rgbString = `rgb(${r}, ${g}, ${b})`;
            changePaintColor(tempDiv, rgbString);
        })
        }
    }
})

const normalModeBtn = document.querySelector("button#normal-mode");

normalModeBtn.addEventListener('click', func = () => {
    for(let i = 0; i < grid.children.length; i++)
    {  
        for (let j = 0; j < grid.children.item(i).children.length; j++)
        {   
            let tempDiv = grid.children.item(i).children.item(j);
            tempDiv.addEventListener('mouseover', func = () => 
        {
            changePaintColor(tempDiv, "purple");
        })
        }
    }
})
