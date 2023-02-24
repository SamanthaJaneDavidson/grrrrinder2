//importing GraphQL
import { gql } from '@apollo/client';


//not sure about this - ask tutor - don't need a query for users, but will need a query for dogs. Similar to saveddogs object starting at line 35
// export const QUERY_USER = gql`query user($username: String!){
//     _id
//     username
//     email
//     saved_dogs{
//      _id
//      dog_name
//      dog_breed
//      dog_gender
//      dog_size 
//      dog_age
//      dog_vaccinations
//      dog_neuter_spayed
//      dog_temperment
//      dog_notes
//      dog_picture
//      preferred_days
//      preferred_timeofday
//      preferred_location
//     }
// }`;


//Added based on Robert's notes from above.
export const QUERY_DOG = gql`
query dog{
    dog{
     dog_name
     dog_breed
     dog_gender
     dog_size 
     dog_age
     dog_vaccinations
     dog_neuter_spayed
     dog_temperment
     dog_notes
     dog_picture
     dog_owner
     preferred_days
     preferred_timeofday
     preferred_location
    }
}`;

export const QUERY_ME = gql`
    query me{
        _id
        username
        email
        saved_dogs{
            username
            email
            saved_dogs{
             dog_name
             dog_breed
             dog_gender
             dog_size 
             dog_age
             dog_vaccinations
             dog_neuter_spayed
             dog_temperment
             dog_notes
             dog_picture
             dog_owner
             preferred_days
             preferred_timeofday
             preferred_location
        }
    }}`