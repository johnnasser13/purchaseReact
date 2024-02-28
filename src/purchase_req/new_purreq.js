
import React, { useState } from 'react';
import axios from "axios";

const NewPurchaseRequestForm = () => {

  const [formData, setFormData] = useState({
    
    itemName: '',
    urgencyLevel: '',
    quantity:'',
    DpName:'',
    typeStatus:'',

  });

  //const [editID, setEditID] = useState()

  const [data, setData] = useState([]);
 // const [refresh, setRefresh] = useState(0)


  const {  itemName, urgencyLevel, quantity } = formData;
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    if ( itemName && urgencyLevel && quantity ) {
        axios.post('http://127.0.0.1:8000/postpurchasereq/', formData)
            .then(res => {
                setData([...data, res.data]);
                setFormData({ itemName: "", urgencyLevel: "", quantity: "" });

            })
            .catch(err => console.log(err))

    }
};

const handleDelete = (deleteID) => {
  axios.delete(`http://127.0.0.1:8000/deletepurchasereq/${deleteID}`)
  .then(res => {
     console.log('DELETD RECORD::::', res)

  })
  .catch(err => console.log(err))
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
          <th></th>
           <th scope="col">Item Name</th>
           <th scope="col">Quantity</th>
           <th scope="col">Actions</th>
        </tr>
        </thead>
      <tbody>
         <tr >
           <th scope="row"></th>
           <td>
            <input type="text"
            className="form-control"
             id="itemName"
             placeholder="Enter Item Name"
             name="itemName"
             value={itemName}
             onChange={handleChange}   />
             </td>
             
           <td><input type="text"
            className="form-control"
             id="quantity"
             placeholder="Enter Quantity"
             name="quantity"
             value={quantity}
             onChange={handleChange}   /></td>
             
           
           <td> <button className="btn btn-danger" onClick={() => handleDelete(itemName)}>Delete</button> </td>
         </tr>
      </tbody>
      </table>
     
      <button type="submit" class="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>

      </form>
    </div>
    
    <br/>
    <br/>
    <br/>

    </>

  );

 
};

export default NewPurchaseRequestForm;
