// import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import AddDog from './Add-dog';

import { QUERY_ME, ADD_DOG } from '../utils/queries';

// import Auth from '../utils/auth';

// import CardColumns from 'react-bootstrap/CardColumns'
import { Accordion, Card, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Profile() {

  const { loading, data } = useQuery(QUERY_ME);
  const [addDog] = useMutation(ADD_DOG, {
    onCompleted: (data) => {
      console.log(data);
    }
  });

  const addDogPress = () => {
    addDog({variables: {
      "input": {
        "preferred_timeofday": ["sun"],
        "preferred_location": ["sun"],
        "preferred_days": ["sun"],
        "dog_vaccinations": true,
        "dog_temperment": "loud",
        "dog_size": "large",
        "dog_picture": "na",
        "dog_notes": null,
        "dog_neuter_spayed": false,
        "dog_name": "dan",
        "dog_gender": "male",
        "dog_breed": "lab",
        "dog_age": 4
    
      }
    }});
  }

  const userData = data?.me || {}
  if (loading) {
    return <h2>loading</h2>
  }
  // Auth.login(data.addUser.token);
  return (
    <>

      <Link id="add-dog-link" to="/add-dog">Add a Dog to Your Profile</Link>

      <Container>
        <button onClick={addDogPress}>Add dog!</button>

      </Container>
    </>
  )
};

  // <Link to "../components/Add-dog.js"> Add another profile</Link>

