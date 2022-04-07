import React, { useState, useEffect } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { storageEditToken } from '../../stateManager/localstorageManager';
import EditTokenModal from './EditTokenModal';

function EditTokenForm() {
  const navigate = useNavigate();
  const { state: { token, balance } } = useLocation();
  const [useCurrency, setCurrency] = useState({ token, balance });
  const prevState = { token, balance };
  const [useErrorMessage, setErrorMessage] = useState('');
  const [useLoadError, setLoadError] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setCurrency({ ...useCurrency, [name]: name === 'token' ? value.toUpperCase() : value.replace(/[a-zA-Z]/g, '') });
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
      try {
        storageEditToken(prevState, useCurrency);
        setErrorMessage('');
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
          <Form.Control className="inputs" required onChange={handleChange} type="text" name="token" value={useCurrency.token} />
        </Form.Group>
        <Form.Group className="formGroup" controlId="formBalance">
          <Form.Label>
            Balance
          </Form.Label>
          <Form.Control className="inputs" required onChange={handleChange} type="text" name="balance" value={useCurrency.balance} />
        </Form.Group>
        <div className="btnWrapper">
          <EditTokenModal useCurrency={useCurrency} />
          <Button className="btn btnPink" onClick={editTokenAndExit} type="button">Save</Button>
        </div>
      </Form>
      {useLoadError ? (
        <div className="divAlert">
          <Alert variant="danger">
            {' '}
            {'Error: '}
            {useErrorMessage}
          </Alert>
        </div>
      ) : null}
    </div>
  );
}

export default EditTokenForm;
