import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { storageDeleteToken } from '../../stateManager/localstorageManager';

function EditTokenModal({ useCurrency }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteTokenAndExit = () => {
    storageDeleteToken(useCurrency);
    navigate('/');
  };

  return (
    <div>
      <Button className="btnRed" onClick={handleShow}>
        Remove
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Confirm token removal?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You will be removing the token
          {' '}
          <span style={{ color: 'red' }}>{`${useCurrency.token}`}</span>
          {' '}
          with a balance of
          {' '}
          <span style={{ color: 'red' }}>{`${useCurrency.balance}`}</span>
          .
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btnRed" onClick={deleteTokenAndExit}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditTokenModal;

EditTokenModal.propTypes = {
  useCurrency: PropTypes.shape({
    token: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }).isRequired,
};
