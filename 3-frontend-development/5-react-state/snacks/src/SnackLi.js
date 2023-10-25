import React from 'react';

function SnackLi({ potato }) {
  return <li>{potato.name} costs ${potato.price}</li>
}

export default SnackLi;