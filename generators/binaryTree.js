function binary_generateMaze(ctx, grid, cols, rows, cellSize) 
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
}
