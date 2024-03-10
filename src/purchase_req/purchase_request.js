// PurchaseRequest.js
import React, { useState, useEffect } from 'react';
import axios from "axios";


const PurchaseRequest = () => {

  let axiosCon = {
    headers: {
      Access_Control_Allow_Origin: '*',
      Access_Control_Allow_Credentials : true,
      Access_Control_Allow_Methods: "GET,HEAD,OPTIONS,POST,PUT,DELETE",
      Access_Control_Allow_Headers: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      
        },
  };
  
  const [data, setData] = useState([]);
  //const [refresh, setRefresh] = useState(0)

 function listpur(){
   if (data.length>0) return;
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/purchaserequest/",    
    ...axiosCon,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",}
    })
  .then((res) => {
    setData(res.data)
    
  })
  .catch((err) => {
    console.log(err.res.data)
  })
  }


  useEffect(() => {
   listpur() });



  return (
    
    <div>
      <h2>Purchase Request Table</h2>
      <table  className="table table-bordered">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Item Name</th>
            <th>Urgency</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((PurchaseRequest,index) => (
            <tr key={index}>
              <td>{PurchaseRequest.reqID}</td>
              <td>{PurchaseRequest.itemName}</td>
              <td>{PurchaseRequest.urgencyLevel}</td>
              <td>{PurchaseRequest.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseRequest;
