import React from "react";
// import React from 'react';
import { Button, Card, Accordion } from "react-bootstrap";

export default function Dog({
  dog,
  saveDog,
  unsaveDog,
  deleteDog,
  updateState,
}) {
  return (
    <Card className="card">
      <Card.Img
        className="card-img"
        variant="top"
        src={dog.dog_picture}
        style={{ width: "100%", height: "18rem", objectFit: "cover" }}
        alt={dog.dog_name}
      />

      <Card.Body>
        <Card.Title>{dog.dog_name}</Card.Title>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>About Me</Accordion.Header>
            <Accordion.Body>
              <p>Username: {dog.dog_owner.username}</p>
              <p>Breed: {dog.dog_breed}</p>
              <p>Gender: {dog.dog_gender}</p>
              <p>Size: {dog.dog_size}</p>
              <p>Age: {dog.dog_age}</p>
              <p>Vaccinated:{dog.dog_vaccinations ? "Yes" : "No"}</p>
              <p>Neutered or Spayed: {dog.dog_neuter_spayed ? "Yes" : "No"}</p>
              <p>Temperment: {dog.dog_temperment}</p>
              <p>Additional Info: {dog.dog_notes}</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Avaibility</Accordion.Header>
            <Accordion.Body>
              <p>Preferred Days:{dog.preferred_days.join(", ")}</p>
              <p>Preferred Time of Day:{dog.preferred_timeofday.join(", ")}</p>
              <p>Preferred Location:{dog.preferred_location.join(", ")}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {saveDog ? (
          <Button
            className="add-dog-btn"
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
            className="delete-dog-btn"
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
            className="delete-dog-btn"
            onClick={async () => {
              await deleteDog({
                variables: {
                  dog_id: dog._id,
                },
              });

              if (updateState) {
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
