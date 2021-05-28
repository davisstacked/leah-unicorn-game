import React from 'react';
import { Link } from 'react-router-dom';
import UnicornImage from './UnicornImage';

import './Home.css'

const Home = () => {
  return (
    <div className="p-5 h-screen text-xl leading-10 home">
      <h1 className="text-4xl">Woah! I am a Unicorn!  <i className="far fa-laugh-beam"></i>
      </h1>
      <UnicornImage />
      <p>No, I'm not a startup company valued at over a billion-dollars...</p>
      <p>I'm <span className="text-red-500">EVEN</span> <span className="text-pink-600">BETTER</span>!!! ✨
      </p>
      <p>I'm a mystical creature of <span className="text-yellow-600 font-semibold">MAGIC</span>!
      </p>
      <p>But I'm being hunted by a <span className="text-pink-600 font-semibold">MONSTER</span>. <i className="far fa-sad-cry fa-lg"></i></p>
      <p>Can I Trust <span className="text-green-300 font-semibold">YOU</span> to Pilot me safely to the <span className="text-purple-500 font-semibold">RAINBOW</span>?</p>
      <Link to="/game">
        <button className="mt-4 start-game-button shadow-sm text-black text-3xl py-1 px-3 border-2 border-purple-700 rounded gradient-pink">
          Yes! Let's go! 
        </button>
      </Link>
    </div>
  )
}

export default Home;
