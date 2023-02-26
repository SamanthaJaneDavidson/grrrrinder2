import React, { useState } from "react";
// import React from 'react';
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import { Accordion, Button } from "react-bootstrap";
import { Card } from 'react-bootstrap';
import { QUERY_ME, QUERY_DOG, ADD_DOG } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { SAVE_DOG } from "../utils/mutations";

function SearchDogs() {
  const [filteredData, setFilter] = useState({});

  const handleCheckboxChange = (e) => {
    const filterDataInputs = document.querySelectorAll("input.search-criteria");
    const dataToFilter = {};

    for (const input of filterDataInputs) {
      // If the value is nothing, this field will not be filtered.
      dataToFilter[input.id] = input.value;
    }

    setFilter(dataToFilter);
  };

  // TO DO: create another query to filter through the database
  const myFilter = (dog) => {
    for (const key in filteredData) {
      if (filteredData[key] && dog[key] !== filteredData[key]) {
        return false;
      }
    }
    return dog;
  };

  const [saveDog] = useMutation(SAVE_DOG, {
    onCompleted: (data) => {
      console.log(data);
    }
  });

  const { loading, data } = useQuery(QUERY_ME);

  const { loading: loadingDogs, data: dogData } = useQuery(QUERY_DOG);
  const userData = data?.me || {};

  console.log(dogData);
  if (loading || loadingDogs) {
    return <h2>loading</h2>
  }

  return (
    <div>
      <Searchbar handleCheckboxChange={handleCheckboxChange} />
      {dogData.dog.filter(myFilter).map((dog) => {
        return (
          <div key={dog._id}>
            <Card>
              <Card.Img
                variant="top"
                src={dog.dog_picture}
                style={{ width: "100%", height: "35vw", objectFit: "cover" }}
                alt={dog.dog_name}
              />
              {/* TODO: connect cloudinary to picture */}
              <Card.Body>
                <Card.Title>{dog.dog_name}</Card.Title>
                {/* <Accordion.Item eventKey="0">
                  <Accordion.Header>Profile</Accordion.Header>
                  <Accordion.Body> */}
                <p>breed = {dog.dog_breed}</p>
                <p>gender = {dog.dog_gender}</p>
                <p>size = {dog.dog_size}</p>
                <p>age = {dog.dog_age}</p>
                <p>vaccinations = {dog.dog_vaccinations}</p>
                <p>neuter_spayed = {dog.dog_neuter_spayed}</p>
                <p>temperment = {dog.dog_temperment}</p>
                <p>notes = {dog.dog_notes}</p>
                {/* </Accordion.Body>
                </Accordion.Item> */}

                {/* <Accordion.Item eventKey="1">
                  <Accordion.Header>Avaibility</Accordion.Header>
                  <Accordion.Body> */}
                <p>preferred_days = {dog.preferred_days.join(', ')}</p>
                <p>preferred_timeofday = {dog.preferred_timeofday.join(', ')}</p>
                <p>preferred_location = {dog.preferred_location.join(', ')}</p>
                  {/* </Accordion.Body>
                </Accordion.Item> */}

                <Button onClick={() => {
                  saveDog({
                    variables: {
                      dog_id: dog._id
                    }
                  });
                }}>Save Dog</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default SearchDogs;
