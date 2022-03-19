import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddTokenHeader() {
  return (
    <div>
      <h4>Add Token</h4>
      <Link to="/"><Button className="btn btnGray" type="button">Voltar</Button></Link>
    </div>
  );
}

export default AddTokenHeader;
