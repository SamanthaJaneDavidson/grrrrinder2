import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AddDog from '../components/Add-dog';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

import { Card} from 'react-bootstrap'

export default function Profile () {

const {loading, data} = useQuery(QUERY_ME);
const userData = data?.me||{}

  return (

  <div className='flex-row justify-center mb-3'>
    <h2 className='col-12 col-md-10'>{userData.dog_name} Profile</h2> 
    <div className='card'>
    <AddDog>
      {/* TODO: connect cloudinary to picture */}
    <img src={userData.dog_picture} className="card-img-top" style={{width: "100%", height: "35vw", objectFit: "cover"}} alt={userData.dog_name}></img>
     <div className='card-body'>
     name = {userData.dog_name}
     breed = {userData.dog_breed}
     gender = {userData.dog_gender}
     size = {` Size: ${userData.dog_size}`}
     age = {` Age: ${userData.dog_age}`}
     vaccinations = {` Vaccinated: ${userData.dog_vaccinations}`}
     neuter_spayed = {` Neutered/Spayed: ${userData.dog_neuter_spayed}`}
     temperment ={` Temperment: ${userData.dog_temperment}`}
     notes = {` Additional Notes: ${userData.dog_notes}`}
    //  dog_picture = 
     preferred_days = {` Preferred Days: ${userData.preferred_days}`}
     preferred_timeofday = {` Preferred Times: ${userData.preferred_timeofday}`}
     preferred_location = {` Preferred Location: ${userData.preferred_location}`}
     </div>
     </AddDog>
    
</div>
  </div>

  )};
