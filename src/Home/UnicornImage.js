import React from 'react';
import Unicorn from '../Assets/Imgs/Unicorn.png';
import ReactFloaterJs from 'react-floaterjs';

const UnicornImage = () => {
  return (
    <ReactFloaterJs>
      <img
        src={Unicorn}
        alt="floating unicorn"
      />
    </ReactFloaterJs>
  );
};

export default UnicornImage;