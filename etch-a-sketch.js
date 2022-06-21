const container = document.getElementById("grid-container");

const gridSize = (squares) => {
  container.style.setProperty('--grid-rows', squares);
  container.style.setProperty('--grid-cols', squares);
  for (let i = 0; i < (squares * squares); i++) {
    let singleSquare = document.createElement("div");
    singleSquare.innerText = null;
    container.appendChild(singleSquare).className = "grid-item";
  };
};

gridSize(16)
container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "orange";
  }, false);

function newBoardSize() {
    if (input >=2 && input<=100){
        gridSize(input);
        
    }
    else{
        console.log('incorrect number of squares')
    }
    }
