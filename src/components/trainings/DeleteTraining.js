import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import { deleteTraining } from "../../redux/actions";

import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteTraining = (props) => {
  const [buttonAvailable, setButtonAvailable] = useState(false);
  useEffect(() => {
    if (props.selected !== null) {
      setButtonAvailable(true);
    }
  }, [props]);


  const dispatch = useDispatch();
  const handleDelete = () => {
    // console.log(props);
    dispatch(deleteTraining(props.selected));
    handleClose();
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (buttonAvailable) {
    return (
      <>
        <Button
          variant="danger"
          className={'ml-3 mr-3'}
          onClick={handleShow}
        >
          Delete Selected Training
        </Button>

        <Modal
          show={show}
          aria-labelledby='contained-modal-title-vcenter'
          onExit={handleClose}
        >
          <Modal.Header >
            <Modal.Title>Confirm your action:  </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              You are going to delete training: { props.selected.activity } for { props.selected.customerName }
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
        Delete Selected Training
      </Button>
    </>
  );
}


export default connect(
  state => {
    return { selected: state.trainings.selected }
  }, { deleteTraining }
)(DeleteTraining);
