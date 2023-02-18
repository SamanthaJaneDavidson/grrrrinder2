import React from 'react';
import { useQuery } from '@apollo/client';

import Login from '../components/Login';
import Signup from '../components/Signup';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
    const {loading, data} = useQuery(QUERY_PROFILES);
    const profiles = data?.profiles || [];
  
    return (
      <main>
        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <Login />
          </div>
  
          <div className="col-12 col-md-10 my-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Signup
                profiles={profiles}
                title="Welcome to Grrrrinder"
              />
            )}
          </div>
        </div>
      </main>
    );
}