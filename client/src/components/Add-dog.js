//Test
import React, { useState } from 'react';
import Auth from '../utils/auth';
import {useMutation} from '@apollo/client';
import {SAVE_DOG} from '../utils/mutations';


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
            // fill up with dog data
        }
    })
console.log(data);
    // ADD SAVE_DOG data USING FORM INPUT VALUES
}


    return (
        <>
        <h1>Your Profile</h1>
        <form onSubmit={handleFormSubmit}>

        <section className="dog-card">
          <div>
            <div className="dog-cardbody">
              <h3> A bit about...</h3>
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
              </button>
            </div>
          </div>
        </section>
        </form>
      </>
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