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
    <div className="formDiv">
      <Form>
        <Form.Group className="formGroup" controlId="formToken">
          <Form.Label>
            Token
          </Form.Label>
          <Form.Control className="inputs" required onChange={handleChange} type="text" name="token" value={useCurrency.token.toUpperCase()} />
        </Form.Group>
        <Form.Group className="formGroup" required controlId="formBalance">
          <Form.Label>
            Balance
          </Form.Label>
          <Form.Control className="inputs" onChange={handleChange} type="number" name="balance" value={useCurrency.balance} />
        </Form.Group>
        <div className="formBtnRight"><Button className="btn btnPink" onClick={saveAndClearInputs} type="button">Save</Button></div>
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
