import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
  
      <Route exact path="/" component={Home} />


     

    </div>
  );
}

export default App;
