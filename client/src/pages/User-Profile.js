import React, { useState } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

import { Card} from 'react-bootstrap'

export default function Profile () {
  // const display = useDispatch();
  // const state = useSelector((state) => state);
const {loading, data} = useQuery(QUERY_ME);
const userData = data?.me||{}

  return (
  <div>
    <h2> testing </h2>
    {/* map user data here! */}
  </div>
  );
}
