import logo from './logo.svg';
import './Home.css';



function Home() {
  return (
    <div className="App">
     
        <div id="mobileWrapper">

            <div id="welcometop">

                <h2 id="welcome">Willkommen bei</h2>
                <img src="./assets/trophieLogo.png" id="TrophieLogo"/>
                <h4 id="CLYFM">Collect your fan moment</h4>

            </div>

            <div id="buttonWrapper">

                <div class="whiteButton">
                    <h3 class="buttonText">Registrieren</h3>
                    <img src="" id="buttonImg"/>
                </div>
                <div class="whiteButton">
                    <h3 class="buttonText">Log In</h3>
                    <img src="" id="buttonImg"/>
                </div>
                <div class="whiteButton">
                    <h3 class="buttonText">Erklärung</h3>
                    <img src="" id="buttonImg"/>
                </div>

            </div>
        
        
          
        </div>
      
    </div>
  );
}

export default Home;
