import React from 'react';
import './App.scss';
import {Outlet } from 'react-router-dom';
import { AppHeader } from './Components/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Outlet/>
    </div>
  );
}

export default App;
