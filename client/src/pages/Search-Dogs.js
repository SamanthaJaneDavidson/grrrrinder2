import React, { useState } from "react";
// import React from 'react';
import Searchbar from "../components/Searchbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { QUERY_ME, QUERY_DOG } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { SAVE_DOG } from "../utils/mutations";
import Dog from "../components/Dog";

function SearchDogs() {
  const [filteredData, setFilter] = useState({});

  const handleInputChange = () => {
    const dataToFilter = {};

    const zip = document.querySelector("input[name='zip']");
    dataToFilter.preferred_location = zip.value ? [zip.value] : [];

    const gender = document.querySelectorAll('input[name="gender"]');
    dataToFilter.dog_gender = [];

    if (gender[0].checked) {
      dataToFilter.dog_gender.push("male");
    }
    if (gender[1].checked) {
      dataToFilter.dog_gender.push("female");
    }

    const neuteredOrSpayed = document.querySelectorAll(
      'input[name="dog_neuter_spayed"]'
    );
    dataToFilter.dog_neuter_spayed = [];

    if (neuteredOrSpayed[0].checked) {
      dataToFilter.dog_neuter_spayed.push(false);
    }
    if (neuteredOrSpayed[1].checked) {
      dataToFilter.dog_neuter_spayed.push(true);
    }

    const vaccinated = document.querySelectorAll('input[name="vaccinated"]');
    dataToFilter.dog_vaccinations = [];

    if (vaccinated[0].checked) {
      dataToFilter.dog_vaccinations.push(false);
    }
    if (vaccinated[1].checked) {
      dataToFilter.dog_vaccinations.push(true);
    }

    const sizes = document.querySelectorAll('input[name="size"]');
    dataToFilter.dog_size = [];

    if (sizes[0].checked) {
      dataToFilter.dog_size.push("small");
    }
    if (sizes[1].checked) {
      dataToFilter.dog_size.push("medium");
    }
    if (sizes[2].checked) {
      dataToFilter.dog_size.push("large");
    }

    const ages = document.querySelectorAll('input[name="age"]');
    dataToFilter.dog_age = [];

    if (ages[0].checked) {
      dataToFilter.dog_age.push("puppy");
    }
    if (ages[1].checked) {
      dataToFilter.dog_age.push("youth");
    }
    if (ages[2].checked) {
      dataToFilter.dog_age.push("adult");
    }
    if (ages[3].checked) {
      dataToFilter.dog_age.push("senior");
    }

    const temperments = document.querySelectorAll('input[name="temperment"]');
    dataToFilter.dog_temperment = [];

    if (temperments[0].checked) {
      dataToFilter.dog_temperment.push("shy");
    }
    if (temperments[1].checked) {
      dataToFilter.dog_temperment.push("calm");
    }
    if (temperments[2].checked) {
      dataToFilter.dog_temperment.push("energetic");
    }
    if (temperments[3].checked) {
      dataToFilter.dog_temperment.push("outgoing");
    }
    if (temperments[4].checked) {
      dataToFilter.dog_temperment.push("leader");
    }

    const days = document.querySelectorAll('input[name="days"]');
    dataToFilter.preferred_days = [];

    if (days[0].checked) {
      dataToFilter.preferred_days.push("monday");
    }
    if (days[1].checked) {
      dataToFilter.preferred_days.push("tuesday");
    }
    if (days[2].checked) {
      dataToFilter.preferred_days.push("wednesday");
    }
    if (days[3].checked) {
      dataToFilter.preferred_days.push("thursday");
    }
    if (days[4].checked) {
      dataToFilter.preferred_days.push("friday");
    }
    if (days[5].checked) {
      dataToFilter.preferred_days.push("saturday");
    }
    if (days[6].checked) {
      dataToFilter.preferred_days.push("sunday");
    }

    const times = document.querySelectorAll('input[name="time"]');
    dataToFilter.preferred_timeofday = [];

    if (times[0].checked) {
      dataToFilter.preferred_timeofday.push("morning");
    }
    if (times[1].checked) {
      dataToFilter.preferred_timeofday.push("afternoon");
    }
    if (times[2].checked) {
      dataToFilter.preferred_timeofday.push("evening");
    }

    setFilter(dataToFilter);
  };

  // TO DO: create another query to filter through the database
  const myFilter = (dog) => {
    if (filteredData.preferred_location === undefined) {
      // The filters have not been set.
      return false;
    }

    for (const key of Object.keys(filteredData)) {
      if (key === "dog_vaccinations" || key === "dog_neuter_spayed") {
        if (!filteredData[key].includes(dog[key])) {
          return false;
        }
      } else if (
        key === "preferred_days" ||
        key === "preferred_timeofday" ||
        key === "preferred_location"
      ) {
        let found = false;
        for (const value of dog[key]) {
          if (filteredData[key].includes(value.toLowerCase())) {
            found = true;
          }
        }
        if (!found) {
          return false;
        }
      } else {
        if (!filteredData[key].includes(dog[key].toLowerCase())) {
          return false;
        }
      }
    }

    return true;
  };

  const [saveDog] = useMutation(SAVE_DOG, {
    onCompleted: (data) => {
      alert("Saved Dog!");
    },
  });

  const { loading, data } = useQuery(QUERY_ME);

  const { loading: loadingDogs, data: dogData } = useQuery(QUERY_DOG);
  const userData = data?.me || {};

  if (loading || loadingDogs) {
    return <h2>loading</h2>;
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={3}>
          <Searchbar handleChange={handleInputChange} />
        </Col>

        <Col sm={9}>
          <Row>
            {dogData.dog.filter(myFilter).map((dog) => {
              return (
                <Col xs={12} sm={12} md={6} key={dog._id}>
                  <Dog dog={dog} saveDog={saveDog} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchDogs;
