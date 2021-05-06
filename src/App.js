import Routes from './Routes/Routes';
import GameContextProvider from './Context/GameContextProvider';
import MoveContextProvider from './Context/MoveContextProvider';
import AudioContextProvider from './Context/AudioContextProvider';
import LosePage from './Game/Lose/LosePage';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <AudioContextProvider>
          <MoveContextProvider>
            {/* <Routes /> */}
            <LosePage />
          </MoveContextProvider>
        </AudioContextProvider>
      </GameContextProvider>
    </div>
  );
}

export default App;
