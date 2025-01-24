function backtracker_generateMaze(ctx, grid, cols, rows, cellSize)
{

    // Init
    for (let i = 0; i < cols; i++)
    {
        grid[i] = [];

        for (let j = 0; j < rows; j++) 
        {
            // 1 - wall
            // 0 - passage

            grid[i][j] = 1;
            //grid[i][j] = (i % 2 !== 0 && j % 2 !== 0) ? 0 : 1;
        }
    }

    // Start and End
    grid[0][1] = 0;
    grid[cols - 1][rows - 2] = 0;

    let visitedCells = [];
    let current = {
        i: 1,
        j: 1
    };

    visitedCells.push(current);

    while (visitedCells.length > 0)
    {
        current = visitedCells.pop();
        grid[current.i][current.j] = 2;

        //let unvisited = getUnvisitedNeighbors(current.i, current.j, grid, cols, rows);

        let top, right, bottom, left;

        if (current.j > 1) top = { i: current.i, j: current.j - 2 };
        if (current.i < cols - 2) right = { i: current.i + 2, j: current.j };
        if (current.j < rows - 2) bottom = { i: current.i, j: current.j + 2 };
        if (current.i > 1) left = { i: current.i - 2, j: current.j };

        let unvisited = [];

        if (top && grid[top.i][top.j] === 1)
            unvisited.push(top);

        if (right && grid[right.i][right.j] === 1)
            unvisited.push(right);

        if (bottom&& grid[bottom.i][bottom.j] === 1)
            unvisited.push(bottom);

        if (left && grid[left.i][left.j] === 1)
            unvisited.push(left);

        if (unvisited.length > 0)
        {
            visitedCells.push(current);

            let randIdx = Math.floor(Math.random() * unvisited.length);
            let next = unvisited[randIdx];

            // Remove Wall
            if (next === top) grid[current.i][current.j - 1] = 0;
            if (next === right) grid[current.i + 1][current.j] = 0;
            if (next === bottom) grid[current.i][current.j + 1] = 0;
            if (next === left) grid[current.i - 1][current.j] = 0;

            visitedCells.push(next);
        }
        else
        {
            grid[current.i][current.j] = 0;
        }
    }
    
    // Draw - placeholder
    for (let i = 0; i < cols; i++)
    {
        for (let j = 0; j < rows; j++)
        {
            ctx.save();

            ctx.fillStyle = grid[i][j] === 0 ? "white" : "black";
            ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);

            ctx.restore();
        }
    }
}
