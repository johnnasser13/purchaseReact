

import React, { useState } from 'react';
import Department from './Department';
import Company from './Company';
import User from './User';
import AC from './AC';
import ApproverRequest from './ApproverRequest';
import Item from './Item';
import PurchaseRequest from './PurchaseRequest';
import PurchaseItem from './PurchaseItem';
import NewPurchaseRequestForm from './NewPurchaseRequestForm';


import './App.css';




function App() {



  const [purchaseRequests, setPurchaseRequests] = useState([]);

  const handleNewPurchaseRequest = (formData) => {
    const newPurchaseRequest = {
      reqID: purchaseRequests.length + 1, // Replace with actual ID generation logic
      ...formData,
    };

    setPurchaseRequests((prevRequests) => [...prevRequests, newPurchaseRequest]);
  };






  const [selectedTable, setSelectedTable] = useState('Company');

  const handleTableChange = (tableName) => {
    setSelectedTable(tableName);

  };

  return (
    
    <><div>
      <div>
        <label>Select Table: </label>
        <select onChange={(e) => handleTableChange(e.target.value)}>
          <option value="Company">Company</option>
          <option value="Department">Department</option>
          <option value="User">User</option>
          <option value="Item">Item</option>
          <option value="AC">AC</option>
          <option value="ApproverRequest ">ApproverRequest</option>
          <option value="PurchaseRequest ">PurchaseRequest</option>
          <option value="PurchaseItem ">PurchaseItem</option>

        </select>
      </div>

      {selectedTable === 'Company' && <Company />}
      {selectedTable === 'Department' && <Department />}
      {selectedTable === 'User' && <User />}
      {selectedTable === 'Item' && <Item />}
      {selectedTable === 'AC' && <AC />}
      {selectedTable === 'ApproverRequest ' && <ApproverRequest />}
      {selectedTable === 'PurchaseRequest ' && <PurchaseRequest />}
      {selectedTable === 'PurchaseItem ' && <PurchaseItem />}

    </div>
   
    <div className="container">
        <h1>Purchase Request Management</h1>
        <NewPurchaseRequestForm onSubmit={handleNewPurchaseRequest} />
        <PurchaseRequest purchaseRequests={purchaseRequests} />
      </div></>

  );
}





export default App;

