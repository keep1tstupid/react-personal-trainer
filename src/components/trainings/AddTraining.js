import React, { useEffect, useState } from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import { fetchAllCustomers, addNewTraining } from "../../redux/actions";

const AddTraining = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCustomers());
  }, [dispatch]);

  const INITIAL_STATE = {
    date: '',
    duration: '',
    activity: '',
    customer: 'none',
  }

  const [show, setShow] = useState(false);
  const [training, setTraining] = useState(INITIAL_STATE);

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
    setTraining(INITIAL_STATE);
  }

  const handleChange = (event) => {
    setTraining({...training, [event.target.name]: event.target.value});
  }

  const handleCustomerChange = (event) => {
    if (event.target.value === 'none') {
      setTraining({...training, customer: 'none'});
    } else {
      setTraining({
        ...training, customer: props.customers[event.target.value].links[0].href
      });
    }
    //console.log(training.customer);
  }

  const handleSave = () => {
    dispatch(addNewTraining(training));
    handleClose();
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("no");
    } else {
      handleSave();
    }
    setValidated(true);
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow} className={'ml-3 mr-3'}>
        Add New Training
      </Button>

      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title> New training info: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label> Date: </Form.Label>
                <Form.Control
                  type='datetime-local'
                  name='date'
                  onChange={handleChange}
                  value={training.date}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  This field can't be empty.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label> Duration: </Form.Label>
                <Form.Control
                  type='text'
                  name='duration'
                  onChange={handleChange}
                  value={training.duration}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  This field can't be empty.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label> Activity: </Form.Label>
                <Form.Control
                  type='text'
                  name='activity'
                  onChange={handleChange}
                  value={training.activity}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  This field can't be empty.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label> Customer: </Form.Label>
                <Form.Control
                  as="select"
                  name='customer'
                  onChange={handleCustomerChange}
                  required
                  custom
                  //value={training.customerName}
                >
                  <option disabled value="" selected hidden> Select </option>
                  {props.customers.map((customer, index) =>
                    <option key={index} value={index}>
                      {customer.firstname + ' ' + customer.lastname}
                    </option>) }
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  This field can't be empty.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Button type='submit'> Save </Button> {' '}
            <Button variant='outline-secondary' onClick={handleClose}> Cancel </Button>
          </Form>
        </Modal.Body>

        {/*<Modal.Footer>*/}
        {/*  <Button variant="secondary" onClick={handleClose}>*/}
        {/*    Cancel*/}
        {/*  </Button>*/}

        {/*  { saveButtonAvailable &&*/}
        {/*  <Button variant="primary" onClick={handleSave}>*/}
        {/*    Save*/}
        {/*  </Button>*/}
        {/*  }*/}

        {/*  { saveButtonAvailable === false &&*/}
        {/*  <Button variant="primary" disabled>*/}
        {/*    Save*/}
        {/*  </Button>*/}
        {/*  }*/}

        {/*  /!*<Button variant="primary" onClick={handleSave}>*!/*/}
        {/*  /!*  Save*!/*/}
        {/*  /!*</Button>*!/*/}
        {/*</Modal.Footer>*/}
      </Modal>
    </>
  );
}

// export default AddTraining;

export default connect(
  state => {
    return { customers: state.customers.customerData  }
  }, {}
)(AddTraining);
