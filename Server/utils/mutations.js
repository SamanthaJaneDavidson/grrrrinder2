import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
  }
}
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
  }
}
`;

export const SAVE_DOG = gql`
mutation SaveDog($token: String!, $input: SaveDogInput) {
  saveDog(token: $token, input: $input) {
    dogCount
  }
}
`;

export const REMOVE_BOOK = gql`
mutation RemoveDog($_Id: String!, $token: String!) {
  removeDog(_Id: $dogId, token: $token) {
    username
    savedDog {
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
    }
    email
    dogCount
    _id
  }
}
`;
