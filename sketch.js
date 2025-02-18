const makeGrid = (cols, rows) =>{
  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    // Fill the array with 0s,
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

let grid = []; // the grid that will be drawn on top of the canvas
let cell = 5; // the size of each cell
let cols = 0, rows = 0;

const setup = () => {
  createCanvas(800, 600) // this is a p5 that will be the window -- doing this without p5 would be an event listener on a designated div to be the canvas
  cols = width / particle;
  rows = height / particle;
  grid = makeGrid(cols, rows);
}

// draw is a built in p5 function that runs continuously on the canvas, removing the need to write an update function
const draw = () => {
  background(0); // black background

  if (mouseIsPressed){ // mouseIsPressed is a built in p5 variable -- replicating it with no library you would need to add an HTML event listener for "mousedown" & "mouseup"
    let mouseCol = floor(mouseX / cell);
    let mouseRow = floor(mouseY / cell);

    

  }
}

 



