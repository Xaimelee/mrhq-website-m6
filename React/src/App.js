import './App.scss';
import React, { useState, useEffect } from 'react';
import GetCollection from './Frontend/GetCollection';
import DisplayCollection from './Frontend/DisplayCollection';

function App() {
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    GetCollection("getDogFood")
      .then(res => res.json())
      .then(data => {
        setCollection(data)
      })
  }, []);

  return (
    <div className="App">
      <DisplayCollection collection = {collection}/>
    </div>
  );
}

export default App;
