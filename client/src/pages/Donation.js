import React from 'react';
import { Container } from 'react-bootstrap';
// import Navbar from "../components/Navigation";
import CartItem from '../components/CartItem';
import Mug from '../Images/GrinderMug.png';
import Shirt from '../Images/GrinderTshirt.png';

let merchandise = [
    {
        title: "Mug",
        description: "It's a really cool mug!",
        image: "../Images/GrinderMug.png",
        URL: "https://buy.stripe.com/test_7sI2azbif9po6pa5kl"
    },
    {
        title: "T-Shirt",
        description: "It's a really cool shirt!",
        image: "../Images/GrinderTshirt.png",
        URL: "https://buy.stripe.com/test_7sI2azbif9po6pa5kl"
    },
]


// import Footer from "../components/Footer";

// import { Link } from 'react-router-dom';




const Donate = () => {
    return (
        <Container >
            <div>
                <h1 className='title'>DONATE</h1>
                <p>
                    Feel compelled to help a furry friend in need? If your answer is "YES!" that is pawsitevly amazing and you deserve a round of a-paws! All you have do is click the button below to submit a donation. Once the donation has been recieved, we'll send it to our local SPCA.
                </p>


                <a href="https://buy.stripe.com/test_3cs3eDbif598fZK144" className="theme-btn submit__btn"><button>Donate Now</button></a>


                {/* <button onClick="window.location.href='https://buy.stripe.com/test_3cs3eDbif598fZK144';">Donate Now</button> */}
            </div>
            <div className='merchFlex'>
                {merchandise.map(item => (
                    <CartItem image={item.image} title={item.title} description={item.description} URL={item.URL} />
                ))}
            </div>


        </Container>
    );
};


// const Donate = () => {
//     return (
//         <section className="donate-container">
//             <div className="container">
//                 <div className="row donate-content-wrap">
//                     <div className="col-lg-8">
//                         <div className="donate-item">
//                             <h3 className="donate__title">Enter Your Donation</h3>
//                             <div className="form-shared">
//                                 <form action="#">
//                                     <div className="row">
//                                         <div className="col-lg-12">
//                                             <div className="yellow-form">
//                                                 <input type="number" className="form-control" />
//                                                     <span>$</span>
//                                                     <span>.00</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="donate-item">
//                             <h3 className="donate__title">Personal Info</h3>
//                             <div className="form-shared">
//                                 <form action="#">
//                                     <div className="row">
//                                         <div className="col-lg-6 col-sm-6">
//                                             <div className="form-group">
//                                                 <input type="text" className="form-control" placeholder="First Name" />
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-6 col-sm-6">
//                                             <div className="form-group">
//                                                 <input type="text" className="form-control" placeholder="Last Name" />
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-6 col-sm-6">
//                                             <div className="form-group">
//                                                 <input type="email" className="form-control"
//                                                        placeholder="Email Address" />
//                                             </div>
//                                         </div>

//                                         <div className="col-lg-12">
//                                             <textarea className="textarea" name="message"
//                                                       placeholder="Leave a Comment"></textarea>
//                                         </div>
//                                         <div className="col-lg-12">
//                                             <a href="https://buy.stripe.com/test_3cs3eDbif598fZK144" className="theme-btn submit__btn">donate now</a>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

export default Donate;


