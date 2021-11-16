import React from "react";
import Death from "../../Assets/Imgs/Death.png";
import ReactFloaterJs from "react-floaterjs"

const LittleDeath = () => {
  return (
  <ReactFloaterJs>
    <img
        className="w-6/12 sm:w-5/12 mb-6 mt-6 sm:ml-6"
        src={Death}
        alt="a cute little grim reaper"
      ></img>
  </ReactFloaterJs>
  )
}

export default LittleDeath;