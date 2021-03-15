import React, {useEffect, useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import { deleteCustomer } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteCustomer = (props) => {
  useEffect(() => {
    if (props.selected !== null) {
      setButtonAvailable(true);
    }
  }, [props]);

  const dispatch = useDispatch();
  const [buttonAvailable, setButtonAvailable] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    console.log(props);
    dispatch(deleteCustomer(props.selected));
    handleClose();
  }

  if (buttonAvailable) {
    return (
      <>
        <Button
          variant="danger"
          className={'ml-3 mr-3'}
          onClick={handleShow}
        >
          Delete Selected Customer
        </Button>

        <Modal
          show={show}
          aria-labelledby='contained-modal-title-vcenter'
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm your action:  </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              You are going to delete customer: { props.selected.firstname + ' ' +  props.selected.lastname }
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Button
        variant="danger"
        className={'ml-3 mr-3'}
        onClick={handleShow}
        disabled
      >
        Delete Selected Customer
      </Button>
    </>
  );
}

export default connect(
  state => {
    return { selected: state.customers.selected }
  }, { deleteCustomer }
)(DeleteCustomer);
