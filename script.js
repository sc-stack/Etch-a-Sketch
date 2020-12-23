const container = document.querySelector(`#container`);
function makeGrid(){ 
for(let i = 0; i< (16*16); i++){
    const div = document.createElement(`div`);
    div.classList.add("cell");
    container.appendChild(div);
    }
}
makeGrid();