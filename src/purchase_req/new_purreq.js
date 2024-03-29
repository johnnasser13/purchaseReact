
import React, { useState } from 'react';
import axios from "axios";



const NewPurchaseRequestForm = () => {

  const [formData, setFormData] = useState({
    
    itemName: '',
    urgencyLevel: '',
    quantity:'',
    
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
    if (itemName && urgencyLevel && quantity) {
        axios.post('http://127.0.0.1:8000/postpurchasereq/', formData)
            .then(res => {
                
                setData([...data, res.data]);
                setFormData({ itemName: "", urgencyLevel: "", quantity: ""  });

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
    <><div className="col-auto">
      <h3>Purchase Request Details</h3>
      <br />
      <form  onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center">
        <div className="col-md-4">
          <label  className="form-label">PR Type</label>
          <select defaultValue={"Choosing.."}  className="form-select">            
          <option>Admin</option>
            <option>HR</option>
          </select>
        </div>


        <div className="col-md-4">
          <label  className="form-label">Department</label>
          <select defaultValue={"Choosing.."}  className="form-select">
            <option>Purchasing</option>
          </select>
        </div>




        
       
      <table className="table">
        <thead>
        <tr>
          <th></th>
           <th scope="col">Item Name</th>
           <th scope="col">Quantity</th>
           <th scope="col">Urgency</th>
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

             <td><input type="text"
            className="form-control"
             id="urgencyLevel"
             placeholder="Enter Urgency Level"
             name="urgencyLevel"
             value={urgencyLevel}
             onChange={handleChange}   /></td>
           
           <td> <button className="btn btn-danger" onClick={() => handleDelete(itemName)}>Delete</button> </td>
         </tr>
      </tbody>
      </table>
     
      <button type="submit" className="btn btn-primary" >Submit</button>

      </form>
    </div>
    
    <br/>
    <br/>
    <br/>

    </>

  );

 
};

export default NewPurchaseRequestForm;
