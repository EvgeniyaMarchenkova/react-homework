
import './App.css';
import Counter from './components/Counter';
import Search from './components/Search';

const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

function GenresSwitcher() {
  return (
    <div className="App">
      <header className="App-header">
        APP
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GenresSwitcher />
        <Search/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;