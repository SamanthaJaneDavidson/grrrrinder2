import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME, ADD_DOG } from "../utils/queries";
// import CardColumns from 'react-bootstrap/CardColumns'
import { Accordion, Card, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { REMOVE_DOG } from "../utils/mutations";

export default function Profile() {
  const { loading, data } = useQuery(QUERY_ME);
  const [addDog] = useMutation(ADD_DOG, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const addDogPress = () => {
    addDog({
      variables: {
        input: {
          preferred_timeofday: ["Morning"],
          preferred_location: ["12345"],
          preferred_days: ["Monday"],
          dog_vaccinations: true,
          dog_temperment: "shy",
          dog_size: "small",
          dog_picture:
            "https://res.cloudinary.com/dh82x6mau/image/upload/v1671139410/yv5ndyqoihfub2stesjy",
          dog_notes: null,
          dog_neuter_spayed: false,
          dog_name: "dan",
          dog_gender: "male",
          dog_breed: "lab",
          dog_age: "puppy",
        },
      },
    });
  };

  const userData = data?.me || {};
  if (loading) {
    return <h2>loading</h2>;
  }

  return (
    <>
      <Link id="add-dog-link" to="/add-dog">
        Add a Dog to Your Profile
      </Link>
      <Container>
        <Col xs={5}>
          <Accordion>
            <Card>
              <Card.Img
                variant="top"
                src={userData.dog_picture}
                style={{ width: "100%", height: "35vw", objectFit: "cover" }}
                alt={userData.dog_name}
              />

              <Card.Body>
                <Card.Title>{userData.dog_name}</Card.Title>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Profile</Accordion.Header>
                  <Accordion.Body>
                    breed = {`Breed: ${userData.dog_breed}`}
                    gender = {`Gender: ${userData.dog_gender}`}
                    size = {` Size: ${userData.dog_size}`}
                    age = {` Age: ${userData.dog_age}`}
                    vaccinations = {` Vaccinated: ${userData.dog_vaccinations}`}
                    neuter_spayed ={" "}
                    {` Neutered/Spayed: ${userData.dog_neuter_spayed}`}
                    temperment ={` Temperment: ${userData.dog_temperment}`}
                    notes = {` Additional Notes: ${userData.dog_notes}`}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Avaibility</Accordion.Header>
                  <Accordion.Body>
                    preferred_days ={" "}
                    {` Preferred Days: ${userData.preferred_days}`}
                    preferred_timeofday ={" "}
                    {` Preferred Times: ${userData.preferred_timeofday}`}
                    preferred_location ={" "}
                    {` Preferred Location: ${userData.preferred_location}`}
                  </Accordion.Body>
                </Accordion.Item>
              </Card.Body>
            </Card>
          </Accordion>
            <Button onClick={addDogPress}>Add dog!</Button>
        </Col>
        
        <Col xs={7}>
          <Card className="saved-dog">
            <Card.Img
              variant="top"
              src={userData.dog_picture}
              style={{ width: "100%", height: "35vw", objectFit: "cover" }}
              alt={userData.dog_name}
            />
            <Card.Body>
              <Card.Title>{userData.dog_name}</Card.Title>
              <Card.Img
                as={Image}
                variant="top"
                src={userData.dog_picture}
                fluid={true}
                alt="Dog Picture"
              />
              <Card.Text>
                breed = {`Breed: ${userData.dog_breed}`}
                gender = {`Gender: ${userData.dog_gender}`}
                size = {` Size: ${userData.dog_size}`}
                age = {` Age: ${userData.dog_age}`}
                vaccinations = {` Vaccinated: ${userData.dog_vaccinations}`}
                neuter_spayed ={" "}
                {` Neutered/Spayed: ${userData.dog_neuter_spayed}`}
                temperment ={` Temperment: ${userData.dog_temperment}`}
                preferred_days = {` Preferred Days: ${userData.preferred_days}`}
                preferred_timeofday ={" "}
                {` Preferred Times: ${userData.preferred_timeofday}`}
                preferred_location ={" "}
                {` Preferred Location: ${userData.preferred_location}`}
                notes = {` Additional Notes: ${userData.dog_notes}`}
              </Card.Text>
              <Button className="btn" onClick={REMOVE_DOG} variant="primary">
                Remove Dog
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}

// <Link to "../components/Add-dog.js"> Add another profile</Link>
