const container = document.querySelector("#container");
const childId = "box";
const clearBtn = document.querySelector("#clear");
const zoomOutBtn = document.querySelector("#z-out");



for (let count = 1; count <=256; count++){
    let temp = document.createElement('div');
    temp.setAttribute("id", childId+count);
    container.appendChild(temp);
}

function changeColor(e){
    this.setAttribute("style", `background-color: ${randomRGBA()}`);
}

function randomRGBA(){
    let red = Math.floor(Math.random() * 256);;
    let green = Math.floor(Math.random() * 256);;
    let blue = Math.floor(Math.random() * 256);;
    return  `rgba(${red}, ${green}, ${blue})`;

}


function clear(e){
    boxes.forEach(box => {
        box.setAttribute("style", "background-color: white");
    });
    
}
const boxes = document.querySelectorAll("#container>div");
boxes.forEach(box => {
    box.addEventListener("mouseover", changeColor);
});

clearBtn.addEventListener("click", clear);


