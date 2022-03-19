import React, { useEffect, useState } from 'react';
import { storageNewToken } from '../../stateManager/localstorageManager';

function AddTokenForm() {
  const [useCurrency, setCurrency] = useState({ token: '', balance: '' });
  const [useErrorMessage, setErrorMessage] = useState('');
  const [useLoadError, setLoadError] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setCurrency({ ...useCurrency, [name]: value });
  };

  useEffect(() => {
    if (useErrorMessage) {
      setLoadError(true);
    } else {
      setLoadError(false);
    }
  }, [useErrorMessage]);

  const saveAndClearInputs = () => {
    if (useCurrency.token && useCurrency.balance) {
      try {
        storageNewToken(useCurrency);
        setCurrency({ token: '', balance: '' });
        setErrorMessage('');
      } catch (err) {
        setErrorMessage(err.message);
      }
    } else {
      setErrorMessage('Please, fill out all fields.');
    }
  };

  return (
    <div>
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
      {useLoadError ? (
        <div>
          {'Error: '}
          {useErrorMessage}
        </div>
      ) : null}

    </div>
  );
}

export default AddTokenForm;
