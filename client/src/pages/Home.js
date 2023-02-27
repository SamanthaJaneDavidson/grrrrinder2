// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import backgroundImg1 from '../Images/homecarousel2.png';
import backgroundImg2 from '../Images/homecarousel3.png';
import backgroundImg3 from '../Images/homecarousel4.png';
import {Carousel} from 'react-bootstrap';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navigation';

const home = () => {
  return (
    <Carousel fade prevLabel={null} nextLabel={null} pause="hover" indicators={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={backgroundImg1} alt="dogs with teddy bear" style={{ opacity: "0.6" }}/>
        <Carousel.Caption>
          <h1 className='carousel1'>Find the Paw-fect Match</h1>
          <p className='carousel1'> Welcome to <span>Grrrr'inder</span>, your modern alternative to traditional dog parks!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={backgroundImg2} style={{ opacity: "0.8" }} alt="dogs meeting" />

        <Carousel.Caption>
          <h1 className='carousel2'>Love at First Sniff</h1>
          <p className="carousel2">Here you can connect with fellow dog owners to set up doggy play dates. <span>Grrrr'inder</span> provides a catered experience by allowing owners the ability to be more selective about the dogs their pet meets.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={backgroundImg3} style={{ opacity: "0.6" }} alt="dogs playing" />

        <Carousel.Caption>
          <h1>Start the Pawty!</h1>
          <p>
          Create a <span>Grrrr'inder</span> account and profile to get started today!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default home;
