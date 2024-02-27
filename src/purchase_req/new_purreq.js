
import React, { useState } from 'react';
import axios from "axios";


  




const NewPurchaseRequestForm = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    userID: '',
    
    urgency: '',
    
    quantity:'',
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., API call or state update)
    console.log('Form submitted:', formData);
    // Reset the form after submission if needed
    setFormData({
      itemName: '',
      userID: '',
      
      urgency: '',
      
      quantity: '',
    });
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



        <div class="col-md-4">
          <label for="inputState" class="form-label">Item List</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Laptops</option>
            <option>Cameras</option>
          </select>
        </div>

        <div class="col-auto">
          <input text="search"></input>
          <button type="submit" class="btn btn-primary">Search</button>
        </div>

      </form>
    </div>
    
    <br/>
    <br/>
    <br/>

    <div class="col-auto">

    <h3>Selected Items</h3>
      <br />
      
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item Code</th>
      <th scope="col">Item Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Note</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td><input></input></td>
      <td>
      <button>Delete</button>
      </td>
    </tr>
    
  </tbody>
  </table>

<button type="submit" class="btn btn-primary">Submit</button>
      </div></>

  );

 
};

export default NewPurchaseRequestForm;
