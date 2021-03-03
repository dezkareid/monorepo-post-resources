import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Keanu Clips</h1>
      </header>
      <div>
        <img className="keanu__image" src="https://placekeanu.com/640/360" alt="keanu random" />
      </div>
      <div className="keanu__actions">
        <button className="keanu__button" type="button">
          Share
        </button>
      </div>
    </div>
  );
}

export default App;
