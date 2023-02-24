//importing GraphQL
import { gql } from '@apollo/client';

//Added based on Robert's notes.
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

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;


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
             orders {
                _id
                purchaseDate
                products {
                  _id
                  name
                  description
                  price
                  quantity
                  image
                }
              }
        }
    }}`