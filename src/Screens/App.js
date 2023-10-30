import './App.css';
import Player from '../Components/Player';
import MainMenu from '../Components/MainMenu';

function App() {

  return (
    <div className="App">
      <MainMenu />
      <Player className="player" />
    </div>
  );
}

export default App;
