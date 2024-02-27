import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import routes from './navbar/routes';
import NewPurchaseRequestForm from './purchase_req/new_purreq';
import 'bootstrap/dist/css/bootstrap.min.css';
import PurchaseRequest from './purchase_req/purchase_request';


<div className="app-main__outer">
  <div className="app-main__inner">
  <Route path="/home" component={NewPurchaseRequestForm} />
  <Route path="/purchase_request" component={PurchaseRequest} />
  </div>
</div>

function App() {
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
    </Router>);

    

      

}
  

export default App;