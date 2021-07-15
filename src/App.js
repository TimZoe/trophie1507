import logo from './logo.svg';
import './App.css';
import Home from './Home';
import LogIn from './Login';
import register from './register';
import dashboard from './Dashboard';
import öffentlichesProfil from './ÖffentlichesProfil';
import singleCard from './SingleCard';
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
  
      <Route exact path="/" component={Home} />
      <Route exact path="/LogIn" component={LogIn} />
      <Route exact path="/register" component={register} />
      <Route exact path="/dashboard" component={dashboard} />
      <Route exact path="/öffentlichesProfil" component={öffentlichesProfil} />
      <Route exact path="/singleCard" component={singleCard} />


     

    </div>
  );
}

export default App;
