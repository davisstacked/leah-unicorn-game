import React, { useState, useContext } from 'react';
import GameContext from '../../../Context/GameContext';
import SetupForm from './SetupForm';
import Maze from '../../../Assets/Imgs/Maze.png';
import SmallUnicorn from './SmallUnicorn';
import SmallRainbow from './SmallRainbow';
import SmallSkull from './SmallSkull';

const SetupPage = () => {
  const { setGameData } = useContext(GameContext);
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

  // when you submit a form, updates the Game Context with user choices entered into the form. And by changing the status to "active", switches components now to the maze wrapper component. 
  const handleSubmit = (e) => {
    e.preventDefault();
    // 
    setGameData({ ...formData, status: "active" });
    setFormData(initialState);
  };

  return (
    <div className="pt-8 text-2xl pb-8 text h-fill sm:h-screen md:h-screen lg:h-screen    bg-setup flex flex-col items-center text-center">
      <h1 className="gradient-orchid border-2 border-black rounded font-mono px-2 py-1 justify-items-center items-center shadow-md mb-2 text-pink-600 font-black text-4xl">Game Setup</h1>
      <p className="bg-black border-pink-400 text-white py-1 px-2 border-2 rounded">Help the <span className="text-blue-400">UNICORN</span> navigate the <span className="text-yellow-300">MAZE</span> towards the <span className="text-pink-300">RAINBOW</span>!
      </p>
      <div className="sm:mt-8 flex flex-col sm:grid sm:grid-flow-col sm:grid-cols-3">
        <SmallUnicorn />
        <div className="flex justify-center" >
          <img
            className="h-36 sm:h-38 border-2 border-pink-400"
            src={Maze}
            alt="maze"
          />
        </div>
        <SmallRainbow />
      </div>
        <p className="border-2 border-pink-400 py-1 px-2 text-white bg-black rounded mt-6 text-3xl">BEWARE OF THE <span className="text-red-600 px-1">SKULL MONSTER</span>!!!  
        </p>
      <div className="sm:w-3/6 sm:mt-4 flex-col flex sm:flex-row justify-evenly items-center">
        <SmallSkull/>
        <SetupForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default SetupPage;

