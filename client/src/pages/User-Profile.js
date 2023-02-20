import React, { useState } from 'react';
import {useDisplay, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

import { Card} from 'react-bootstrap'

export default function Profile () {
  const display = useDisplay();
  const state = useSelector((state) => state);

  const [dogName, setDogName] = useState('');
  const [dogPicture, setDogPicture] = useState('');
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

  return (
    <>
      <h1>Your Profile</h1>
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
            <button
              onClick={() =>
                display({
                  type: ADD_D0G,
                  payload: {
                    name: dogName,
                    gender: dogGender,
                    age: dogAge,
                    zize: dogSize,
                    temperment: dogTemperment,
                    vaccination: dogVaccinations,
                    neuter: dogNeuter,
                    days: preferredDays,
                    times: preferredTimes,
                    location: preferredLocation,
                  },
                })
              }
            >
              Add Dog
            </button>
          </div>
        </div>
      </section>
      
    </>
  );
}
