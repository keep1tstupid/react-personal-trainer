import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AppHeader from "../components/general/AppHeader";
import AddCustomer from "../components/customers/AddCustomer";
import EditCustomer from "../components/customers/EditCustomer";
import DeleteCustomer from "../components/customers/DeleteCustomer";
import CustomersList from "../components/customers/CustomersList";

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
