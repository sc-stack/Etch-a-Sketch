const container = document.querySelector(`#container`);
let squares = 16;
let color = "black";
//makes the grid
function makeGrid(){ 
container.setAttribute('style', `grid-template-columns : repeat(${squares}, 1fr); grid-template-rows : repeat(${squares}, 1fr)`);
for(let i = 0; i< (squares*squares); i++){
    const div = document.createElement(`div`);
    div.classList.add("cell");
    let opac = .1;
    //opacity added so that it takes 10 passes through the cell to fully darken the intended color
    div.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = color;
        e.target.style.opacity = opac;
        if(opac < 1) {
           opac += .1;
        }
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
    color = "black";
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
//needs optimization to show rainbow colors

