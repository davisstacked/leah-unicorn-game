import React from 'react';
import { Link } from 'react-router-dom';
import UnicornImage from './UnicornImage';

import './Home.css'

const Home = () => {
  return (
    <div className="p-5 h-screen home">
      <h1>Woah! I am a Unicorn!  <i className="far fa-laugh-beam"></i>
      </h1>
      <UnicornImage />
      <p>No, I'm not a privately held startup company valued at over $1 billion</p>
      <p>I'm the real deal, a mystical creature of magic.</p>
      <p>I'm being hunted by a Monster. <i className="far fa-sad-cry fa-lg"></i></p>
      <p>Can I Trust you to Pilot me safely to the <span>RAINBOW?</span></p>
      <Link to="/game">
        <button className="gradient-pink border-2">
          Yes! Let's go! 
        </button>
      </Link>
    </div>
  )
}

export default Home;
