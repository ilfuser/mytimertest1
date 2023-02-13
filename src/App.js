import logo from './logo.svg';
import './App.css';
import { MyTimer } from './MyTimer';
import { Countdown } from './MyTimer';
import { MyTimerExt } from './MyTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyTimerExt name='I AM' seconds='6'/>
        <MyTimer name='I AM' seconds='5'/>        
        <Countdown name='hey' seconds='3'/>
        {//<Countdown seconds='5'/>
        }
        <p>          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
