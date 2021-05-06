import React from 'react';
import { Link } from 'react-router-dom';
import UnicornImage from './UnicornImage';

import './Home.css'

const Home = () => {
  return (
    <div className="p-5 h-screen leading-10 home">
      <h1>Woah! I am a Unicorn!  <i className="far fa-laugh-beam"></i>
      </h1>
      <UnicornImage />
      <p>No, I'm not a privately held startup company valued at over $1 billion</p>
      <p>I'm the real deal, a mystical creature of magic.</p>
      <p>I'm being hunted by a <span className="text-pink-600 font-semibold">MONSTER</span>. <i className="far fa-sad-cry fa-lg"></i></p>
      <p>Can I Trust <span className="text-pink-600 font-semibold">YOU</span> to Pilot me safely to the <span className="text-pink-600 font-semibold">RAINBOW</span>?</p>
      <Link to="/game">
        <button className="mt-4 start-game-button shadow-sm text-black text-3xl py-1 px-3 border-2 border-purple-700 rounded gradient-pink">
          Yes! Let's go! 
        </button>
      </Link>
    </div>
  )
}

export default Home;
