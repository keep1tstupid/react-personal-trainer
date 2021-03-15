import React, { useState } from 'react';
import { Container, Modal, Form, Col, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import {  } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCustomer = (props) => {
  const INITIAL_STATE = {
    id: props.id,
    firstname: props.firstname,
    lastname: props.lastname,
    streetaddress: props.streetaddress,
    postcode: props.postcode,
    city: props.city,
    email: props.email,
    phone: props.phone,
  }

  const [customer, setCustomer] = useState(INITIAL_STATE);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <Button variant="light" className={'ml-3 mr-3'} disabled>
        Edit Selected Customer
      </Button>

      <Modal></Modal>
    </>
  );
}

export default AddCustomer;