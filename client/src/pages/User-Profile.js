// import React, { useState } from 'react';


import { useQuery } from '@apollo/client';

import AddDog from './Add-dog';


import { QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

// import CardColumns from 'react-bootstrap/CardColumns'
import { Accordion, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Profile () {

const {loading, data} = useQuery(QUERY_ME);
const userData = data?.me||{}
if (loading) {
  return <h2>loading</h2>
}
// Auth.login(data.addUser.token);
  return (
    <>
   
    <Link to= "/add-dog">Create your Dog Profile</Link>
 
    <container>
      <div>
    <AddDog>

      <Accordion>
       
<Card style = {{width: '18rem'}}>
<Card.Img variant="top" src={userData.dog_picture} style={{width: "100%", height: "35vw", objectFit: "cover"}} alt={userData.dog_name}/> 
 
<Card.Body>

<Card.Title>{userData.dog_name}</Card.Title>
<Accordion.Item eventKey="0">
<Accordion.Header>Profile</Accordion.Header>
<Accordion.Body> 
     breed = {`Breed: ${userData.dog_breed}`}
     gender = {`Gender: ${userData.dog_gender}`}
     size = {` Size: ${userData.dog_size}`}
     age = {` Age: ${userData.dog_age}`}
     vaccinations = {` Vaccinated: ${userData.dog_vaccinations}`}
     neuter_spayed = {` Neutered/Spayed: ${userData.dog_neuter_spayed}`}
     temperment ={` Temperment: ${userData.dog_temperment}`}
     notes = {` Additional Notes: ${userData.dog_notes}`}
     </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
<Accordion.Header>Avaibility</Accordion.Header>
<Accordion.Body> 
     preferred_days = {` Preferred Days: ${userData.preferred_days}`}
     preferred_timeofday = {` Preferred Times: ${userData.preferred_timeofday}`}
     preferred_location = {` Preferred Location: ${userData.preferred_location}`}
   
     </Accordion.Body>
      </Accordion.Item>
    

  </Card.Body>
  </Card>
 
  </Accordion>
 
  </AddDog>
 
  </div>
  </container>
  </>
  )};

  // <Link to "../components/Add-dog.js"> Add another profile</Link>

