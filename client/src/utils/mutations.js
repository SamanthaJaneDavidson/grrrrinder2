import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
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

//Added for Stripe
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

//Looks fine per Robert
export const ADD_DOG = gql`
  mutation addDog($input: SavedDogInput) {
    addDog(input: $input) {
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
  }
`;

export const SAVE_DOG = gql`
mutation Mutation($dog_id: ID!) {
  saveDog(dog_id: $dog_id) {
    _id
    username
  }
}
`;

    //not sure about this- ask tutor - per Robert probably needs to be an ID data type instead of a string. ID data type in typedef as well that is teh value parameter of the dog ID. Line 57 needs to be $dog_id instead of dogText
        //AL-Updated.
    export const REMOVE_DOG = gql`
   mutation removeDog($dog_id: ID!) {
     removeDog(dog_id: $dog_id) {
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
     }
 `;
