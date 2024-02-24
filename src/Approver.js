// Approver.js
import React, { useState, useEffect } from 'react';

const Approver = () => {
  const [approvers, setApprovers] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { AppID: 1, userID: 1, ACID: 1, title: 'Approver A', order: 1 },
          { AppID: 2, userID: 2, ACID: 2, title: 'Approver B', order: 2 },
          
        ];
        setApprovers(staticData);
      } catch (error) {
        console.error('Error fetching approver data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Approver Table</h2>
      <table>
        <thead>
          <tr>
            <th>Approver ID</th>
            <th>User ID</th>
            <th>AC ID</th>
            <th>Title</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {approvers.map((approver) => (
            <tr key={approver.AppID}>
              <td>{approver.AppID}</td>
              <td>{approver.userID}</td>
              <td>{approver.ACID}</td>
              <td>{approver.title}</td>
              <td>{approver.order}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Approver;
