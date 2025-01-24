function binary(ctx, grid, cols, rows, cellSize) 
{
    // Init
    for (let i = 0; i < cols; i++)
    {
        grid[i] = [];

        for (let j = 0; j < rows; j++)
        {
            grid[i][j] = 1;
        }
    }

    // Start and End
    grid[0][1] = 0;
    grid[cols - 1][rows - 2] = 0;

    // Remove Bottom or Right Wall
    for (let i = 1; i < cols; i += 2)
    {
        for (let j = 1; j < rows; j += 2)
        {
            grid[i][j] = 0;

            let isRight = Math.random() > 0.5;
            
            if (i === cols - 2) isRight = false;
            else if (j === rows - 2) isRight = true;

            if (i === cols - 2 && j === rows - 2) continue;

            if (isRight)
                grid[i + 1][j] = 0;
            else
                grid[i][j + 1] = 0;
        }
    }

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
