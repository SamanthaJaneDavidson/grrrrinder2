//Test
import React, { useState } from 'react';
import Auth from '../utils/auth';
import {useMutation} from '@apollo/client';
import {SAVE_DOG} from '../utils/mutations';

import Form from 'react-bootstrap/Form';

// import UploadWidget from './components/UploadWidget'; 


function AddDog() {

  const [dogName, setDogName] = useState('');
//   const [dogPicture, setDogPicture] = useState('');
  const [dogGender, setDogGender] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogAge, setDogAge] = useState('');
  const [dogSize, setDogSize] = useState('');
  const [dogTemperment, setDogTemperment] = useState('');
  const [dogVaccinations, setDogVaccinations] = useState('');
  const [dogNeuter, setDogNeuter] = useState('');
  const [preferredDays, setPreferredDays] = useState('');
  const [preferredTimes, setPreferredTimes] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');

const [saveDog] = useMutation(SAVE_DOG);

async function handleFormSubmit(event){
    event.preventDefault()
    const {data} = await saveDog({
        variables:{
          input:{
            dog_name: dogName,
            dog_breed: String
            dog_gender: String
            dog_size: String
            dog_age: String
            dog_vaccinations: String
            dog_neuter_spayed: String
            dog_temperment: String
            dog_notes: String
            dog_picture: String
            preferred_days: [String]
            preferred_timeofday: [String]
            preferred_location: [String]
          }
            // fill up with dog data
        }
    })
console.log(data);
    // ADD SAVE_DOG data USING FORM INPUT VALUES
}


    return (
    
        <Form onSubmit={handleFormSubmit}>
        <h1> Create Your Dog's Profile !</h1>

          <div className="dog-card">

            <div className="dog-cardbody">

              <h3> Please fill out this form</h3>

              <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Dog Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your dog name" />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicText" className ="font-weight-bold text-small col-lg-6">
        <Form.Label>Dog Breed</Form.Label>
        <Form.Control type="text" placeholder="Enter your dog breed" />
      </Form.Group>

      <Form.Select aria-label="Dog gender" className="font-weight-bold text-small col-lg-6">
      <Form.Label>Dog Gender</Form.Label>
      <option>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </Form.Select>

    <Form.Select aria-label="Dog size" className="font-weight-bold text-small col-lg-6">
    <Form.Label>Dog Size</Form.Label>
    <option>Select Dog's Age</option>
      <option value="1">Puppy</option>
      <option value="2">Youth</option>
      <option value="3">Adult</option>
      <option value="4">Senior</option>
    </Form.Select>


    <Form.Select aria-label="label" className="font-weight-bold text-small col-lg-6">
    <Form.Label>Is your dog vaccinated?</Form.Label>
      <option>Vaccination Status</option>
      <option value="1">Yes</option>
      <option value="2">No</option>
    </Form.Select>

    <Form.Select aria-label="label" className="font-weight-bold text-small col-lg-6">
    <Form.Label>Is your dog neutered/spayed?</Form.Label>
      <option>Surgical Sterilization</option>
      <option value="1">Yes</option>
      <option value="2">No</option>
    </Form.Select>

    <Form.Select aria-label="label" className="font-weight-bold text-small col-lg-6">
    <Form.Label>What is your dog's temperment?</Form.Label>
      <option>Temperment</option>
      <option value="1">Shy</option>
      <option value="2">Calm</option>
      <option value="3">Energetic</option>
      <option value="4">Leader</option>
    </Form.Select>


    <Form.Select aria-label="label" className="font-weight-bold text-small col-lg-6">
    <Form.Label>What is your preferred day to meet?</Form.Label>
      <option>Select Days</option>
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Saturday</option>
      <option value="7">Sunday</option>
      <option value="8">No preference</option>
    </Form.Select>

    <Form.Select aria-label="label" className="font-weight-bold text-small col-lg-6">
    <Form.Label>What is your preferred time of day to meet?</Form.Label>
      <option>Select Preferred Times</option>
      <option value="1">Morning</option>
      <option value="2">Afternoon</option>
      <option value="3">Evening</option>
      <option value="4">No preference</option>
    </Form.Select>


    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" placeholder="Enter your zip code" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Share some notes about your dog!</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>



              Dog Name
              <input
                defaultValue={dogName}
                onChange={(event) => setDogName(event.target.value)}
                placeholder="Name"
                type="text"
              />
              Dog Gender
              <input
                defaultValue={dogGender}
                onChange={(event) => setDogGender(event.target.value)}
                placeholder="Gender"
                type="text"
              />
              Dog Breed
              <input
                defaultValue={dogBreed}
                onChange={(event) => setDogBreed(event.target.value)}
                placeholder="Breed"
                type="text"
              />
               Dog Age
              <input
                defaultValue={dogAge}
                onChange={(event) => setDogAge(event.target.value)}
                placeholder="Age"
                type="text"
              />
               Dog Size
              <input
                defaultValue={dogSize}
                onChange={(event) => setDogSize(event.target.value)}
                placeholder="Size"
                type="text"
              />
              Describe your dog
              <input
                defaultValue={dogTemperment}
                onChange={(event) => setDogTemperment(event.target.value)}
                placeholder="Temperment"
                type="text"
              />
              <h3>Health Status</h3>             
             Vaccination Status 
              <input
                defaultValue={dogVaccinations}
                onChange={(event) => setDogVaccinations(event.target.value)}
                placeholder="Vaccination"
                type="text"
              />
             Neutered/Spayed
              <input
                defaultValue={dogNeuter}
                onChange={(event) => setDogNeuter(event.target.value)}
                placeholder="Neutered/Spayed"
                type="text"
              />
  <h3>Avaibility</h3>
  Preferred Days
     
              <input
                defaultValue={preferredDays}
                onChange={(event) => setPreferredDays(event.target.value)}
                placeholder="Preferred Days"
                type="text"
              />
  Time during the day
              <input
                defaultValue={preferredTimes}
                onChange={(event) => setPreferredTimes(event.target.value)}
                placeholder="Preferred Times"
                type="text"
              />
              Zip Code
              <input
                defaultValue={preferredLocation}
                onChange={(event) => setPreferredLocation(event.target.value)}
                placeholder="Preferred Location"
                type="text"
              />
              <button type="submit">
                Add Dog
              </button> */}
            </div>
          </div>
       
        </Form>
    
    )
}

export default AddDog;





// onClick={() =>
// display({
//     type: "ADD_D0G",
//     payload: {
//       name: dogName,
//       gender: dogGender,
//       age: dogAge,
//       zize: dogSize,
//       temperment: dogTemperment,
//       vaccination: dogVaccinations,
//       neuter: dogNeuter,
//       days: preferredDays,
//       times: preferredTimes,
//       location: preferredLocation,
//     },
//   })
// }