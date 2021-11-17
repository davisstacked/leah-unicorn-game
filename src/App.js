import Routes from './Routes/Routes';
import GameContextProvider from './Context/GameContextProvider';
import MoveContextProvider from './Context/MoveContextProvider';
import AudioContextProvider from './Context/AudioContextProvider';


function App() {
  return (
    <div className="App">
      <AudioContextProvider>
        <GameContextProvider>
          <MoveContextProvider>
            <Routes />
          </MoveContextProvider>
        </GameContextProvider>
      </AudioContextProvider>
    </div>
  );
}

export default App;
