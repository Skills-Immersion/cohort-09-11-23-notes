import React, { useState } from 'react';

function AddSnackForm({ addSnack }) {
  const initialFormData = {
    name: '',
    price: 0,
    description: ''
  }
  const [formData, setFormData] = useState(initialFormData);
  console.log(formData);
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    // let newFormData = {...formData};
    // newFormData[event.target.name] = event.target.value;
  }

  // when we submit the form, we want to add a new snack to the array of snacks (which is in App.js)
  function handleSubmit(event) {
    event.preventDefault();
    addSnack(formData)
    // clearing out the form
    setFormData(initialFormData);
  }
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} />
    </div>
    <div>
      <label htmlFor="price">Price</label>
      <input type="number" name="price" id="price" onChange={handleChange} value={formData.price} />
    </div>
    <div>
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" onChange={handleChange} value={formData.description} />
    </div>
    <div>
      <input type="submit" />
    </div>
  </form>
}

export default AddSnackForm;
