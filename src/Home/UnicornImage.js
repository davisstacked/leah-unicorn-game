import React from 'react';
import Unicorn from '../Assets/Imgs/Unicorn.png';
import ReactFloaterJs from 'react-floaterjs';

const UnicornImage = () => {
  return (
    <ReactFloaterJs>
      <img
        className="w-4/12 sm:w-3/12 self-center"
        src={Unicorn}
        alt="floating unicorn"
      />
    </ReactFloaterJs>
  );
};

export default UnicornImage;