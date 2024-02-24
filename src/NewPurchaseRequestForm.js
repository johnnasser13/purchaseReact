// NewPurchaseRequestForm.js
import React, { useState } from 'react';

const NewPurchaseRequestForm = () => {
  const [formData, setFormData] = useState({
    DpID: '',
    userID: '',
    typeID: '',
    urgencyID: '',
    itemName: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., API call or state update)
    console.log('Form submitted:', formData);
    // Reset the form after submission if needed
    setFormData({
      DpID: '',
      userID: '',
      typeID: '',
      urgencyID: '',
      itemName: '',
      price: '',
    });
  };

  return (
    <div>
      <h2>Create New Purchase Request</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Department ID:
          <input
            type="text"
            name="DpID"
            value={formData.DpID}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          User ID:
          <input
            type="text"
            name="userID"
            value={formData.userID}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <label>
          Item Name:
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Type ID:
          <input
            type="text"
            name="typeID"
            value={formData.typeID}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Urgency ID:
          <input
            type="text"
            name="urgencyID"
            value={formData.urgencyID}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPurchaseRequestForm;
