import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbarj from "./components/navbarj";
import inicio from "./components/link/inicio";
import comercial from "./components/link/comercial";
import ayuda from "./components/link/ayuda";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarj />
        <Switch>
          <Route path="/" exact component={inicio} />
          <Route path="/comercial" component={comercial} />
          <Route path="/ayuda" component={ayuda} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
