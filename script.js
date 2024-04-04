const container = document.querySelector("div#container");

const containerRows = [];

for (let j = 0; j < 16; j++)
{   
    const tempRow = document.createElement("div");
    tempRow.id = "grid-row";
    containerRows.push(tempRow);

    container.appendChild(tempRow);

    for (let i = 0; i < 16; i++)
    {
        let tempDiv = document.createElement('div');
        tempDiv.id = 'grid-div';
        tempDiv.addEventListener('mouseover', func = () => {tempDiv.style.backgroundColor = "purple"});

        containerRows[j].appendChild(tempDiv);
    }
}
