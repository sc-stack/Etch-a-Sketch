const container = document.querySelector(`#container`);
let squares = 16;
let color = "black";
//makes the grid
function makeGrid(){ 
for(let i = 0; i< (squares*squares); i++){
    const div = document.createElement(`div`);
    div.classList.add("cell");
    container.setAttribute('style', `grid-template-columns : repeat(${squares}, 1fr); grid-template-rows : repeat(${squares}, 1fr)`);
    div.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = color;
    });
    container.appendChild(div);
    }
}
makeGrid();
const button = document.querySelector(`#btn`);
button.addEventListener('click', () => {
    let question = parseInt(prompt("How many squares per side?"));
    while(question > 100){
        question = parseInt(prompt("How many squares per side?"));
    }
    squares = question;
    while(container.firstElementChild){
        container.removeChild(container.lastElementChild);
    }
    makeGrid();
});
//changes the color 
const blue = document.querySelector(`#blue`);
blue.addEventListener('click', function(e) {
    color = "blue";
});
const red = document.querySelector(`#red`);
red.addEventListener('click', () => {
    color = "red";
});
