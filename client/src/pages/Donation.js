import React from 'react';
import { Container } from 'react-bootstrap';
// import Navbar from "../components/Navigation";
// import Footer from "../components/Footer";
// import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Mug from '../Images/GrinderMug.png';
import Shirt from '../Images/GrinderTshirt.png';

let merchandise = [
    {
        title: "Grrrr'inder Mug",
        description: "Lap up your coffee or tea in your very own Grrrr'inder mug!",
        image: "../Images/GrinderMug.png",
        URL: "https://buy.stripe.com/test_9AQ5mLeurbxw3cYdQS"
    },
    {
        title: "Grrrr'inder T-Shirt",
        description: "Let's face it, your clothes are already covered in your favorite pup's fur, so why not wear your furry friend's fur and donate as well?",
        image: "../Images/GrinderTshirt.png",
        URL: "https://buy.stripe.com/test_7sI2azbif9po6pa5kl"
    },
]


const Donate = () => {
    return (
        <Container >
            <div>
                <h1 className='title'>DONATE</h1>
                <p>
                    Feel compelled to help a furry friend in need? If your answer is "YES!" that is pawsitevly amazing and you deserve a round of a-paws! You have a few options to donate. You can either buy a cute Grrrr'inder mug or t-shirt, or click the button below to submit a donation. Once the donation has been recieved, we'll send it to our local SPCA. 
                </p>


                <a href="https://buy.stripe.com/test_3cs3eDbif598fZK144" className="theme-btn submit__btn"><button>Donate Now</button></a>
                
            </div>
            <div className='merchFlex'>
                {merchandise.map(item => (
                    <CartItem image={item.image} title={item.title} description={item.description} URL={item.URL} />
                ))}
            </div>


        </Container>
    );
};

export default Donate;


