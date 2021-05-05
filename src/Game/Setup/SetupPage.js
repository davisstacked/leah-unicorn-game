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
    <div className="flex flex-col justify-center items-center mt-8">
      <h1>Game Setup</h1>
      <p>Help the Unicorn navigate the maze towards the Rainbow!
      </p>
      <div className="mt-8 flex flex-col sm:grid sm:grid-flow-col sm:grid-cols-3">
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
        <p className="mt-8">Beware of the Skull Monster! 💀
        </p>
      <div className="mt-8 flex flex-col sm:inline-grid sm:grid-cols-2">
        <SmallSkull />
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

