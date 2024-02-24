// PurchaseItem.js
import React, { useState, useEffect } from 'react';


const PurchaseItem = () => {
  const [purchaseItems, setPurchaseItems] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { purID: 1, itemID: 1, reqID: 1, itemName: 'Laptop', price: 20000, view : <button>view item</button>  },
          { purID: 2, itemID: 2, reqID: 2, itemName: 'Camera', price: 10000, view : <button>view item</button> },
        ];
        setPurchaseItems(staticData);
      } catch (error) {
        console.error('Error fetching purchase item data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Purchase Item Table</h2>
      <table>
        <thead>
          <tr>
            <th>Purchase ID</th>
            <th>Item ID</th>
            <th>Request ID</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {purchaseItems.map((purchaseItem) => (
            <tr key={purchaseItem.purID}>
              <td>{purchaseItem.purID}</td>
              <td>{purchaseItem.itemID}</td>
              <td>{purchaseItem.reqID}</td>
              <td>{purchaseItem.itemName}</td>
              <td>{purchaseItem.price}</td>
              <td>{purchaseItem.view}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseItem;
