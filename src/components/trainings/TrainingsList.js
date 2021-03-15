import React, { useState, useEffect } from 'react';
import {useDispatch} from "react-redux";
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { fetchAllTrainings } from "../../redux/actions";

const TrainingsList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrainings());
  }, [dispatch]);

// Training contains following attributes:
// •id (long)
// •date (Date)
// •duration in minutes (int)
// •activity (String)
// •Customer (customer.id)

  const columns = [
    {headerName: 'Date', field: 'date', sortable: true, filter: true},
    {headerName: 'Duration', field: 'duration', sortable: true, filter: true},
    {headerName: 'Activity', field: 'activity', sortable: true, filter: true},
    {headerName: 'Customer', field: 'customerName', sortable: true, filter: true},
  ];

  return (
    <div className="ag-theme-material" style={{height:'700px', width:'70%', margin:'auto'}}>
      <AgGridReact
        columnDefs={columns}
        rowData={props.trainings}>
        {/*rowSelection='single'*/}
        {/*pagination={true}*/}
        {/*paginationAutoPageSize={true}*/}
      </AgGridReact>
    </div>
  )
}

export default connect(
  state => {
    return { trainings: state.trainings.trainingData }
  }, {}
)(TrainingsList);
