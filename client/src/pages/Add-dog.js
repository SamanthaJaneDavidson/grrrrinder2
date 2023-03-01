import React, { useState } from "react";
// import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_DOG } from "../utils/mutations";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import UploadWidget from "../components/UploadWidget";
// import { redirect } from "react-router-dom";

function AddDog() {
  const [dogName, setDogName] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [dogTemperment, setDogTemperment] = useState("");
  const [dogVaccinations, setDogVaccinations] = useState("");
  const [dogNeuter, setDogNeuter] = useState("");
  const [dogNotes, setDogNotes] = useState("");
  const [dogPicture, setDogPicture] = useState("");
  const [preferredDays, setPreferredDays] = useState("");
  const [preferredTimes, setPreferredTimes] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");

  const [addDog] = useMutation(ADD_DOG);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const { data } = await addDog({
      variables: {
        input: {
          dog_name: dogName,
          dog_breed: dogBreed,
          dog_gender: dogGender,
          dog_size: dogSize,
          dog_age: dogAge,
          dog_vaccinations: dogVaccinations == "1",
          dog_neuter_spayed: dogNeuter == "1",
          dog_temperment: dogTemperment,
          dog_notes: dogNotes,
          dog_picture: dogPicture,
          preferred_days: preferredDays,
          preferred_timeofday: preferredTimes,
          preferred_location: preferredLocation,
        },
      },
    });

    if (data.addDog && data.addDog.username) {
      window.location.href = "/profile";
    }
    // ADD SAVE_DOG data USING FORM INPUT VALUES
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <h1 className="text-box"> Create Your Dog's Profile !</h1>
      <hr />

      <div className="dog-card">
        <div className="dog-cardbody">
          <h4> Please fill out this form</h4>

          <Form.Group
            className="font-weight-bold text-small col-md-12"
            controlId="formBasicText"
          >
            <Form.Label>Dog Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your dog name"
              required
              value={dogName}
              onChange={(event) => setDogName(event.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="font-weight-bold text-small col-md-12"
            controlId="formBasicText"
          >
            <Form.Label>Dog Breed</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your dog breed"
              value={dogBreed}
              required
              onChange={(event) => setDogBreed(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="font-weight-bold text-small col-md-12">
            <Form.Label>Dog Gender</Form.Label>
            <Form.Select
              className="form-control"
              aria-label="Dog gender"
              value={dogGender}
              required
              onChange={(event) => setDogGender(event.target.value)}
            >
              <option>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="font-weight-bold text-small col-md-12">
            <Form.Label>Dog Size</Form.Label>
            <Form.Select
              className="form-control"
              aria-label="Dog size"
              value={dogSize}
              required
              onChange={(event) => setDogSize(event.target.value)}
            >
              <option>Select Dog's Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="font-weight-bold text-small col-md-12">
            <Form.Label>Dog Age</Form.Label>
            <Form.Select
              aria-label="Dog age"
              className="form-control"
              value={dogAge}
              required
              onChange={(event) => setDogAge(event.target.value)}
            >
              <option>Select Dog's Age</option>
              <option value="Puppy">Puppy</option>
              <option value="Youth">Youth</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="font-weight-bold text-small col-md-12">
            <Form.Label>Is your dog vaccinated?</Form.Label>
            <Form.Select
              aria-label="label"
              className="form-control"
              value={dogVaccinations}
              required
              onChange={(event) => setDogVaccinations(event.target.value)}
            >
              <option>Vaccination Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="font-weight-bold text-small col-md-12">
            <Form.Label>Is your dog neutered/spayed?</Form.Label>
            <Form.Select
              aria-label="label"
              className="form-control"
              value={dogNeuter}
              required
              onChange={(event) => setDogNeuter(event.target.value)}
            >
              <option>Neutered/Spayed</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="font-weight-bold text-small col-md-12">
            <Form.Label>What is your dog's temperment?</Form.Label>
            <Form.Select
              aria-label="label"
              className="form-control"
              value={dogTemperment}
              required
              onChange={(event) => setDogTemperment(event.target.value)}
            >
              <option>Temperment</option>
              <option value="Shy">Shy</option>
              <option value="Calm">Calm</option>
              <option value="Energetic">Energetic</option>
              <option value="Leader">Leader</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            className="font-weight-bold text-small col-md-12"
            controlId="exampleForm.ControlTextarea1"
            value={dogNotes}
            required
            onChange={(event) => setDogNotes(event.target.value)}
          >
            <Form.Label>Share some notes about your dog!</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          {/* connect cloudinary! */}
          <Form.Group
            className="font-weight-bold text-small col-md-12"
            controlId="formFile"
            required
            value={dogPicture}
          >
            <Form.Label>Upload a photo of your dog here: </Form.Label>
            <UploadWidget
              id="upload-widget"
              onChange={(event) => {
                console.log(event);
                console.log("Set to " + event.info.secure_url);
                setDogPicture(event.info.secure_url);
              }}
            />
          </Form.Group>

          <Form.Group className="font-weight-bold text-small col-md-12">
            <Form.Label>What is your preferred day to meet?</Form.Label>
            <Form.Select
              aria-label="label"
              className="form-control"
              value={preferredDays}
              required
              onChange={(event) => setPreferredDays(event.target.value)}
            >
              <option>Select Days</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday4">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
              <option value="No preference">No preference</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="font-weight-bold text-small col-md-12">
            <Form.Label>What is your preferred time of day to meet?</Form.Label>
            <Form.Select
              aria-label="label"
              className="form-control"
              value={preferredTimes}
              required
              onChange={(event) => setPreferredTimes(event.target.value)}
            >
              <option>Select Preferred Times</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="No preference">No preference</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            className="font-weight-bold text-small col-md-12"
            controlId="formBasicText"
            value={preferredLocation}
            required
            onChange={(event) => setPreferredLocation(event.target.value)}
          >
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter your zip code" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default AddDog;
