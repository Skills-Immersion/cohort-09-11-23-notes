import React from 'react';

function CreatureForm({ formData, handleChange, handleSubmit }) {
  return <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input id="name" name="name" type="text" onChange={handleChange} value={formData.name} />
    <label htmlFor="imageUrl">Image URL</label>
    <input id="imageUrl" name="imageUrl" type="url" onChange={handleChange} value={formData.imageUrl} />
    <label htmlFor="abilities">Abilities</label>
    <input id="abilities" name="abilities" type="text" onChange={handleChange} value={formData.abilities} />
    <label htmlFor="type">Type</label>
    <input id="type" name="type" type="text" onChange={handleChange} value={formData.type} />
    <input type="submit" />
  </form>
}

export default CreatureForm;