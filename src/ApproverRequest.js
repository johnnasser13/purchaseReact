// ApproverRequest.js
import React, { useState, useEffect } from 'react';

const ApproverRequest = () => {
  const [approverRequests, setApproverRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the server or use static data
    // Replace the following with your actual API call or static data
    const fetchData = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const staticData = [
          { AppReq: 1, AppID: 1, reqID: 1, Status: 'Approved', ApproverDate: '2022-01-01' },
          { AppReq: 2, AppID: 2, reqID: 2, Status: 'Pending', ApproverDate: '2022-01-02' },
        ];
        setApproverRequests(staticData);
      } catch (error) {
        console.error('Error fetching approver request data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Approver Request Table</h2>
      <table>
        <thead>
          <tr>
            <th>Approver Request ID</th>
            <th>Approver ID</th>
            <th>Request ID</th>
            <th>Status</th>
            <th>Approver Date</th>
          </tr>
        </thead>
        <tbody>
          {approverRequests.map((approverRequest) => (
            <tr key={approverRequest.AppReq}>
              <td>{approverRequest.AppReq}</td>
              <td>{approverRequest.AppID}</td>
              <td>{approverRequest.reqID}</td>
              <td>{approverRequest.Status}</td>
              <td>{approverRequest.ApproverDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproverRequest;
