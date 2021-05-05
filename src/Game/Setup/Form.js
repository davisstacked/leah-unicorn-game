import React from 'react';

const Form = ({ handleSubmit, handleChange, formData }) => {
  return (
    <div className="formContainer flex justify-between items-center">
      <form
        className="gradient-orchid flex flex-col border-2 border-black rounded p-5 justify-items-center items-center"
        onSubmit={handleSubmit}
      >
        <h3 className="font-mono text-pink-600 font-black">Game Settings</h3>
        <div className="nameOptions">
          <label htmlFor="name">
            Name
          </label>
          <select
            name="name"
            id="name"
            onChange={handleChange}>
            <option value="Pinkie Pie">Pinkie Pie</option>
            <option value="Twilight Sparkle">Twilight Sparkle</option>
            <option value="Fluttershy">Fluttershy</option>
            <option value="AppleJack">Applejack</option>
            <option value="Rainbow Dash">Rainbow Dash</option>
            <option value="Rarity">Rarity</option>
          </select>
        </div>
        <div className="difficultyOptions">
          <label htmlFor="size">
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
        <div className="mazeSizeOptions">
          <label htmlFor="size">
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
          className="startGameButton">
          Start Game!{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;