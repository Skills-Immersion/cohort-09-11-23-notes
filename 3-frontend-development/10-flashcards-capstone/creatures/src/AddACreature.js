import React, { useState } from 'react';

function AddACreature({ addCreature }) {
  const initialFormData = {
    name: '',
    imageUrl: '',
    abilities: '',
    type: ''
  }
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    addCreature(formData);
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" onChange={handleChange} value={formData.name} />
      <input name="imageUrl" type="url" onChange={handleChange} value={formData.imageUrl} />
      <input name="abilities" type="text" onChange={handleChange} value={formData.abilities} />
      <input name="type" type="text" onChange={handleChange} value={formData.type} />
      <input type="submit" />
    </form>
  </div>
}

export default AddACreature;