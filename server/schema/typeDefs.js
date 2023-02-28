const { gql } = require("apollo-server-express");

//typeDefs set up
const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
  dog: [Dog]!
  orders: [Order]
  saved_dogs: [Dog]!
}

type Dog {
  _id: ID
  dog_name: String
  dog_breed: String
  dog_gender: String
  dog_size: String
  dog_age: String
  dog_vaccinations: Boolean
  dog_neuter_spayed: Boolean
  dog_temperment: String
  dog_notes: String
  dog_picture: String
  preferred_days: [String]
  preferred_timeofday: [String]
  preferred_location: [String]
  dog_owner: ID!
}

type DogWithOwner {
  _id: ID
  dog_name: String
  dog_breed: String
  dog_gender: String
  dog_size: String
  dog_age: String
  dog_vaccinations: Boolean
  dog_neuter_spayed: Boolean
  dog_temperment: String
  dog_notes: String
  dog_picture: String
  preferred_days: [String]
  preferred_timeofday: [String]
  preferred_location: [String]
  dog_owner: User!
}

type Category {
  _id: ID
  name: String
}

type Product {
  _id: ID
  name: String
  description: String
  image: String
  quantity: Int
  price: Float
  category: Category
}

type Order {
  _id: ID
  purchaseDate: String
  products: [Product]
}

type Checkout {
  session: ID
}

type Auth {
  token: String
  user: User
}

input AddDogInput {
  dog_name: String!
  dog_breed: String!
  dog_gender: String!
  dog_size: String!
  dog_age: String!
  dog_vaccinations: Boolean!
  dog_neuter_spayed: Boolean!
  dog_temperment: String!
  dog_notes: String
  dog_picture: String!
  preferred_days: [String]
  preferred_timeofday: [String]
  preferred_location: [String]
}

type Query {
  me: User
  dog: [DogWithOwner]
  categories: [Category]
  products(category: ID, name: String): [Product]
  product(_id: ID!): Product
  order(_id: ID!): Order
  checkout(products: [ID]!): Checkout
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  addOrder(products: [ID]!): Order
  login(username: String!, password: String!): Auth
  addDog(input: AddDogInput): User
  saveDog(dog_id: ID!): User
  removeDog (dog_id: String!): User
  deleteDog (dog_id: String!): User
  updateProduct(_id: ID!, quantity: Int!): Product
}`;

module.exports = typeDefs;