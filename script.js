
let grid;
let initArr = [];
let nextArr = [];
let cellSize = 10;

function setup() {
	frameRate(10);
	
	createCanvas(400, 400);
	grid = new Grid(width, cellSize);

	for (let i = 0; i < grid.cellNum; i++) {
		let dArr = [];

		for (let j = 0; j < grid.cellNum; j++) {
			let ch = random(100);
			let cell = new Cell(i * cellSize, j * cellSize, cellSize);
			if (ch < 6) cell.isAlive = true;
			dArr.push(cell);
		}
		initArr.push(dArr);
	}
	nextArr = initArr; // firstShit
}

function checkNeighbors(posx, posy) {

	// prevX = (posx - 1) % grid.cellNum;
	// nextX = (posx + 1) % grid.cellNum;
	// prevY = (posy - 1) % grid.cellNum;
	// nextY = (posy + 1) % grid.cellNum;
	let sum = 0;

	for (let i = -1; i <= 1; i++) {
		for (let j = -1; j <= 1; j++) {
			if ((i != 0 || j != 0) && initArr[(posx + i + grid.cellNum) % grid.cellNum][(posy + j + grid.cellNum) % grid.cellNum].isAlive) {
				sum += 1;
			}
		}
	}

	if (sum < 2) {
		nextArr[posx][posy].isAlive = false;
	} else if (sum == 2) {
		nextArr[posx][posy].isAlive = initArr[posx][posy].isAlive;
	} else if (sum == 3) {
		nextArr[posx][posy].isAlive = true;
	} else {
		nextArr[posx][posy].isAlive = false;
	}
}

function draw() {
	background(50);
	grid.createGrid();

	for (let i of initArr) {
		for (let j of i) {
			j.drawCell();
		}
	}

	for (let i = 0; i < grid.cellNum; i++) {
		for (let j = 0; j < grid.cellNum; j++) {
			checkNeighbors(i, j);
		}
	}

	initArr = nextArr;

}

function mousePressed() {
	let i = Math.floor(mouseX / grid.cellSize);
	let j = Math.floor(mouseY / grid.cellSize);
	initArr[i][j].isAlive = true;
}
