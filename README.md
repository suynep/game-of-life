* Conway's Game of Life

Conway's game of life is a 2-D /Cellular Automata/. Cellular Automaton is a self regulating entity which progresses generationally following a set of rules.

** Rules for Conway's Game of Life

+ Any live cell with fewer than two live neighbors dies, as if by underpopulation.
+ Any live cell with two or three live neighbors lives on to the next generation.
+ Any live cell with more than three live neighbors dies, as if by overpopulation.
+ Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

** How to Implement

*** My Approach
Create two classes, one for the Global Grid (~class Grid~) and one for the individual cell(~class Cell~). [ /Note that this could've been done by creating a single ~Cell~ class and working from that to create a ~Grid~ replica, however I'm too lazy to think tha-at far/ ].

*** A Better Approach
+ eager to know


![](https://github.com/suynep/game-of-life/blob/main/assets/game-of-life.gif)
