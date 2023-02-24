const { gql } = require("apollo-server-express");

//typeDefs set up
const typeDefs = gql`



type User {
  _id: ID
  username: String
  email: String
  saved_dogs: [Dog]!
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
    dog_owner: ID!
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
    preferred_days: [String]
    preferred_timeofday: [String]
    preferred_location: [String]
}

# Moved the Queries at the bottom for oganizational purposes

type Query {
  me: User
  dog: Dog
}


# suggestion - don't use exclamations here 
type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(username: String!, password: String!): Auth
  saveDog(input: SaveDogInput): User
  removeDog (_id: String!): User
}`;

module.exports = typeDefs;