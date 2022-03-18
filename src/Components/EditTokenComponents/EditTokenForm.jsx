import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditTokenForm() {
  const { state: { token, balance } } = useLocation();
  const [useCurrency, setCurrency] = useState({ token, balance });

  const handleChange = ({ target: { name, value } }) => {
    setCurrency({ ...useCurrency, [name]: value });
  };

  return (
    <form>
      <label htmlFor="tokenInput">
        Token
        <input onChange={handleChange} type="text" id="tokenInput" name="token" value={useCurrency.token} />
      </label>
      <label htmlFor="balanceInput">
        Balance
        <input onChange={handleChange} type="number" id="balanceInput" name="balance" value={useCurrency.balance} />
      </label>
      <button type="button">Remove</button>
      <button type="button">Save</button>
    </form>
  );
}

export default EditTokenForm;
