// CompanyTable.js
import React, { useState, useEffect } from 'react';

const Department = () => {
  const [departments, setdepartments] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { DpID: 1, DpName: 'HR' },
          { DpIDID: 2, DpName: 'IT' },
         
        ];
        setdepartments(staticData);
      } catch (error) {
        console.error('Error fetching department data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Department Table</h2>
      <table>
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Department Name</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.DpID}>
              <td>{department.DpID}</td>
              <td>{department.DpName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
