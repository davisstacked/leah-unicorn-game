import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../Context/GameContext";
import UnicornApi from "../../API/UnicornApi";
import { addProps, getSpritePositions } from "./MazeHelpers";
import { v4 as uuid } from "uuid";
import GridCell from "./GridCell";
import MoveButtons from "./Buttons/MoveButtons";
import Keys from "../Hotkeys/Handlers";
import MoveContext from "../../Context/MoveContext";
import RotatingHorse from "./Spinner";

