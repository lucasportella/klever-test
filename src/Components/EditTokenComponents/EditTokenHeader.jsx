import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function EditTokenHeader() {
  return (
    <div>
      <h4>Edit Token</h4>
      <Link to="/"><Button type="button">Voltar</Button></Link>
    </div>
  );
}

export default EditTokenHeader;
