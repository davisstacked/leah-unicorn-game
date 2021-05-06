import React from 'react';
import TinyUnicorn from "../../Assets/Imgs/smallUnicorn.png";
import ReactFloaterJs from 'react-floaterjs';

const SmallUnicorn = () => {
  return (
    <ReactFloaterJs>
      <img
        className="floating-unicorn pb-4 sm:pb-0 h-32 sm:h-36"
        src={TinyUnicorn}
        alt="small floating unicorn"
      />
    </ReactFloaterJs>
  );
};

export default SmallUnicorn;