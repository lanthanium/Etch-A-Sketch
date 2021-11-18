const container = document.querySelector('.container');
let gridCell;

function createGrids(squares)
{ 
    for (let i = 0; i < squares*squares; i++)
    {
        let dimensionsGrid = 600/squares;
        const content = document.createElement('div');
        content.classList.add('cell');
        content.style.width = `${dimensionsGrid}px`
        content.style.height = `${dimensionsGrid}px`
        container.appendChild(content);
    }
    gridCell = document.querySelectorAll('.cell');
    gridCell.forEach((item) => item.addEventListener('click', colorGrid));
    gridCell.forEach((item) => item.addEventListener('mouseover', colorGrid));
}
createGrids(16); //initial grid loadout

//this turns on the drawing mechanism when you click the mouse. 
//when you click again it turns off.
let isDrawing = false;
container.addEventListener('click', (e) => {
    if (isDrawing == false) isDrawing=true;
    else if (isDrawing == true) isDrawing = false;
})

//Event listeners that turn each grid into a color
//using a forEach function to attach the event listener to each grid
function colorGrid(e)
{
    if (isDrawing === true) e.target.style.background = "black";
}

//event listener that updates the amount of squares in the container
//and resets the grid if they click submit or hit enter
const input = document.querySelector('.squares');
input.addEventListener('click', updateValue)
const textInput = document.querySelector('#gridInput');
textInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) updateValue();
})

//this function is called by the user input field, this removes all the current
//nodes and then creates a brand new grid based on the value that was inputted
function updateValue()
{
    let value = parseInt(document.getElementById('gridInput').value);
    while (isNaN(value) || value < 16 || value > 100)
    {
        value = prompt("Invalid: Please enter a number between 16 - 100: ");
    }
    while (container.firstChild)
        {
        container.removeChild(container.firstChild);
        }
        createGrids(value);
    
}

//the clear button which colors all the existing grids white
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    gridCell.forEach((item) =>item.style.background="white")
})