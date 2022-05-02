import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from 'styled-components';
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
  const coolVar = '123';
  console.log(Number(useCurrency.balance) === 1);
  console.log(typeof Number(useCurrency.balance));

  const Span = styles.span`
  color: ${(props) => {
    console.log(props);
    return 'red';
  }}
  `;

  // <Span hello>{`${coolVar}`}</Span> --> hello is a prop inside the tag, so just use props.hello,
  // it will have a immediate value of true, like hello ? 'blue' : 'red'
  // coolVar is inside the content of the component,
  // so it's a child, to access this kind of prop, use props.children
  // in this case, the props object content is:
  // { children: '123', hello: true, theme: {}}

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
          <Span hello>{`${coolVar}`}</Span>
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
