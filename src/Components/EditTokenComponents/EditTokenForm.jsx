import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { storageEditToken, storageDeleteToken } from '../../stateManager/localstorageManager';

function EditTokenForm() {
  const navigate = useNavigate();
  const { state: { token, balance } } = useLocation();
  const [useCurrency, setCurrency] = useState({ token, balance });
  const prevState = { token, balance };

  const handleChange = ({ target: { name, value } }) => {
    setCurrency({ ...useCurrency, [name]: value });
  };

  const editTokenAndExit = () => {
    storageEditToken(prevState, useCurrency);
    navigate('/');
  };

  const deleteTokenAndExit = () => {
    storageDeleteToken(useCurrency);
    navigate('/');
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
      <button onClick={deleteTokenAndExit} type="button">Remove</button>
      <button onClick={editTokenAndExit} type="button">Save</button>
    </form>
  );
}

export default EditTokenForm;
