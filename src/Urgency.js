// Urgency.js
import React, { useState, useEffect } from 'react';

const Urgency = () => {
  const [urgencies, setUrgencies] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { urgencyID: 1, urgencyLevel: 'High' },
          { urgencyID: 2, urgencyLevel: 'Medium' },
          { urgencyID: 3, urgencyLevel: 'Low' },
        
        ];
        setUrgencies(staticData);
      } catch (error) {
        console.error('Error fetching urgency data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Urgency Table</h2>
      <table>
        <thead>
          <tr>
            <th>Urgency ID</th>
            <th>Urgency Level</th>
          </tr>
        </thead>
        <tbody>
          {urgencies.map((urgency) => (
            <tr key={urgency.urgencyID}>
              <td>{urgency.urgencyID}</td>
              <td>{urgency.urgencyLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Urgency;
