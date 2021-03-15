// actions for customers


export const fetchAllCustomers = () => ({
  type: 'FETCH_ALL_CUSTOMERS',
  data: null,
})

export const addFetchedCustomers = (data) => ({
  type: 'ADD_FETCHED_CUSTOMERS',
  data: data,
})

export const addNewCustomer = (data) => ({
  type: 'ADD_NEW_CUSTOMER',
  data: data,
})

export const deleteCustomer = (data) => ({
  type: 'DELETE_CUSTOMER',
  data: data,
})

export const setSelectedCustomer = (data) => ({
  type: 'SET_SELECTED',
  data: data,
})


// actions for trainings

export const fetchAllTrainings = () => ({
  type: 'FETCH_ALL_TRAININGS',
  data: null,
})

export const addFetchedTrainings = (data) => ({
  type: 'ADD_FETCHED_TRAININGS',
  data: data,
})
