import React, { useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { storageNewToken } from '../../stateManager/localstorageManager';

function AddTokenForm() {
  const [useCurrency, setCurrency] = useState({ token: '', balance: '' });
  const [useErrorMessage, setErrorMessage] = useState('');
  const [useLoadError, setLoadError] = useState(false);
  const navigate = useNavigate();

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

  const saveAndExit = () => {
    if (useCurrency.token && useCurrency.balance) {
      try {
        storageNewToken(useCurrency);
        navigate('/');
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
          <Form.Control className="inputs" onChange={handleChange} type="text" name="balance" value={useCurrency.balance.replace(/[a-zA-Z]/g, '')} />
        </Form.Group>
        <div className="formBtnRight"><Button className="btn btnPink" onClick={saveAndExit} type="button">Save</Button></div>
      </Form>
      {useLoadError ? (
        <div className="divAlert">
          <Alert variant="danger">
            {'Error: '}
            {useErrorMessage}
          </Alert>
        </div>
      ) : null}

    </div>
  );
}

export default AddTokenForm;
