import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import Main from './components/Main';
import Include from './components/Include';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Main/>
     <Include/>
     <Info/>
    </div>
  );
}

export default App;
