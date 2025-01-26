function prims(ctx, grid, cols, rows, cellSize) 
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

    // Algorithm Initials
    let walls = [];
    let first = {
        i: 1,
        j: 1
    };

    grid[first.i][first.j] = 0;
    walls.push({ i: first.i + 1, j: first.j });
	walls.push({ i: first.i, j: first.j + 1 });

    // Algorithm
    while (walls.length > 0)
    {
        let randIdx = Math.floor(Math.random() * walls.length);
        let randWall = walls[randIdx];

        let unvisited = getUnvisitedWallNeighbors(randWall.i, randWall.j, grid, cols, rows);

        if (unvisited.length === 1)
        {
            let cell = unvisited[0];

            grid[randWall.i][randWall.j] = 0;
            grid[cell.i][cell.j] = 0;

            if (cell.i > 0)         walls.push( { i: cell.i - 1, j: cell.j } );
			if (cell.i < cols - 1)  walls.push( { i: cell.i + 1, j: cell.j } );
			if (cell.j > 0)         walls.push( { i: cell.i, j: cell.j - 1 } );
			if (cell.j < rows - 1)  walls.push( { i: cell.i, j: cell.j + 1 } );
        }

        walls.splice(randIdx, 1);
    }

    // Draw
    for (let i = 0; i < cols; i++)
	{
		for (let j = 0; j < rows; j++)
		{
			ctx.save();

			ctx.fillStyle = grid[i][j] == 0 ? "white" : "black";
			ctx.fillRect(i*cellSize, j*cellSize, cellSize, cellSize);

			ctx.restore();
		}
	}
}
