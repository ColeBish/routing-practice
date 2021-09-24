import './App.css';
import { Router } from "@reach/router"
import Home from "./components/Home"
import DisplayWord from './components/DisplayWord';
import DisplayCss from './components/DisplayCss';




const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <DisplayWord path="/:word" />
        <DisplayCss path="/:text/:color/:bcColor" />
      </Router>
    </div>
  );
}

export default App;
