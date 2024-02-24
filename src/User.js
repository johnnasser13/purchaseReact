// User.js
import React, { useState, useEffect } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { userID: 1, userName: 'John', dpID: 1 },
          { userID: 2, userName: 'Ahmed', dpID: 2 },
        ];
        setUsers(staticData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Department ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userID}>
              <td>{user.userID}</td>
              <td>{user.userName}</td>
              <td>{user.dpID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
