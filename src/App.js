import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path='/' exact />
          <FontAwesomeIcon icon={faPlane} />
        </Routes>
      </Navbar>
    </Router>  );
}

export default App;
