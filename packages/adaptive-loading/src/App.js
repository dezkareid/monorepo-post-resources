import React from 'react';
import { useNetworkStatus } from 'react-adaptive-hooks/network';
import logo from './logo.svg';
import './App.css';
import useOnline from './useOnline'

function App() {
  const { effectiveConnectionType } = useNetworkStatus();
  const { online } = useOnline();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Connection type {effectiveConnectionType}
        </p>
        <p>{online ? 'Is online':'offline :('}</p>
      </header>
    </div>
  );
}

export default App;
