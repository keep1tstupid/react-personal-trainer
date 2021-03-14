import React, { useState } from 'react';
import { Container, Modal, Form, Col, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import {  } from "../redux/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteCustomer = (props) => {

  return (
    <>
      <Button variant="danger" className={'ml-3 mr-3'}>
        Delete Selected Customer
      </Button>

      <Modal></Modal>
    </>
  )
}

export default DeleteCustomer;
