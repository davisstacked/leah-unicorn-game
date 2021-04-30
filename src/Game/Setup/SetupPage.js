import React, { useState, useContext } from 'react';
import GameContext from '../../Context/GameContext';
import Form from './Form';
import Maze from '../../Assets/Imgs/Maze.png';
import SmallUnicorn from './SmallUnicorn';

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
    <div>
      <div>
        <SmallUnicorn />
        <p>Help the Unicorn navigate the maze towards the Rainbow.
        </p>
        <img src={Maze} alt="maze" />
        <p>Beware of the Skull Monster! 💀
        </p>
      </div>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  );
};

export default SetupPage;

