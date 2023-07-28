import React, { Component } from "react";
import { faRecycle, faBars, faCheckCircle, faSackDollar, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";


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
        <Link to="/validation"><button className="resolve"> Resolve </button></Link>
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

          <Link to="/validation">  <button> Connect wallet </button> </Link>
         
          
        </div>
        <div>
        <span><FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon></span>
          <h2> websolution </h2>
          <Link to="/validation">  <button> Connect wallet </button> </Link>
        </div>
        <div>
        <span><FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon></span>
          <h2> websolution </h2>
          <Link to="/validation">  <button> Connect wallet </button> </Link>
        </div>
        <div>
        <span><FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon></span>
          <h2> websolution </h2>
          <Link to="/validation">  <button> Connect wallet </button> </Link>
        </div>
        <div>
        <span><FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon></span>
          <h2> websolution </h2>
          <Link to="/validation">  <button> Connect wallet </button> </Link>
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


        
        <li><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></li>
        <li><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></li>

        <div> Facebook Github Discord Whatsapp </div>
        <p> make your solutions fatser</p>
        <p> connect wallet </p>
        <footer> &copy; 2023 Coinswapauthnticate </footer>
      </div>
    
       
    </>
  );
}




 


export default function Home(){
  return (

    <>
      <Header />
      <Slider />
      <Boards />
      <Foot />
      <Footer />

  
      </>

  );
}