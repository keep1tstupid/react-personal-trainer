import moment from "moment";

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
    // case 'ADD_FETCHED_ITEM_TYPES': {
    //   return { ...state, types: action.data };
    // }
    default: {
      return state;
    }
    case 'SET_SELECTED': {
      return { ...state, selected: action.data };
    }
  }
}

export default customerReducer;
