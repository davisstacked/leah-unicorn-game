import React from 'react';
import Unicorn from '../Assets/Imgs/Unicorn.png';
import ReactFloaterJs from 'react-floaterjs';

const UnicornImage = () => {
  return (
    <ReactFloaterJs>
      <img
        className="w-2/5 sm:w-1/4 md:w-1/6 self-center"
        src={Unicorn}
        alt="floating unicorn"
      />
    </ReactFloaterJs>
  );
};

export default UnicornImage;