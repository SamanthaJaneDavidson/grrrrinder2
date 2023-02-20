<<<<<<< HEAD
import React from 'react';
import { Container } from 'react-bootstrap';
=======
import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
>>>>>>> main

import { Card} from 'react-bootstrap'

export default function Profile () {
  // const display = useDispatch();
  // const state = useSelector((state) => state);
const {loading, data} = useQuery(QUERY_ME);
const userData = data?.me||{}

  return (
<<<<<<< HEAD
    <Container style={{ backgroundColor: '#d4af7a' }}>
        <h1>Hi</h1>
    </Container>
=======
  <div>
    {/* map user data here! */}
  </div>
>>>>>>> main
  );
}
