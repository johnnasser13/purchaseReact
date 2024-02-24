// Type.js
import React, { useState, useEffect } from 'react';

const Type = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { typeID: 1, typeStatus: 'Technical' },
          { typeID: 2, typeStatus: 'Logical' },
        ];
        setTypes(staticData);
      } catch (error) {
        console.error('Error fetching type data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Type Table</h2>
      <table>
        <thead>
          <tr>
            <th>Type ID</th>
            <th>Type Status</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type) => (
            <tr key={type.typeID}>
              <td>{type.typeID}</td>
              <td>{type.typeStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Type;
