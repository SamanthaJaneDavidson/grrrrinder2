const { gql } = require("apollo-server-express");

//typeDefs set up
const typeDefs = gql`



type User {
  _id: ID
  username: String
  email: String
  savedDogMatches: [Dogs]!
}

 
type Query {
  me: User
}


type Dogs {
    dogID: String!
    dog_name: String
    dog_breed: String
    dog_gender: String
    dog_size: String
    dog_age: String
    dog_vaccinations: String
    dog_neuter_spayed: String
    dog_temperment: String
    dog_notes: String
    dog_picture: String
    owner_id: ID,
    preferred_days: [String]
    preferred_timeofday: [String]
    preferred_location: [String]
}



type Auth {
  token: String
  user: User
}

input SaveDogInput {
    dog_name: String
    dog_breed: String
    dog_gender: String
    dog_size: String
    dog_age: String
    dog_vaccinations: String
    dog_neuter_spayed: String
    dog_temperment: String
    dog_notes: String
    dog_picture: String
    owner_id: ID,
    preferred_days: [String]
    preferred_timeofday: [String]
    preferred_location: [String]
}


type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  saveDog(input: SavedDog, token: String!): User
  removeDog (dogId: String!, token: String!): User
}`;

module.exports = typeDefs;