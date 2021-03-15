import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from "react-redux";
import { fetchAllCustomers, setSelectedCustomer } from "../../redux/actions";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const CustomersList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCustomers());
  }, [dispatch]);

  const columns = [
    {headerName: 'First name', field: 'firstname', sortable: true, filter: true},
    {headerName: 'Last name', field: 'lastname', sortable: true, filter: true},
    {headerName: 'Street address', field: 'streetaddress', sortable: true, filter: true},
    {headerName: 'Post code', field: 'postcode', sortable: true, filter: true},
    {headerName: 'City', field: 'city', sortable: true, filter: true},
    {headerName: 'Email', field: 'email', sortable: true, filter: true},
    {headerName: 'Phone', field: 'phone', sortable: true, filter: true},
  ];

  const [gridApi, setGridApi] = useState(null);
  const onGridReady = (params) => {
    setGridApi(params.api);
    };

  const onSelectionChanged = () => {
    const selectedRow = gridApi.getSelectedRows()[0];
    dispatch(setSelectedCustomer(selectedRow));
    console.log('Selected: ', selectedRow);
  };

  return (
    <div className="ag-theme-material" style={{height:'700px', width:'70%', margin:'auto'}}>
      <AgGridReact
        rowSelection='single'
        onGridReady={onGridReady}
        pagination={true}
        paginationAutoPageSize={true}
        onSelectionChanged={onSelectionChanged}
        columnDefs={columns}
        rowData={props.customers}>
      </AgGridReact>
    </div>
  )
}

export default connect(
  state => {
    return { customers: state.customers.customerData  }
  }, {}
)(CustomersList);
