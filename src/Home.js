import logo from './logo.svg';
import trophieLogo from './assets/trophieLogo.png';
import buttonImg from './assets/buttonImg.png';
import './Home.css';
import {Route, Link} from "react-router-dom";


function Home() {
  return (
    <div className="App">
     
        <div id="mobileWrapper">

            <div id="welcometop">

                <h2 id="welcome">Willkommen bei</h2>
                <img src= {trophieLogo} id="TrophieLogo"/>

                <h4 id="CLYFM">Collect your fan moment</h4>

            </div>

            <div id="buttonWrapper">

                <Link to ="/register">
                    <div class="whiteButton">
                    <h3 class="buttonText">Registrieren</h3>
                    <img src={buttonImg} id="buttonImg"/>
                    </div>
                </Link>
                
                <Link to ="/logIn">
                    <div class="whiteButton">
                    <h3 class="buttonText">Log In</h3>
                    <img src={buttonImg} id="buttonImg"/>
                    </div>
                </Link>

                <Link>
                    <div class="whiteButton">
                        <h3 class="buttonText">Erklärung</h3>
                        <img src={buttonImg} id="buttonImg"/>
                    </div>
                </Link>
               

            </div>
        
        
          
        </div>
      
    </div>
  );
}

export default Home;
