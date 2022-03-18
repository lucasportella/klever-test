import React from 'react';
import { Link } from 'react-router-dom';

function EditTokenHeader() {
  return (
    <div>
      <h4>Edit Token</h4>
      <button type="button"><Link to="/">Voltar</Link></button>
    </div>
  );
}

export default EditTokenHeader;
