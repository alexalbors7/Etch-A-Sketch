let container = document.querySelector(".container-main");
let button16 = document.querySelector(".sixteen");

function makeGrid(num){
    for (let i = 1; i <= num; i++){
        let newDiv = document.createElement("div");
        newDiv.textContent = i;
        newDiv.classList.add("child");
        container.append(newDiv);
    }
}


button16.addEventListener('click', () => makeGrid(16));