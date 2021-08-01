import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbarj from './components/navbarj';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbarj/>
    </Router>
    </div>
  );
}

export default App;
