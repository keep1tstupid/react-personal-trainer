const INITIAL_STATE = {
  customerData: [],
  selected: null,
};

// Customer contains following attributes:
// id (long)
// firstname (String)
// lastname (String)
// streetaddress (String)
// postcode (String)
// city (String)
// email (String)
// phone (String)

const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FETCHED_CUSTOMERS': {
      return { ...state, customerData: action.data };
    }
    case 'SET_SELECTED_CUSTOMER': {
      return { ...state, selected: action.data };
    }
    default: {
      return state;
    }
  }
}

export default customerReducer;
