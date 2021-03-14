const INITIAL_STATE = {
  customerData: [],
};

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
  }
}

export default customerReducer;
