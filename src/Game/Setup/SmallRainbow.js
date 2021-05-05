import React from "react";
import Rainbow from "../../Assets/Imgs/rainbow.png";
import ReactFloaterJs from "react-floaterjs";

const SmallRainbow = () => {
  return (
    <ReactFloaterJs>
      <img
        src={Rainbow}
        alt="floating rainbow"
        className="h-40"
      />
    </ReactFloaterJs>
  );
};

export default SmallRainbow;