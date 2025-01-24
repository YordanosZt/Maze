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

    initDOM();
};

function initDOM() {
    generatorBtns = document.querySelectorAll(".gen");
    solverBtns = document.querySelectorAll(".sol");

    generatorBtns.forEach((btn) => {
        btn.addEventListener("mousedown", () => {
            activeGenerator = btn.id;
            handleGeneratorEvent(activeGenerator);
        });
    });

    solverBtns.forEach((btn) => {
        btn.addEventListener("mousedown", () => {
            console.log("Solver: " + btn.id);
        });
    });
}

function handleGeneratorEvent(active)
{
    // Generators
    switch (active) {
        case "backtracker":
            backtracker(ctx, grid, cols, rows, cellSize);
            break;
        case "prims":
            prims(ctx, grid, cols, rows, cellSize);
            break;
        case "binary":
            binary(ctx, grid, cols, rows, cellSize);
            break;
        case "kruskal":
            kruskal(ctx, grid, cols, rows, cellSize);
            break;

        default:
            break;
    }
}

