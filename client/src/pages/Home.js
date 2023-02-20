import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import backgoundImg from '../Images/logo192.png';
import { Container } from 'react-bootstrap';

// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Navigation from '../components/Navigation';
=======
import backgoundImg from '../Images/bg-img.jpg';
import { Container} from 'react-bootstrap';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
>>>>>>> main


const home = () => {
    return (
<Container id = 'home'>
    <div>
        <div className='home p-5' style={{backgroundImage:`url(${backgoundImg})`}}>
            <div className='intro container text-center text-light'>
                <h1 className='title'>WELCOME</h1>
                <h2 className='sub-title mb-4'>Welcome to Grrrr'inder, your modern alternative to traditional dog parks! 
      Here you can connect with fellow dog owners to set up doggy play dates.
      Grrrr'inder provides a catered experience by allowing owners the ability
      to be more selective about the dogs their pet meets. Create an account and profile to
      get started today!</h2>
      <Link target='about' classes='btn btn-primary rounded-0 mr-2'>SIGN UP</Link>
            </div>
        </div>
    </div>
</Container>
    );
};

export default home;