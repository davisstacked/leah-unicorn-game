// adds index number and "east" and "south" to grid data array whenever appropriate
// "east" and "south" used to render borders in GridCell.js (only need to add on the far right, and bottom of the maze. )
// index used to track sprite positions in GridCell.js
export const addProps = (arr, size) => {
  for (let cell of arr) {
    // adds east and south
    const index = arr.indexOf(cell);

    // If we are on the east side of the maze, add east to the array to add the east wall of the maze.  
    // For example: if the size were 15 for the maze (15 X 15) The right-most index in the second row would be 29. Add one 30. divide by 15 for a zero remainder.
    if ((index + 1) % size === 0) {
      cell.push('east');
    }
    // If the index is located in the bottom row of the maze grid, add south.
    if (index >= Math.pow(size, 2) - size) {
      cell.push('south');
    }
    // adds index number
    cell.push(index);
  }
  return arr;
};

// retrieves sprites positions (unicorn, monster, end) from API call result
// The full API call includes the maze etc.
// This function simplifies our object to only sprite positions. 
export const getSpritePositions = (res) => {
  return {
    end: res['end-point'][0],
    monster: res.domokun[0],
    unicorn: res.pony[0],
  };
};