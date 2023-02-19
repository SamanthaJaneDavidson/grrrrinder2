import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//not sure about this- ask tutor
export const SAVE_DOG = gql`
  mutation saveDog($input: SavedDogInput) {
    saveDog(input: $input) {
      _id
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
      preferred_days
      preferred_timeofday
      preferred_location
    //   createdAt
    //  comments {
    //     _id
    //     commentText
    //  }
    }
  }
`;

    //not sure about this- ask tutor
    export const REMOVE_DOG = gql`
   mutation removeDog($dog_id: String!) {
     removeDog(dog_id: $dogText) {
        _id
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
        preferred_days
        preferred_timeofday
        preferred_location
       }
     }
   }
 `;
