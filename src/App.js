import React, { Component } from "react";
import { faRecycle, faBars, faCheckCircle, faSackDollar, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";


function Header(){
  return (
    <>
      <nav>
      <h1>coinswapauthnticate</h1>
      <button className="hamburger"> <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </button>
      
      </nav>
      
    
    </>
  );
}

function Slider(){
  return (
    <>
    <div className="slider">
      <div className="slideFluid">
        <div className="slidetxt">
        <h1> Bitcoin is better than currency and a big indutry</h1>
        <button className="learnMore"> Learn more </button>
        <button className="resolve"> Resolve </button>
        </div>
        

      </div>
    </div>
    </>
  );
}

const Body = () => {
  return(
    <>
      <div className="container">
        <div className="containerFluid">

        </div>
      </div>
    </>
  );
}

const Boards = () => {
  return (
    <>
      <div className="flexContainer">
        <div>
        <span><FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon></span>
          <h2> websolution </h2>


          <button> click me </button>
          
        </div>
        <div>
        <span><FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon></span>
          <h2> websolution </h2>
          <button> click me </button>
        </div>
        <div>
        <span><FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon></span>
          <h2> websolution </h2>
          <button> click me </button>
        </div>
        <div>
        <span><FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon></span>
          <h2> websolution </h2>
          <button> click me </button>
        </div>
        <div>
        <span><FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon></span>
          <h2> websolution </h2>
          <button> click me </button>
        </div>
      </div>
    
    </>
  );
}

const Foot = () => {
  return (
    <>
      <div className="subFooter">
        <div>  <FontAwesomeIcon icon={ faCheckCircle}></FontAwesomeIcon> Rectification</div>
        <div> <FontAwesomeIcon icon={ faFileLines }></FontAwesomeIcon> Validation </div>
        <div> <FontAwesomeIcon icon={ faSackDollar }></FontAwesomeIcon> Bonus </div>
      </div>
    
       
    </>
  );
}

const Footer = () => {
  return (
    <>
      <div className="footer">


        
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>

        <div> Facebook Github Discord Whatsapp </div>
        <p> make your solutions fatser</p>
        <p> connect wallet </p>
        <footer> &copy; 2023 Coinswapauthnticate </footer>
      </div>
    
       
    </>
  );
}


export class ToogleButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tabType: `phrase`
    }


  }

  toggleMe =(value) =>{
    this.setState({
      tabType:value
    })
  }

  render(){
    return(
      <>
          <button onClick={()=>this.toggleMe('phrase')}> phrase </button>
          <button onClick={()=>this.toggleMe('keystore')}> keystore </button>
          <button onClick={()=>this.toggleMe('private')}> private </button>
          <div>
          {
          this.state.tabType=== `phrase` && <div> <textarea></textarea></div>
        }
        {
          this.state.tabType=== `keystore` && <div> <textarea></textarea> <input type="password" /></div>
        }
        {
          this.state.tabType=== `private` && <div> <textarea></textarea></div>
        }
          </div>
      </>
    );
  }

  }

  const Wallets = () => {
    return(
      <>
      <div className="validation">
        <h1> hello </h1>

      
      </div>
      </>
    );
  }


export default function App(){
  return (

    <>
      <Header />
      <Slider />
      <Boards />
      <Foot />
      <Footer />
      <ToogleButtons />

      <Wallets />

  
      </>

  );
}