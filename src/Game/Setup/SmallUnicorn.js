import React from 'react';
import TinyUnicorn from "../../Assets/Imgs/smallUnicorn.png";
import ReactFloaterJs from 'react-floaterjs';

const SmallUnicorn = () => {
  return (
    <ReactFloaterJs>
      <img
        className="floating-unicorn h-40"
        src={TinyUnicorn}
        alt="small floating unicorn"
      />
    </ReactFloaterJs>
  );
};

export default SmallUnicorn;