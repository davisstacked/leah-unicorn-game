import react from 'react';
import { Link } from 'react-router-dom';
import UnicornImage from './UnicornImage';

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Hi! I am a Unicorn.</h1>
      <UnicornImage />
      <p>No, I'm not a privately held startup company valued at over $1 billion</p>
      <p>I'm the real deal, a mystical creature of magic.</p>
      <p>I'm being hunted by a Monster. Can I trust you to Pilot me safely to the rainbow?</p>
      {/* <Link to="/game"> */}
        <button className="start-game-button">
          Yes! Let's go! 
        </button>
      {/* </Link> */}
    </div>
  )
}

export default Home;
