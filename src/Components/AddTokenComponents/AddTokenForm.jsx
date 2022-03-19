import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
      <Form>
        <Form.Group controlId="formToken">
          <Form.Label htmlFor="inputToken">
            Token
            <Form.Control onChange={handleChange} type="text" id="inputToken" name="token" value={useCurrency.token} />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBalance">
          <Form.Label htmlFor="inputBalance">
            Balance
            <Form.Control onChange={handleChange} type="number" id="inputBalance" name="balance" value={useCurrency.balance} />
          </Form.Label>
        </Form.Group>
        <Button onClick={saveAndClearInputs} type="button">Save</Button>
      </Form>
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
