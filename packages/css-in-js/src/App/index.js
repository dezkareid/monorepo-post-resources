import React from 'react';
import jss from '../jss';

const className = jss`
  color: black;
  font-size: 5rem;
`;

function App() {
  return (
    <div className={className}>
      <p>You have a new message!</p>
    </div>
  )
}

export default App;