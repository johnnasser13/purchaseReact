
import React, { useState } from 'react';
import axios from "axios";


  

const NewPurchaseRequestForm = () => {
  const [formData, setFormData] = useState({
    reqID:'',
    itemName: '',
    urgencyLevel: '',
    quantity:'',
  });

  const { reqID, itemName, urgencyLevel, quantity } = formData;
  const [data, setData] = useState([]);
   


  const handleSubmit = (e) => {
    e.preventDefault();
    if (reqID && itemName && urgencyLevel && quantity) {
        axios.post('http://127.0.0.1:8000/postpurchasereq/', formData)
            .then(res => {
                setData([...data, res.data]);
                setFormData({ reqID: "", itemName: "", urgencyLevel: "", quantity: "" });

            })
            .catch(err => console.log(err))

    }
};

  

  return (
    <><div class="col-auto">
      <h3>Purchase Request Details</h3>
      <br />
      <form onSubmit={handleSubmit} class="row gy-2 gx-3 align-items-center">
        <div class="col-md-4">
          <label for="inputState" class="form-label">PR Type</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Admin</option>
            <option>HR</option>
          </select>
        </div>


        <div class="col-md-4">
          <label for="inputState" class="form-label">Department</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Purchasing</option>
          </select>
        </div>




        <div class="col-md-4">
          <label for="inputState" class="form-label">Urgency</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>High</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
        </div>
       
      <table class="table">
        <thead>
        <tr>
           <th scope="col">#</th>
           <th scope="col">Item Name</th>
           <th scope="col">Quantity</th>
           <th scope="col">Note</th>
           <th scope="col">Actions</th>
        </tr>
        </thead>
      <tbody>
         <tr >
           <th scope="row"></th>
           <td><input></input></td>
           <td><input></input></td>
           <td><input></input></td>
           <td>
           <button>Delete</button>
           </td>
         </tr>
      </tbody>
      </table>
     
      <button type="submit" class="btn btn-primary">Submit</button>

      </form>
    </div>
    
    <br/>
    <br/>
    <br/>

    </>

  );

 
};

export default NewPurchaseRequestForm;
