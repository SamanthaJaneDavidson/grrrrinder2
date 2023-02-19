import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgoundImg from '../../../assets/img/home_bg.jpg';



const home = () => {
    return (
<Section id = 'home'>
    <div>
        <div className='home p-5' style={{backgroundImage:`url(${backgoundImg})`}}>
            <div className='intro container text-center text-light'>
                <h1 className='title'>WELCOME</h1>
                <h2 className='sub-title mb-4'>Welcome to Grrrr'inder, your modern alternative to traditional dog parks! 
      Here you can connect with fellow dog owners to set up doggy play dates.
      Grrrr'inder provides a catered experience by allowing owners the ability
      to be more selective about the dogs their pet meets. Create an account and profile to
      get started today!</h2>
      <Link target='about' classes='btn btn-primary rounded-0 mr-2'>SIGN UPE</Link>
            </div>
        </div>
    </div>
</Section>
    );
};

export default home;