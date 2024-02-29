// PurchaseRequest.js
import React, { useState, useEffect } from 'react';
import axios from "axios";


const PurchaseRequest = () => {

  
  const [data, setData] = useState([]);
  //const [refresh, setRefresh] = useState(0)

 
  useEffect(() => {
    axios.get('getpurchasereq/')
        .then(res => {
          setData(res.data)
          
        })
        .catch(err => console.log(err))
        console.log(data);
}, [data]);



  return (
    
    <div>
      <h2>Purchase Request Table</h2>
      <table  className="table table-bordered">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Item Name</th>
            <th>Urgency</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((PurchaseRequest,index) => (
            <tr key={index}>
              <td>{PurchaseRequest.reqID}</td>
              <td>{PurchaseRequest.itemName}</td>
              <td>{PurchaseRequest.urgencyLevel}</td>
              <td>{PurchaseRequest.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseRequest;
