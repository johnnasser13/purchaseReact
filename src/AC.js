// AC.js
import React, { useState, useEffect } from 'react';

const AC = () => {
  const [acs, setACs] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { ACID: 1, DpID: 1, typeID: 1, urgencyID: 1 },
          { ACID: 2, DpID: 2, typeID: 2, urgencyID: 2 },
          
        ];
        setACs(staticData);
      } catch (error) {
        console.error('Error fetching AC data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>AC Table</h2>
      <table>
        <thead>
          <tr>
            <th>AC ID</th>
            <th>Department ID</th>
            <th>Type ID</th>
            <th>Urgency ID</th>
          </tr>
        </thead>
        <tbody>
          {acs.map((ac) => (
            <tr key={ac.ACID}>
              <td>{ac.ACID}</td>
              <td>{ac.DpID}</td>
              <td>{ac.typeID}</td>
              <td>{ac.urgencyID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AC;
