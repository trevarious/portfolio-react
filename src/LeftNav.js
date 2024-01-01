import React from "react";
import './LeftNav.css';
// import linked from '../src/assets/linkedin-icon.svg';
import gitHub from '../src/assets/left-nav-git-link.svg';
import insta from '../src/assets/left-nav-insta-link.svg';
// import blackJack from '../src/assets/left-nav-blackjack-link.png';
// import dice from '../src/assets/left-nav-dice-link.png';
import logo from '../src/assets/logo.png';
import Globe from "./Globe";
// import Blackjack from "./BlackJack";



export default function LeftNav() {

    return (
        <div className="left-nav-container">
            <a id='logo' href="./" target="#"><img id="logo"  src={logo} alt="logo"/></a>
            <div class="links-container">
            {/* <div id="left-nav-one" class="links"><a href="../https://www.linkedin.com/in/trevor-sykes-717585136/" target="_blank"><img class="left-nav-links-img" src={linked} alt="" /></a></div> */}
            <div id="left-nav-two" class="links"><a href="https://github.com/trevarious" target="_blank"><img class="left-nav-links-img" src={gitHub} alt="" /></a></div>
            <div id="left-nav-three" class="links"><a href="mailto:trevorjacobsykes@gmail.com"><img class="left-nav-links-img" src={insta} alt="" /></a></div>
            {/* <div id="left-nav-four" class="links"><a href="https://instagram.com"><img class="left-nav-links-img" src={dice} alt="" /></a></div>
            <div id="left-nav-five" class="links"><a href="https://instagram.com"><img class="left-nav-links-img" src={blackJack} alt="" /></a></div> */}
        </div>
        <div className="globe-container">
                <Globe width={100} height={100} />
            </div>
        </div>
    )
}