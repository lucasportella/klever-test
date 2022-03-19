import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
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
      <Form>
        <Form.Group controlId="formToken">
          <Form.Label>
            Token
            <Form.Control required onChange={handleChange} type="text" name="token" value={useCurrency.token} />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBalance">
          <Form.Label>
            Balance
            <Form.Control required onChange={handleChange} type="number" name="balance" value={useCurrency.balance} />
          </Form.Label>
        </Form.Group>
        <Button className="btn btnRed" onClick={deleteTokenAndExit} type="button">Remove</Button>
        <Button className="btn btnPink" onClick={editTokenAndExit} type="button">Save</Button>
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

export default EditTokenForm;
