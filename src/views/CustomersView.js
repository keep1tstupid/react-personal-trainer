import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AppHeader from "../components/AppHeader";
import AddCustomer from "../components/AddCustomer";
import EditCustomer from "../components/EditCustomer";
import DeleteCustomer from "../components/DeleteCustomer";
import CustomersList from "../components/CustomersList";

const CustomersView = () => {

  return (
    <div>
      <AppHeader />
      <Container className={'m-3'}>
        <AddCustomer />
        <EditCustomer />
        <DeleteCustomer />
      </Container>
      <CustomersList />
    </div>
  )
}

export default CustomersView;
