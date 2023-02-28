import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import React, { useState } from "react";

// import CardColumns from 'react-bootstrap/CardColumns'
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { REMOVE_DOG, DELETE_DOG } from "../utils/mutations";
import Dog from "../components/Dog";

export default function Profile() {
  const [dogs, setDogs] = useState([]);
  const [savedDogs, setSavedDogs] = useState([]);
  const [dogsSet, setDogsSet] = useState(false);

  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache"
  });

  const userData = data?.me || {};

  const [removeDog] = useMutation(REMOVE_DOG);
  const [deleteDog] = useMutation(DELETE_DOG);

  if (loading) {
    return <h2>loading</h2>;
  }

  if (!dogsSet) {
    setDogs(userData.dog);
    setSavedDogs(userData.saved_dogs);
    setDogsSet(true);
  }

  return (
    <Container style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Row style={{flex: 1}}>
        <Col xs={12} sm={4} style={{ borderRight: "thick solid burlywood" }}>
          <h2>My Profile</h2>

          <h3>{userData.username}</h3>

          {dogs.map((dog) => {
            return (
              <Dog
                key={dog._id}
                dog={dog}
                deleteDog={deleteDog}
                updateState={() => {
                  setDogs([...dogs.filter((d) => d._id !== dog._id)]);
                }}
              />
            );
          })}

          <div style={{ marginTop: 30, marginBottom: 30 }}>
            <Link to="/add-dog"><button type="button" className="btn btn-outline-primary add-dog-btn">Add a Dog to Your Profile</button>
            </Link>
          </div>
        </Col>
        <Col xs={12} sm={8}>
          <h2>Saved Dogs</h2>
          <Row>
            {savedDogs.map((dog) => {
              return (
                <Col key={dog._id} xs={12} sm={6}>
                  <Dog
                    dog={dog}
                    unsaveDog={removeDog}
                    updateState={() => {
                      setSavedDogs([
                        ...savedDogs.filter((d) => d._id !== dog._id),
                      ]);
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

// <Link to "../components/Add-dog.js"> Add another profile</Link>
