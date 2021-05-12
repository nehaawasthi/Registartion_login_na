import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import {Translater} from './Components/common/Translater'
function App() {
  return (
    <div >
      {/* <header > */}
      <Translater />
        <Home />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
