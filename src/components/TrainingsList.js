import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import moment from 'moment';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const TrainingsList = () => {
  useEffect(() => fetchData(), []);
  const [trainings, setTrainings] = useState([]);
  console.log("trainings: ", trainings);

  const fetchData = () => {
    fetch ('https://customerrest.herokuapp.com/gettrainings')
      .then(response => response.json())
      .then(data => setTrainings(data))
      .catch(err => console.error(err));
  }

  const processedData = trainings.map((training) => {
      training.date = moment(training.date).format('LLL');
      const customerName = training.customer.firstname + " " + training.customer.lastname;
      training.customerName = customerName;
      console.log(customerName);
    }
  );

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
        rowData={trainings}>
      </AgGridReact>
    </div>
  )
}

export default TrainingsList;
