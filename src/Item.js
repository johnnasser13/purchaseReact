// Item.js
import React, { useState, useEffect } from 'react';

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { itemID: 1, itemName: 'Laptop' },
          { itemID: 2, itemName: 'Camera' },
        ];
        setItems(staticData);
      } catch (error) {
        console.error('Error fetching item data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Item Table</h2>
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.itemID}>
              <td>{item.itemID}</td>
              <td>{item.itemName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Item;
