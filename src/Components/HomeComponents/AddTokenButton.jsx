import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddTokenButton() {
  return <Link to="/addtoken"><Button type="button">Add Token</Button></Link>;
}

export default AddTokenButton;
