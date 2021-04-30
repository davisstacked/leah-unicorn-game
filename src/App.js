import Routes from './Routes/Routes';
import GameContextProvider from './Context/GameContextProvider';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <Routes />
      </GameContextProvider>
    </div>
  );
}

export default App;
