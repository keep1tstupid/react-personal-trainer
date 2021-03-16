import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from "react-redux";
import { fetchAllTrainings, setSelectedTraining } from "../../redux/actions";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


const TrainingsList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrainings());
  }, [dispatch]);

  const [gridApi, setGridApi] = useState(null);
  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const onSelectionChanged = () => {
    const selectedRow = gridApi.getSelectedRows()[0];
    dispatch(setSelectedTraining(selectedRow));
    // console.log('Selected: ', selectedRow);
  };

  const columns = [
    {headerName: 'Date', field: 'date', sortable: true, filter: true},
    {headerName: 'Duration', field: 'duration', sortable: true, filter: true},
    {headerName: 'Activity', field: 'activity', sortable: true, filter: true},
    {headerName: 'Customer', field: 'customerName', sortable: true, filter: true},
  ];

  return (
    <div className="ag-theme-material" style={{height:'700px', width:'70%', margin:'auto'}}>
      <AgGridReact
        rowSelection='single'
        onGridReady={onGridReady}
        pagination={true}
        paginationAutoPageSize={true}
        onSelectionChanged={onSelectionChanged}
        columnDefs={columns}
        rowData={props.trainings.map(item => ({ ...item, duration: item.duration + ' min.'}))}>
      </AgGridReact>
    </div>
  )
}

export default connect(
  state => {
    return { trainings: state.trainings.trainingData }
  }, {}
)(TrainingsList);
