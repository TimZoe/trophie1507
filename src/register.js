import './register.css';
import trophieLogoQu from './assets/TrophieLogoQu.png'
import {Route, Link} from "react-router-dom";


function register() {
  return (
    <div className="App">
     
     <div id="mobileWrapperreg">

        <div class="menueBar">
            <img src={trophieLogoQu} id="trophieLogoQu"/>
            
        </div>

        <div class="registerWrapper">
            Bitte registrieren
        </div>
        <div class="awsInput">

                    Hier kommt aws Content
                    
                    <Link to="/dashboard">
                        <div class="weiterButton">
                        Weiter
                        </div>
                    </Link>
                    

                </div>
     </div>

            
      
    </div>
  );
}

export default register;
