import React from 'react';
import { Link } from 'react-router-dom';

function AddTokenButton() {
  return <button type="button"><Link to="/addtoken">Add Token</Link></button>;
}

export default AddTokenButton;
