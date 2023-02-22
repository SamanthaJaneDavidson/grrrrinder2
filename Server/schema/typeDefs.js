const { gql } = require("apollo-server-express");

//typeDefs set up
const typeDefs = gql`



type User {
  _id: ID
  username: String
  email: String
  saved_dogs: [Dog]!
}

 
type Query {
  me: User
}


type Dog {
    _id: ID
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
    preferred_days: [String]
    preferred_timeofday: [String]
    preferred_location: [String]
}



type Auth {
  token: String
  user: User
}

input SaveDogInput {
    dog_id: ID
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

# suggestion - don't use exclamations here 
type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(username: String!, password: String!): Auth
  saveDog(input: SaveDogInput): User
  removeDog (dog_id: String!): User
}`;

module.exports = typeDefs;