import React from "react";
// import React from 'react';
import { Button, Card, Accordion } from "react-bootstrap";

export default function Dog({ dog, saveDog, unsaveDog, deleteDog, updateState }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={dog.dog_picture}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
        alt={dog.dog_name}
      />

      <Card.Body>
        <Card.Title>{dog.dog_name}</Card.Title>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Information</Accordion.Header>
            <Accordion.Body>
              <p>username = {dog.dog_owner.username}</p>
              <p>breed = {dog.dog_breed}</p>
              <p>gender = {dog.dog_gender}</p>
              <p>size = {dog.dog_size}</p>
              <p>age = {dog.dog_age}</p>
              <p>vaccinations = {dog.dog_vaccinations ? "Yes" : "No"}</p>
              <p>neuter_spayed = {dog.dog_neuter_spayed ? "Yes" : "No"}</p>
              <p>temperment = {dog.dog_temperment}</p>
              <p>notes = {dog.dog_notes}</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Avaibility</Accordion.Header>
            <Accordion.Body>
              <p>preferred_days = {dog.preferred_days.join(", ")}</p>
              <p>preferred_timeofday = {dog.preferred_timeofday.join(", ")}</p>
              <p>preferred_location = {dog.preferred_location.join(", ")}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {saveDog ? (
          <Button
            onClick={() => {
              saveDog({
                variables: {
                  dog_id: dog._id,
                },
              });
            }}
          >
            Save Dog
          </Button>
        ) : undefined}

        {unsaveDog ? (
          <Button
            onClick={async () => {
              await unsaveDog({
                variables: {
                  dog_id: dog._id,
                },
              });

              await updateState();
            }}
          >
            Remove Dog
          </Button>
        ) : undefined}

        {deleteDog ? (
          <Button
            onClick={async () => {
              await deleteDog({
                variables: {
                  dog_id: dog._id,
                },
              });

              if(updateState) {
                updateState();
              }
            }}
          >
            Delete Dog
          </Button>
        ) : undefined}
      </Card.Body>
    </Card>
  );
}
