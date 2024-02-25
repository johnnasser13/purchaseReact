import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import routes from './navbar/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;