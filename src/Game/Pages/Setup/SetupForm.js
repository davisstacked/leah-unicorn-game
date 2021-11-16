import React, { useState, useContext } from 'react';
import GameContext from '../../../Context/GameContext';

const SetupForm = () => {
  const { setGameData } = useContext(GameContext)

  // This is everything set to zero. (size 15 is the smallest the maze can be). Pinkie pie is the default value chosen for name. 
  const initialState = { name: "Pinkie Pie", difficulty: 0, size: 15 };
  const [formData, setFormData] = useState(initialState);

  // While inputting data into the form
  // what you choose (e.target) will alter the initial state object. replacing whatever is targeted in formData. 
  const handleChange = (e) => {
    // deconstructs e.target.value and e.target.name
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // when you submit a form, updates the Game Context with user choices entered into the form. And by changing the status to "active", switches components now to the maze page component. 
  const handleSubmit = (e) => {
    e.preventDefault();
    setGameData({ ...formData, status: "active" });
    setFormData(initialState);
  };

  return (
    <div className="formContainer flex justify-between items-center shadow-lg">
      <form
        className="gradient-orchid flex flex-col border-2 border-black rounded px-4 py-1 justify-items-center items-center shadow-md"
        onSubmit={handleSubmit}
      >
        <h3 className="font-mono text-pink-600 font-black mb-2">Game Settings</h3>
        <div className="flex items-center justify-between mb-2">
          <label
            className="mr-5"
            htmlFor="name"
          >
            Name
          </label>
          <select
            name="name"
            id="name"
            className="px-3 rounded-xl bg-pink-50"
            onChange={handleChange}>
            <option value="Pinkie Pie">Pinkie Pie</option>
            <option value="Twilight Sparkle">Twilight Sparkle</option>
            <option value="Fluttershy">Fluttershy</option>
            <option value="AppleJack">Applejack</option>
            <option value="Rainbow Dash">Rainbow Dash</option>
            <option value="Rarity">Rarity</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label
            className="mr-2"
            htmlFor="difficulty">
            Difficulty
          </label>
          <input
            type="range"
            id="difficulty"
            name="difficulty"
            min={0}
            max={10}
            onChange={handleChange}
            value={formData.difficulty}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <label
            className="mr-2"
            htmlFor="size"
          >
            Maze Size
          </label>
          <input
            className="selfEnd"
            type="range"
            id="size"
            name="size"
            min={15}
            max={25}
            onChange={handleChange}
            value={formData.size}
          />
        </div>
        <button
          className="gradient-pink px-3 mb-1 font-mono rounded shadow-md border-2 border-purple-600 text-pink-200 hover:text-white hover:shadow-lg">
          Start Game!{" "}
        </button>
      </form>
    </div>
  );
};

export default SetupForm;