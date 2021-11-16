import React from "react";
import WinUnicorn from "../../../Assets/Images/WinGame.png";
import ReactFloaterJs from "react-floaterjs";

const WinUnicornImage = () => {
  return (
    <ReactFloaterJs>
      <img
        className="w-10/12 sm:w-5/12 mb-6 mt-6 sm:ml-6"
        src={WinUnicorn}
        alt="happy unicorn puking rainbow"
      />
    </ReactFloaterJs>
  );
};

export default WinUnicornImage;