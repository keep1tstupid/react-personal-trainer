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

  // •date (Date)
  // •duration in minutes (int)
  // •activity (String)
  // •Customer (customer.id) >> customer link

  const [show, setShow] = useState(false);
  const [saveButtonAvailable, setSaveButtonAvailable] = useState(false);
  const [training, setTraining] = useState(INITIAL_STATE);

  const checkFields = (trainingData) => {
    setTimeout(() => {
      if (trainingData.date !== '' &&
        trainingData.duration !== '' &&
        trainingData.activity !== '' &&
        trainingData.customer !== 'none') {
        console.log('Fields are fine: ', trainingData);
        setSaveButtonAvailable(true);
      } else {
        console.log('Something missed: ', trainingData);
        setSaveButtonAvailable(false);
      }
    }, 1000)

    // if (trainingData.date !== '' &&
    //   trainingData.duration !== '' &&
    //   trainingData.activity !== '' &&
    //   trainingData.customer !== 'none') {
    //   console.log('Fields are fine: ', trainingData);
    //   setSaveButtonAvailable(true);
    // } else {
    //   console.log('Something missed: ', trainingData);
    //   setSaveButtonAvailable(false);
    // }
  }

  const handleShow = () => {
    setShow(true);
    // setSaveButtonAvailable(false);
  }
  const handleClose = () => {
    setShow(false);
    setTraining(INITIAL_STATE);
    setSaveButtonAvailable(false);
  }

  const handleChange = (event) => {
    setTraining({...training, [event.target.name]: event.target.value});
    checkFields(training);
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
    checkFields(training)
  }

  const handleSave = () => {
    //console.log(JSON.stringify(training));
    if (training.date === '' || training.duration === '' || training.activity === '' || training.customer === 'none') {
      console.log('NO!');
    } else {
      dispatch(addNewTraining(training));
    }
    handleClose();
  }


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
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label> Date: </Form.Label>
              <Form.Control
                type='datetime-local'
                name='date'
                onChange={handleChange}
                value={training.date}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label> Duration: </Form.Label>
              <Form.Control
                type='text'
                name='duration'
                onChange={handleChange}
                value={training.duration}
              />
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
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label> Customer: </Form.Label>
              <Form.Control
                as="select"
                name='customer'
                onChange={handleCustomerChange}
                //value={training.customerName}
              >
                <option value='none' >Select</option>
                {props.customers.map((customer, index) =>
                  <option key={index} value={index}>
                    {customer.firstname + ' ' + customer.lastname}
                  </option>) }
              </Form.Control>
            </Form.Group>
          </Form.Row>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          { saveButtonAvailable &&
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          }

          { saveButtonAvailable === false &&
          <Button variant="primary" disabled>
            Save
          </Button>
          }

          {/*<Button variant="primary" onClick={handleSave}>*/}
          {/*  Save*/}
          {/*</Button>*/}
        </Modal.Footer>
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
