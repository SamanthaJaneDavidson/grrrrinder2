import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navigation';
import Searchbar from '../components/Searchbar';
import Footer from "../components/Footer";

function SearchDogs() {

   <Navbar/>
        const [filteredData, setFilter] = useState(data);
       
    const handleCheckboxChange = (e) => {
       const checkBoxesOpt = document.querySelectorAll(".");
       let checkbox ={};
       for (let i = 0; i < checkBoxesOpt; i++){
        checkbox[checkBoxesOpt[i].nextSibling.innerHTML.toLowerCase()] = checkBoxesOpt
       }
    }
    // TO DO: create another query to filter through the database
    const myFilter = data.filter(function(dogs){
        for (let key in checkbox){
            if(dogs[key] != checkBoxesOpt[key] && checkBoxesOpt[key] != false){
                return false;
            }
        }
        return dogs
    });
    setFilter(myFilter)
    return (
        <div>
            <Searchbar handleCheckboxChange={handleCheckboxChange}/>
            {(filteredData.map(dog => {
                return (
                    <div>
                        <Card>
                        <Card.Img variant="top" src={userData.dog_picture} style={{width: "100%", height: "35vw", objectFit: "cover"}} alt={userData.dog_name}/> 
      {/* TODO: connect cloudinary to picture */}
<Card.Body>

<Card.Title>{dog.name}</Card.Title>
<Accordion.Item eventKey="0">
<Accordion.Header>Profile</Accordion.Header>
<Accordion.Body> 
     breed = {`Breed: ${dog.breed}`}
     gender = {`Gender: ${dog.gender}`}
     size = {` Size: ${dog.size}`}
     age = {` Age: ${dog.age}`}
     vaccinations = {` Vaccinated: ${dog.vaccinations}`}
     neuter_spayed = {` Neutered/Spayed: ${dog.neuter_spayed}`}
     temperment ={` Temperment: ${dog.temperment}`}
     notes = {` Additional Notes: ${dog.notes}`}
     </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
<Accordion.Header>Avaibility</Accordion.Header>
<Accordion.Body> 
     preferred_days = {` Preferred Days: ${dog.preferred_days}`}
     preferred_timeofday = {` Preferred Times: ${dog.preferred_timeofday}`}
     preferred_location = {` Preferred Location: ${dog.preferred_location}`}
   
     </Accordion.Body>
      </Accordion.Item>
    

  </Card.Body>
                        </Card>
                    </div>
                )
            }))}
            <Footer/>
        </div>
    );
}
export default SearchDogs;