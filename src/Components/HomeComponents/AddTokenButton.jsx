import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddTokenButton() {
  const navigate = useNavigate();

  return (<Button onClick={() => navigate('addtoken')} className="btn btnPink" type="button">Add Token</Button>);
}

export default AddTokenButton;
