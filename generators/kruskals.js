function kruskals(ctx, grid, cols, rows, cellSize)
{
    // Init
    for (let i = 0; i < cols; i++)
    {
        grid[i] = [];

        for (let j = 0; j < rows; j++)
        {
            //grid[i][j] = 1;
            grid[i][j] = (i % 2 !== 0 && j % 2 !== 0) ? 0 : 1;
        }
    }

    // Algorithm


    // Draw
    for (let i = 0; i < cols; i++)
    {
        for (let j = 0; j < rows; j++)
        {
            ctx.save();

            ctx.fillStyle = grid[i][j] === 0 ? "white" : "black";
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);

            ctx.restore();
        }
    }
}
