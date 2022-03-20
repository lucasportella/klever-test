import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function EditTokenHeader() {
  const navigate = useNavigate();
  return (
    <div className="tokenHeader">
      <h4>Edit Token</h4>
      <Button className="btn btnGray" onClick={() => navigate('/')} type="button">Voltar</Button>
    </div>
  );
}

export default EditTokenHeader;
