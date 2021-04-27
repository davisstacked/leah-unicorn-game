import react from 'react';
import { Link } from 'react-router-dom';
import UnicornImage from './UnicornImage';

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* <div className="unicorn-container"> */}
        <h1>Woah! I am a Unicorn!  <i class="far fa-laugh-beam"></i>
        </h1>
        <UnicornImage />
        <p>No, I'm not a privately held startup company valued at over $1 billion</p>
        <p>I'm the real deal, a mystical creature of magic.</p>
        <p>I'm being hunted by a Monster. <i class="far fa-sad-cry fa-lg"></i></p>
        <p>Can I Trust you to Pilot me safely to the <span>RAINBOW?</span></p>
        <Link to="/game">
          <button className="start-game-button">
            Yes! Let's go! 
          </button>
        </Link>
      {/* </div> */}
    </div>
  )
}

export default Home;
