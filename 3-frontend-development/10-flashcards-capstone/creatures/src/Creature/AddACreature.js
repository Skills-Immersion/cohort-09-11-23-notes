import React, { useState } from 'react';
import CreatureForm from './CreatureForm';
// similarities: 
// all the labels, all the inputs

// differences:
// what to do on submit (post new creature vs put to edit an existing creature)
// initial form data: the edit form should contain the original creature data

// today's steps:
// 1. modify the AddACreature form so that the shared component goodness is moved into a separate component
// 2. use that separate component to also render an EditCreature form to the screen
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
    <CreatureForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
  </div>
}

export default AddACreature;