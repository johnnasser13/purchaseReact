
import React, {  useState } from 'react';
import axios, { Axios } from "axios";

const NewPurchaseRequestForm = () => {

  const [formData, setFormData] = useState({
   

    itemName: '',
    urgencyLevel: '',
    quantity:'',
    

  });

  //const urls = "http://localhost:8000/purchasereqnew/";
  //const [data, setData] = useState([]);

  const {  itemName, urgencyLevel, quantity } = formData;
 
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  
  let axiosCon = {
    headers: {
      Access_Control_Allow_Origin: '*',
      Access_Control_Allow_Credentials : true,
      Access_Control_Allow_Methods: "GET,HEAD,OPTIONS,POST,PUT,DELETE",
      Access_Control_Allow_Headers: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      
        },
  };

  function addreq(event) { 
    // Axios.post(urls, axiosCon,
    //  {
    //   itemName: itemName.formData,
    //   urgencyLevel: urgencyLevel.formData,
    //   quantity: quantity.formData,
    // }) 
    Axios({
      method: "POST",
      url: "http://localhost:8000/purchasereqnew/",
      ...axiosCon,
      // headers: {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": '*',
      //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //   "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      //   "Access-Control-Allow-Credentials": true,
      // },
      
      data:{
       
        itemName: itemName.formData,
        urgencyLevel: urgencyLevel.formData,
        quantity: quantity.formData,
       },
       
       withCredentials: false,
    })
    .then ((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error.response.data)
    })

    // setFormData(({
      // itemName: "",
      // urgencyLevel: "",
      // quantity: ""}))
// 
    event.preventDefault()
}



  



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (itemName && urgencyLevel && quantity) {
//         axios.post('postpurchasereq/', formData)
//             .then(res => {
                
//                 setData([...data, res.data]);
//                 setFormData({ itemName: "", urgencyLevel: "", quantity: ""  });

//             })
//             .catch(err => console.log(err))

//     }
    
// };

const handleDelete = (deleteID) => {
  axios.delete(`http://127.0.0.1:8000/deletepurchasereq/${deleteID}`)
  .then(res => {
     console.log('DELETD RECORD::::', res)

  })
  .catch(err => console.log(err.response.data))
};

  

  return (
    <><div className="col-auto">
      <h3>Purchase Request Details</h3>
      <br />
      <form  className="row gy-2 gx-3 align-items-center">
        {/* <div className="col-md-4"> */}
          {/* <label  className="form-label">PR Type</label> */}
          {/* <select id="inputState" className="form-select"> */}
            {/* <option >Choose...</option> */}
            {/* <option>Admin</option> */}
            {/* <option>HR</option> */}
          {/* </select> */}
        {/* </div> */}
{/*  */}
{/*  */}
        {/* <div className="col-md-4"> */}
          {/* <label  className="form-label">Department</label> */}
          {/* <select id="inputState" className="form-select"> */}
            {/* <option >Choose...</option> */}
            {/* <option>Purchasing</option> */}
          {/* </select> */}
        {/* </div> */}
{/*  */}



       
       
      <table className="table">
        <thead>
        <tr>
          
           <th scope="col">Item Name</th>
           <th scope="col">Quantity</th>
           <th scope="col">Urgency Level</th>
           <th scope="col">Actions</th>
        </tr>
        </thead>
      <tbody>
         <tr >
          
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
     
      <button type="submit" className="btn btn-primary" onClick={addreq} >Submit</button>

      </form>
    </div>
    
    <br/>
    <br/>
    <br/>

    </>

  );

 
};

export default NewPurchaseRequestForm;
