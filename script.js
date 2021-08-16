const container = document.querySelector("#container");
const childId = "box";
const clearBtn = document.querySelector("#eraser");
const zoomOutBtn = document.querySelector("#z-out");
const resetBtn = document.querySelector("#reset");
let gridAmt = 16;


function createGridAmount(amount) {

    if (amount > 56) {
        amount = 56;
        zoomOutBtn.disabled = true;
    }
    let limit = Math.pow(amount, 2);

    container.setAttribute("style", `--grid-amount: ${amount}`);
    for (let count = 1; count <= limit; count++) {
        let temp = document.createElement('div');
        temp.setAttribute("id", childId + count);
        container.appendChild(temp);
    }

}

/*
Function that creates a grid based on the amount given and then 
sets a listener on the newly created grid to change the color 
when when your mouse passes over them.
*/
function loadGrid(defaultGrid) {
    createGridAmount(defaultGrid);
    document.querySelectorAll("#container>div").forEach(box => {
        box.addEventListener("mouseover", changeColor);
    });
}

/*
Function that removes the old grid and creates the new one.
*/
function zoomOut() {
    removeOldGrid();
    gridAmt += 10
    loadGrid(gridAmt)
}

function removeOldGrid() {
    clearColor();
    document.querySelectorAll("#container>div").forEach(n => n.remove());
}

function changeColor() {
    this.setAttribute("style", `background-color: ${randomRGBA()}`);
}

/*
Function that generates a random RGBA color.
*/
function randomRGBA(e) {
    let red = Math.floor(Math.random() * 256);;
    let green = Math.floor(Math.random() * 256);;
    let blue = Math.floor(Math.random() * 256);;
    return `rgba(${red}, ${green}, ${blue})`;

}

function clearColor(e) {
    document.querySelectorAll("#container>div").forEach(box => {
        box.setAttribute("style", "background-color: white");
    });

}

function resetGrid(e) {
    removeOldGrid();
    gridAmt = 16;
    loadGrid(gridAmt);
    zoomOutBtn.disabled = false;
}


loadGrid(gridAmt);
zoomOutBtn.addEventListener("click", zoomOut);
clearBtn.addEventListener("click", clearColor);
resetBtn.addEventListener("click", resetGrid);