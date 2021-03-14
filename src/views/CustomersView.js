import React from 'react';
import CustomersList from "../components/CustomersList";
import AppHeader from "../components/AppHeader";
import AddCustomer from "../components/AddCustomer";

const CustomersView = () => {
  const addCustomer = (newCustomer) => {
    fetch('https://customerrest.herokuapp.com/api/customers', {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify(newCustomer)
    })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <AppHeader />
      <AddCustomer />
      <CustomersList />

    </div>
  )
}

export default CustomersView;
