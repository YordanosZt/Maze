// Neighbors 
function getUnvisitedNeighbors(i, j, grid, cols, rows, shift=2) 
{ 
    let top, right, bottom, left;

    if (j > 1)        top = { i: i, j: j - shift };
    if (i < cols - 2) right = { i: i + shift, j: j };
    if (j < rows - 2) bottom = { i: i, j: j + shift };
    if (i > 1)        left = { i: i - shift, j: j };

    let unvisited = [];

    if (top && grid[top.i][top.j] === 1)          unvisited.push(top);
    if (right && grid[right.i][right.j] === 1)    unvisited.push(right);
    if (bottom&& grid[bottom.i][bottom.j] === 1)  unvisited.push(bottom);
    if (left && grid[left.i][left.j] === 1)       unvisited.push(left);

    return unvisited;
}

function getUnvisitedImmediateNeighbors(i, j, grid, cols, rows)
{
    return getUnvisitedNeighbors(i, j, grid, cols, rows, 1);
}

function getUnvisitedWallNeighbors(i, j, grid, cols, rows)
{
    let top, right, bottom, left;
    let unvisited = [];

    // DIVIDES HORIZONTALLY
    if (i % 2 === 0 && j % 2 !== 0)
    {
        if (i > 0)        left  = { i: i - 1, j: j };
        if (i < cols - 1) right = { i: i + 1, j: j }
    }

    // DIVIDES VERTICALLY
    if (i % 2 !== 0 && j % 2 === 0)
    {
        if (j > 0)        top     = { i: i, j: j - 1 };
        if (j < rows - 1) bottom  = { i: i, j: j + 1 }
    }

    if (right && grid[right.i][right.j] === 1)    unvisited.push(right);
    if (left && grid[left.i][left.j] === 1)       unvisited.push(left);
    if (top && grid[top.i][top.j] === 1)          unvisited.push(top);
    if (bottom && grid[bottom.i][bottom.j] === 1) unvisited.push(bottom);

    return unvisited;
}
