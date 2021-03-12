import React from 'react';
import CustomersList from "../components/CustomersList";
import AppHeader from "../components/AppHeader";

const CustomersView = (props) => {

  return (
    <div>
      <AppHeader />
      <CustomersList />

    </div>
  )
}

export default CustomersView;
