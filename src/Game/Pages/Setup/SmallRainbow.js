import React from "react";
import Rainbow from "../../../Assets/Imgs/rainbow.png";
import ReactFloaterJs from "react-floaterjs";

const SmallRainbow = () => {
  return (
    <ReactFloaterJs>
      <img
        src={Rainbow}
        alt="floating rainbow"
        className="pt-3 sm:pt-0 h-32 sm:h-36"
      />
    </ReactFloaterJs>
  );
};

export default SmallRainbow;