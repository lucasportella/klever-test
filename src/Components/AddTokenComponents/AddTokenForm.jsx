import React, { useState } from 'react';
import { storageNewToken } from '../../stateManager/localstorageManager';

function AddTokenForm() {
  const [useCurrency, setCurrency] = useState({ token: '', balance: '' });
  const handleChange = ({ target: { name, value } }) => {
    setCurrency({ ...useCurrency, [name]: value });
  };

  const saveAndClearInputs = () => {
    try {
      storageNewToken(useCurrency);
      setCurrency({ token: '', balance: '' });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form>
      <label htmlFor="inputToken">
        Token
        <input onChange={handleChange} type="text" id="inputToken" name="token" value={useCurrency.token} />
      </label>
      <label htmlFor="inputBalance">
        Balance
        <input onChange={handleChange} type="number" id="inputBalance" name="balance" value={useCurrency.balance} />
      </label>
      <button onClick={saveAndClearInputs} type="button">Save</button>
    </form>
  );
}

export default AddTokenForm;
