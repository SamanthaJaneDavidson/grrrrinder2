import React, { useState } from "react";
// import React from 'react';
import Searchbar from "../components/Searchbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { QUERY_ME, QUERY_DOG } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { SAVE_DOG } from "../utils/mutations";
import Card from "../components/Dog";

function Dogs() {
  //   // My data of dogs presented as an array of objects.
  //   // Eventually this will get replaced with CRUD to our/3rd apis.
  const originalData = [
    {
      dog_name: "Pigeon",
      dog_breed: "Beagle",
      dog_gender: "Female",
      dog_size: "Small",
      dog_age: "Senior",
      dog_vaccinations: 1,
      dog_neuter_spayed: 1,
      dog_temperment: "Shy",
      dog_notes: "She would prefer another female, smaller dog to play with",
      dog_picture:
        "https://res.cloudinary.com/dh82x6mau/image/upload/v1671070887/kiaatkrq1tfsgojzmfsb",
      dog_owner: 1,
      preferred_days: "Monday",
      preferred_timeofday: "Evening",
      preferred_location: 19147,
    },
  ];
}

// This is where we define our original state called filteredData and our setFilter which
// will update filteredData when called. We also define the initial state of filteredData
// with our originalData.
const [filteredData, setFilter] = useState(originalData);

// A function (that will get passed as a prop to the Searchbar component)
// that filters my originalData array based on what is being typed in the
// input field. At the end, we set the new myFilter filtered data to the
// filter state so only the correct dogs render on the page.
const handleSearchboxChange = (e) => {
  const myFilter = originalData.filter((dog) => {
    // If the search box is empty, just return all the dogs.
    if (e.target.value === "") return originalData;
    // We only return the dog if the zip (should it be zip? or zip-code-search? preferred_location?) includes what is being typed.
    return dog.zip.includes(e.target.value);
  });
  // This is where we set the state of our new filtered data.
  setFilter(myFilter);

  // Ceckbox function for multiple filtering
  const handleChange = (e) => {
    // Get all the checkboxes
    const checkboxOptions = document.querySelectorAll(".form-check-input");
    let checkboxFilter = {};
    // Create the object filter as before.
    for (let i = 0; i < checkboxOptions.length; i++) {
      const classList = checkboxOptions[i].classList;
      const myCategory = classList[classList.length - 1];
      if (checkboxOptions[i].classList.length > 1) {
        if (!checkboxFilter[myCategory.toLowerCase()]) {
          checkboxFilter[myCategory.toLowerCase()] = [];
          checkboxFilter[myCategory.toLowerCase()].push({
            [checkboxOptions[i].nextSibling.innerHTML.toLowerCase()]:
              checkboxOptions[i].checked,
          });
        } else {
          checkboxFilter[myCategory.toLowerCase()].push({
            [checkboxOptions[i].nextSibling.innerHTML.toLowerCase()]:
              checkboxOptions[i].checked,
          });
        }
      }
    }

    //Begin the nightmare filter!
    const myFilter = originalData.filter(function (dog) {
      //keep track of number of times a dog passes the filter. This will be used to compare against the number of boxes checked at the end.
      let counter = 0;
      // For loop for each section "Gender" or "Size" etc.
      for (let key in checkboxFilter) {
        console.log(checkboxFilter[key]); // array in "gender" section containing male and female objects
        // for loop for each element in the the gender array (i.e. those male and female objects)
        for (let index = 0; index < checkboxFilter[key].length; index++) {
          // getting our values and testing them
          let boxClicked = checkboxFilter[key][index];
          console.log("What box was clicked? " + boxClicked[dog[key]]);
          let isTheBoxChecked = boxClicked[dog[key]] === true;
          console.log(isTheBoxChecked);
          // dog[key] is the careful or wild key in the dog data array.
          // Object.keys(boxClicked)[0] is the the key from the box that was clicked
          console.log(
            "What values are being compared? " +
              dog[key] +
              " " +
              Object.keys(boxClicked)[0]
          );
          let doTheValuesMatch = dog[key] == Object.keys(boxClicked)[0];
          // boolean saying true/false if the two keys match
          console.log(doTheValuesMatch);
          let cantBeUndefined = boxClicked[dog[key]] == null;
          console.log("is the value undefined? " + cantBeUndefined);
          // We need to know if the box was not clicked. If it isn't it is undefined
          console.log(cantBeUndefined);
          // If statement that only increases the counter if a dog passes each filter test
          if (!cantBeUndefined && isTheBoxChecked && doTheValuesMatch) {
            console.log("This dog passes: " + dog.name);
            // increase the counter for our comparison at the end
            counter++;
          }
        }
      }
      let numberChecked = 0;
      // These nested for loops go and checks if a box is true or false. Similar to the above section, we need to do a loop in a loop.
      // The first loop for the Style and Mood and Food sections
      for (let current in checkboxFilter) {
        let option1 = checkboxFilter[current];
        // This loop then goes for each part in Style or Mood or Food (i.e. careful, wild, happy, sad, etc)
        for (let index = 0; index < option1.length; index++) {
          const element = option1[index];
          console.log(Object.values(element)[0]);
          // If the box was checked, increase the counter.
          if (Object.values(element)[0]) {
            numberChecked++;
          }
        }
      }
      // If the number of boxes checked match the number of passes a dog had, return the dog as having passed the filter.
      // This is absolutely not best practices, but it works so oh well!
      if (numberChecked === counter) {
        return dog;
      }
    });
    setFilter(myFilter);
  };

  return (
    <div className="row">
      {/* This is a very silly Modal that displays a video when the DO NOT PUSH button is pressed */}

      {/* Notice that I made a searchbar component. Now if I want to use it in other pages all my code is centralized! */}
      {/* Also notice I am passing my two functions as props. This will allow the Searchbar to filter the data in that component */}
      <Searchbar
        handleChange={handleChange}
        handleSearchboxChange={handleSearchboxChange}
      />
      {/* Here is where we render each card. Notice a few things. First, it is mapping through the filteredData and not
        the originalData. That's because we set the filteredData as originalData initially with state, and because we want only 
        our filtered results to appear. This is how we can use JSX expressions to do neat things in react! */}
      {filteredData.map((dog) => {
        return (
          // This is using bootstrap's row/col layout to make the page look pretty and responsive.
          <div className="col-sm align-items-stretch" key={dog.id}>
            {/* Here we send each dog information to the card component so we can display their info. */}
            {/* Notice that I am sending them as props with the keys called name, image, and description. */}
            <Card
              name={dog.name}
              image={dog.image}
              description={dog.description}
            />
            {/* think this needs to change to somethings else^^ */}
          </div>
        );
      })}
    </div>
  );
};

export default Dogs;
