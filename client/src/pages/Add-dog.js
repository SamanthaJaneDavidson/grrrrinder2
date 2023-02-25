//Test
import React, { useState } from 'react';
import Auth from '../utils/auth';
import {useMutation} from '@apollo/client';
import {SAVE_DOG} from '../utils/mutations';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import UploadWidget from '../components/UploadWidget'; 


function AddDog() {

  const [dogName, setDogName] = useState('');
  const [dogGender, setDogGender] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogAge, setDogAge] = useState('');
  const [dogSize, setDogSize] = useState('');
  const [dogTemperment, setDogTemperment] = useState('');
  const [dogVaccinations, setDogVaccinations] = useState('');
  const [dogNeuter, setDogNeuter] = useState('');
  const [dogNotes, setDogNotes] = useState('');
  const [dogPicture, setDogPicture] = useState('');
  const [preferredDays, setPreferredDays] = useState('');
  const [preferredTimes, setPreferredTimes] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  //const [dogNotes, setDogNotes] = useState('');

const [saveDog] = useMutation(SAVE_DOG);

async function handleFormSubmit(event){
    event.preventDefault()
    const {data} = await saveDog({
        variables:{
          input:{
            dog_name: dogName,
            dog_breed: dogBreed,
            dog_gender: dogGender,
            dog_size: dogSize,
            dog_age: dogAge,
            dog_vaccinations: dogVaccinations,
            dog_neuter_spayed: dogNeuter,
            dog_temperment: dogTemperment,
            dog_notes: dogNotes,
            dog_picture: dogPicture,
            preferred_days: preferredDays,
            preferred_timeofday: preferredTimes,
            preferred_location: preferredLocation,
          }
            
        }
    })
console.log(data);
    // ADD SAVE_DOG data USING FORM INPUT VALUES

    Auth.login(data.addUser.token);
 
};


    return (
     
        <Form onSubmit={handleFormSubmit}>
          
        <h1 className="text-box"> Create Your Dog's Profile !</h1>
       <hr></hr>
       
          <div className="dog-card">

            <div className="dog-cardbody">

              <h4> Please fill out this form</h4>

              <Form.Group className="font-weight-bold text-small col-md-12" controlId="formBasicText">
        <Form.Label>Dog Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your dog name"  value={dogName} onChange={(event) => setDogName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="font-weight-bold text-small col-md-12" controlId="formBasicText">
        <Form.Label>Dog Breed</Form.Label>
        <Form.Control type="text" placeholder="Enter your dog breed" value={dogBreed} onChange={(event) => setDogBreed(event.target.value)}/>
      </Form.Group>

      <Form.Group className="font-weight-bold text-small col-md-12" >
      <Form.Label>Dog Gender</Form.Label>
      <Form.Select className="form-control" aria-label="Dog gender" value={dogGender}
                onChange={(event) => setDogGender(event.target.value)}>
      <option>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </Form.Select>
    </Form.Group>

<Form.Group className="font-weight-bold text-small col-md-12">
    <Form.Label>Dog Size</Form.Label>
    <Form.Select className="form-control" aria-label="Dog size" value={dogSize}
                onChange={(event) => setDogSize(event.target.value)}>
   
    <option>Select Dog's Size</option>
      <option value="1">Small</option>
      <option value="2">Medium</option>
      <option value="3">Large</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="font-weight-bold text-small col-md-12">
    <Form.Label>Dog Age</Form.Label>
    <Form.Select aria-label="Dog age" className="form-control" value={dogAge}
                onChange={(event) => setDogAge(event.target.value)}>
   
    <option>Select Dog's Age</option>
      <option value="1">Puppy</option>
      <option value="2">Youth</option>
      <option value="3">Adult</option>
      <option value="4">Senior</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="font-weight-bold text-small col-md-12">
    <Form.Label>Is your dog vaccinated?</Form.Label>
    <Form.Select aria-label="label" className="form-control" value={dogVaccinations}
                onChange={(event) => setDogVaccinations(event.target.value)}>
  
      <option>Vaccination Status</option>
      <option value="1">Yes</option>
      <option value="2">No</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="font-weight-bold text-small col-md-12">
    <Form.Label>Is your dog neutered/spayed?</Form.Label>
    <Form.Select aria-label="label" className="form-control" value={dogNeuter}
                onChange={(event) => setDogNeuter(event.target.value)}>
    
      <option>Neutered/Spayed</option>
      <option value="1">Yes</option>
      <option value="2">No</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="font-weight-bold text-small col-md-12">
    <Form.Label>What is your dog's temperment?</Form.Label>
    <Form.Select aria-label="label" className="form-control" value={dogTemperment}
                onChange={(event) => setDogTemperment(event.target.value)}>
   
      <option>Temperment</option>
      <option value="1">Shy</option>
      <option value="2">Calm</option>
      <option value="3">Energetic</option>
      <option value="4">Leader</option>
    </Form.Select>
    </Form.Group>


      <Form.Group className="font-weight-bold text-small col-md-12" controlId="exampleForm.ControlTextarea1" value={dogNotes}
                onChange={(event) => setDogNotes(event.target.value)}>
        <Form.Label>Share some notes about your dog!</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

{/* connect cloudinary! */}
      <Form.Group className="font-weight-bold text-small col-md-12" controlId="formFile"  value={dogPicture}
                onChange={(event) => setDogPicture(event.target.value)}>
        <Form.Label>Upload a photo of your dog here: </Form.Label>
        <UploadWidget/>
      </Form.Group>

<Form.Group className="font-weight-bold text-small col-md-12">
<Form.Label>What is your preferred day to meet?</Form.Label>
      <Form.Select aria-label="label" className="form-control" value={preferredDays}
                onChange={(event) => setPreferredDays(event.target.value)}>
    
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
    </Form.Group>

    <Form.Group className="font-weight-bold text-small col-md-12">
    <Form.Label>What is your preferred time of day to meet?</Form.Label>
    <Form.Select aria-label="label" className="form-control" value={preferredTimes}
                onChange={(event) => setPreferredTimes(event.target.value)}>
 
      <option>Select Preferred Times</option>
      <option value="1">Morning</option>
      <option value="2">Afternoon</option>
      <option value="3">Evening</option>
      <option value="4">No preference</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="font-weight-bold text-small col-md-12" controlId="formBasicText" value={preferredLocation}
                onChange={(event) => setPreferredLocation(event.target.value)}>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" placeholder="Enter your zip code" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
 

            </div>
          </div>
       
        </Form>


    )

    }

       


export default AddDog;



