import React from "react";
import Button from "./Button";
import {
  ArrowFatLinesUp,
  ArrowFatLinesDown,
  ArrowFatLinesLeft,
  ArrowFatLinesRight,
} from "phosphor-react";

const MoveButtons = ({ handleMove }) => {
  return (
    <div>
      <Button direction="west">
        <ArrowFatLinesLeft size={24} />
      </Button>
      <Button direction="east">
        <ArrowFatLinesRight size={24} />
      </Button>
      <Button direction="north">
        <ArrowFatLinesUp size={24} />
      </Button>
      <Button direction="south">
        <ArrowFatLinesDown size={24} />
      </Button>
    </div>
  );
};

export default MoveButtons;