import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Header from './Header';

const App = () => {


  return (
    <div id="app" className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
