import React, { useState, useContext } from 'react';
import GameContext from '../../Context/GameContext';
import Form from './Form';
import Maze from '../../Assets/Imgs/Maze.png';
import SmallUnicorn from './SmallUnicorn';
import SmallRainbow from './SmallRainbow';
import SmallSkull from './SmallSkull';

const SetupPage = () => {
  const { setGameData } = useContext(GameContext);
  const initialState = { name: "Pinkie Pie", difficulty: 0, size: 15 };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGameData({ ...formData, status: "active" });
    setFormData(initialState);
  };

  return (
    <div className="mt-8 text sm:h-screen bg-clouds flex flex-col items-center text-align">
      <h1 className="font-mono text-pink-600 font-black">Game Setup</h1>
      <p>Help the <span className="text-pink-600">UNICORN</span> navigate the <span className="text-pink-600">MAZE</span> towards the <span className="text-pink-600">RAINBOW</span>!
      </p>
      <div className="sm:mt-8 flex flex-col sm:grid sm:grid-flow-col sm:grid-cols-3">
        <SmallUnicorn />
        <div className="flex justify-center" >
          <img
            className="h-40"
            src={Maze}
            alt="maze"
          />
        </div>
        <SmallRainbow />
      </div>
        <p className="mt-8 text-2xl">BEWARE OF THE <span className="text-pink-600">SKULL MONSTER</span>! 💀
        </p>
      <div className="sm:w-3/6 sm:mt-8 flex-col flex sm:flex-row justify-evenly items-center">
        <SmallSkull/>
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default SetupPage;

