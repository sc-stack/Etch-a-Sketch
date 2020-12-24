const container = document.querySelector(`#container`);
let squares = 16;
function makeGrid(){ 
for(let i = 0; i< (squares*squares); i++){
    const div = document.createElement(`div`);
    div.classList.add("cell");
    container.setAttribute('style', `grid-template-columns : repeat(${squares}, 1fr); grid-template-rows : repeat(${squares}, 1fr)`);
    div.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = "black";
    });
    container.appendChild(div);
    }
}
makeGrid();
const button = document.querySelector(`#btn`);
button.addEventListener('click', () => {
    let question = parseInt(prompt("How many squares per side?"));
    squares = question;
    while(container.firstElementChild){
        container.removeChild(container.lastElementChild);
    }
    makeGrid();
});
