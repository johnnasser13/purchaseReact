// Company.js
import React, { useState, useEffect } from 'react';

const Company = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { cmpID: 1, cmpName: 'Dell' },
          { cmpID: 2, cmpName: 'HP' },
          
        ];
        setCompanies(staticData);
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Company Table</h2>
      <table>
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.cmpID}>
              <td>{company.cmpID}</td>
              <td>{company.cmpName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Company;
