import React from 'react';
import classNames from "classnames";

// Props from MazeGrid
const GridCell = ({ borders, index, spritePositions }) => {
  // renders a unique maze every time using the unique maze id we received from the API call 
  const gridCellClass = classNames({
    "Grid-cell": true,
    "border-east": borders.includes("east"),
    "border-west": borders.includes("west"),
    "border-north": borders.includes("north"),
    "border-south": borders.includes("south"),
  });

  return (
    <div className={gridCellClass}>
      {index === spritePositions.end ? "🌈" : null}
      {index === spritePositions.unicorn ? "🦄" : null}
      {index === spritePositions.monster ? "💀" : null}
    </div>
  );
};

export default GridCell;