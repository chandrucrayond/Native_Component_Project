import React from 'react';
import Greeting from '../../components/Greetings/Greeting';

function Homepage() {
  return (
    <Greeting
      name="mismatch"
      style={{
        color: 'blue',
        fontSize: 40,
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}

export default Homepage;
