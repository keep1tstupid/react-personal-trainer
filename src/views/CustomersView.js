import React from 'react';
import CustomersList from "../components/CustomersList";
import AppHeader from "../components/AppHeader";
import AddCustomer from "../components/AddCustomer";

const CustomersView = () => {

  return (
    <div>
      <AppHeader />
      <AddCustomer />
      <CustomersList />

    </div>
  )
}

export default CustomersView;
