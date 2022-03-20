import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddTokenHeader() {
  const navigate = useNavigate();
  return (
    <div className="tokenHeader">
      <h4>Add Token</h4>
      <Button onClick={() => navigate('/')} className="btn btnGray" type="button">Voltar</Button>
    </div>
  );
}

export default AddTokenHeader;
