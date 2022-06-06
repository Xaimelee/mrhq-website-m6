import './App.scss';
import React from 'react';
import DisplayCollection from './Frontend/DisplayCollection';

function App() {
  return (
    <div className="App">
      <DisplayCollection url = "getDogFood"/>
    </div>
  );
}

export default App;
