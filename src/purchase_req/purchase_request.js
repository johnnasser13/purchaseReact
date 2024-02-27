// PurchaseRequest.js
import React, { useState, useEffect } from 'react';
import axios from "axios";


const PurchaseRequest = () => {
  const [editID, setEditID] = useState()
  const [refresh, setRefresh] = useState(0)
  const [formData, setFormData] = useState({
    reqID:'',
    itemName: '',
    urgencyLevel: '',
    quantity:'',
  });
  const { reqID, itemName, urgencyLevel, quantity } = formData;
  const [purchaseRequests, setPurchaseRequests] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleUpdate = () => {
  if (reqID && itemName && urgencyLevel && quantity) {
      axios.put(`http://127.0.0.1:8000/postpurchasereq/${editID}`, formData)
          .then(res => {
              setFormData({ reqID: "", itemName: "", urgencyLevel: "", quantity: ""  });
              setRefresh(refresh + 1)
          })
          .catch(err => console.log(err))

  }
};

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/getpurchasereq/')
        .then(res => {
          setPurchaseRequests(res.purchaseRequests)
        })
        .catch(err => console.log(err))
    console.log(purchaseRequests);
}, [purchaseRequests]);



  return (
    
    <div>
      <h2>Purchase Request Table</h2>
      <table  class="table table-bordered">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Item Name</th>
            <th>Urgency</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {purchaseRequests.map((purchaseRequest,index) => (
            <tr key={index}>
              <td>{purchaseRequest.reqID}</td>
              <td>{purchaseRequest.itemName}</td>
              <td>{purchaseRequest.urgencyLevel}</td>
              <td>{purchaseRequest.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseRequest;
