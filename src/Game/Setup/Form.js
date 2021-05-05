import React from 'react';

const Form = ({ handleSubmit, handleChange, formData }) => {
  return (
    <div className="formContainer flex justify-between items-center shadow-lg">
      <form
        className="gradient-orchid flex flex-col border-2 border-black rounded p-4 justify-items-center items-center"
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
            className="px-3 py-2 rounded-xl bg-pink-50"
            onChange={handleChange}>
            <option value="Pinkie Pie">Pinkie Pie</option>
            <option value="Twilight Sparkle">Twilight Sparkle</option>
            <option value="Fluttershy">Fluttershy</option>
            <option value="AppleJack">Applejack</option>
            <option value="Rainbow Dash">Rainbow Dash</option>
            <option value="Rarity">Rarity</option>
          </select>
        </div>
        <div className="flex items-center justify-between mb-2">
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
          className="gradient-pink px-3 py-2 text-white font-mono rounded shadow-md border-2 border-purple-600 hover:text-black">
          Start Game!{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;