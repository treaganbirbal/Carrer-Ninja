import React from 'react';
import './App.css';

import AllJobs from './components/AllJobs'

function App() {
  return (
    <div className="App">
      <div className='main'>
        <h1>Welcome to Career Ninja</h1>
      </div>
      <AllJobs />
    </div>
  );
}

export default App;
