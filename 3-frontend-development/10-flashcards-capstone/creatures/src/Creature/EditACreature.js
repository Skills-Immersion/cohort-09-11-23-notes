// similar to the AddACreature component
// setting up all of the variables and functions that the CreatureForm needs to work correctly in this Edity context

import React, { useState } from 'react';
import CreatureForm from './CreatureForm';

function EditACreature({ creature, editCreature, setShowEditForm }) {
  const [formData, setFormData] = useState(creature);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    editCreature(creature.id, formData);
    setShowEditForm(false);
  }
  return <div>
    <CreatureForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
  </div>
}

export default EditACreature;