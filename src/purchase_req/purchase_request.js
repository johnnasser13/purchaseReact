// PurchaseRequest.js
import React, { useState, useEffect } from 'react';


const PurchaseRequest = () => {
  const [purchaseRequests, setPurchaseRequests] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
       
        const staticData = [
          { reqID: 1, itemName:"Laptop", userID: 1, urgency: "high" , quantity: 2},
          { reqID: 2, itemName: "Printer", userID: 2, urgency: "low", quantity: 1 },
          // Add more purchase request data as needed
        ];
        setPurchaseRequests(staticData);
      } catch (error) {
        console.error('Error fetching purchase request data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Purchase Request Table</h2>
      <table  class="table table-bordered">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Item Name</th>
            <th>User ID</th>
            <th>Urgency</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {purchaseRequests.map((purchaseRequest) => (
            <tr key={purchaseRequest.reqID}>
              <td>{purchaseRequest.reqID}</td>
              <td>{purchaseRequest.itemName}</td>
              <td>{purchaseRequest.userID}</td>
              <td>{purchaseRequest.urgency}</td>
              <td>{purchaseRequest.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseRequest;
