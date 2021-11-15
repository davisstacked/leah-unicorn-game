import React from 'react';
import UnicornApi from './UnicornApi';

const unicornApitest = () => {

  console.log(UnicornApi.getMazeCurrentState("1bf56146-7d67-495b-bdf3-bcdf8aa464df"));
  
  console.log(UnicornApi.makeMove({"direction": "south"}, `1bf56146-7d67-495b-bdf3-bcdf8aa464df`))

  return (
    <div>
      
    </div>
  )
}

export default unicornApitest
