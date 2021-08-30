import cloud from './cloud.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cloud} className="App-logo" alt="logo" />
        <p />
        <p>
          Amplified Cloud App v0.1
        </p>
        <a
          className="App-link"
          href="https://openknowledge.de"
          target="_blank"
          rel="noopener noreferrer"
        >open knowledge </a>
      </header>
    </div>
  );
}

export default App;
