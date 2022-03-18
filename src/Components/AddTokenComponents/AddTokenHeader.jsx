import React from 'react';
import { Link } from 'react-router-dom';

function AddTokenHeader() {
  return (
    <div>
      <h4>Add Token</h4>
      <button type="button"><Link to="/">Voltar</Link></button>
    </div>
  );
}

export default AddTokenHeader;
