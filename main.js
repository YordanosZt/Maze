let canvas;
let ctx;

let cellSize = 10;
let cols;
let rows;

let grid = [];

let generatorBtns;
let solverBtns;

let activeGenerator = "none";

window.onload = () => {
    canvas = document.getElementById("mazeCanvas");
    ctx = canvas.getContext("2d");

    cols = Math.floor(canvas.width / cellSize);
    rows = Math.floor(canvas.height / cellSize);

    start();
};

function start() {
    initDOM();

    initGrid();

    requestAnimationFrame(update);
}

function update() {
    // Generators
    switch (activeGenerator) {
        case "backtracker":
            backtracker_generateMaze();
            break;
        case "prims":
            prims_generateMaze();
            break;
        case "binary":
            binary_generateMaze();
            break;

        default:
            break;
    }

    draw(ctx, grid, cellSize);

    requestAnimationFrame(update);
}

function initDOM() {
    generatorBtns = document.querySelectorAll(".gen");
    solverBtns = document.querySelectorAll(".sol");

    generatorBtns.forEach((btn) => {
        btn.addEventListener("mousedown", () => {
            activeGenerator = btn.id;
        });
    });

    solverBtns.forEach((btn) => {
        btn.addEventListener("mousedown", () => {
            console.log("Solver: " + btn.id);
        });
    });
}

function initGrid() {
    for (let i = 0; i < cols; i++) {
        grid[i] = [];

        for (let j = 0; j < rows; j++) {
            // 0 - passage
            // 1 - wall

            // grid[i][j] = 0;
            grid[i][j] = i % 2 !== 0 && j % 2 !== 0 ? 0 : 1;
        }
    }
}

function draw(ctx, grid, cellSize) {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            ctx.save();

            ctx.fillStyle = grid[i][j] == 0 ? "white" : "black";
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);

            ctx.restore();
        }
    }
}
