// rules for game of life:
// Any live cell with fewer than two live neighbors dies, as if by underpopulation.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

class Cell {
    constructor(x, y, cellSize, isAlive) {
        this.isAlive = false;
        this.x = x;
        this.y = y;
        this.cellSize = cellSize;
    }

    drawCell() {
        if (this.isAlive) {
            stroke(0);
            fill (255);
        } else {
            fill(50);
        }
        rect (this.x, this.y, this.cellSize);
    }

}