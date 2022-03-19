import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { storageEditToken, storageDeleteToken } from '../../stateManager/localstorageManager';

function EditTokenForm() {
  const navigate = useNavigate();
  const { state: { token, balance } } = useLocation();
  const [useCurrency, setCurrency] = useState({ token, balance });
  const prevState = { token, balance };
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

  const editTokenAndExit = () => {
    if (useCurrency.token && useCurrency.balance) {
      storageEditToken(prevState, useCurrency);
      setErrorMessage('');
      navigate('/');
    } else {
      setErrorMessage('Please, fill out all fields.');
    }
  };

  const deleteTokenAndExit = () => {
    storageDeleteToken(useCurrency);
    navigate('/');
  };

  return (
    <div>
      <form>
        <label htmlFor="tokenInput">
          Token
          <input required onChange={handleChange} type="text" id="tokenInput" name="token" value={useCurrency.token} />
        </label>
        <label htmlFor="balanceInput">
          Balance
          <input required onChange={handleChange} type="number" id="balanceInput" name="balance" value={useCurrency.balance} />
        </label>
        <button onClick={deleteTokenAndExit} type="button">Remove</button>
        <button onClick={editTokenAndExit} type="button">Save</button>
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

export default EditTokenForm;
