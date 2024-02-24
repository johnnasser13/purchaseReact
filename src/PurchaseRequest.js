// PurchaseRequest.js
import React, { useState, useEffect } from 'react';

const PurchaseRequest = () => {
  const [purchaseRequests, setPurchaseRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { reqID: 1, DpID: 1, userID: 1, typeID: 1, urgencyID: 1 },
          { reqID: 2, DpID: 2, userID: 2, typeID: 2, urgencyID: 2 },
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
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Department ID</th>
            <th>User ID</th>
            <th>Type ID</th>
            <th>Urgency ID</th>
          </tr>
        </thead>
        <tbody>
          {purchaseRequests.map((purchaseRequest) => (
            <tr key={purchaseRequest.reqID}>
              <td>{purchaseRequest.reqID}</td>
              <td>{purchaseRequest.DpID}</td>
              <td>{purchaseRequest.userID}</td>
              <td>{purchaseRequest.typeID}</td>
              <td>{purchaseRequest.urgencyID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseRequest;
