import React from 'react';
import { Container } from 'react-bootstrap';


const CartItem = (props) => {
    return(
        <div className="card" style={{width: "300px", margin:"20px"}}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.URL} className="btn btn-primary">Buy Now!</a>
        </div>
      </div>
    );

}
export default CartItem;