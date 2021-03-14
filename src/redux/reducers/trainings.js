const INITIAL_STATE = {
  trainingData: [],
};


const trainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FETCHED_TRAININGS': {
      return { ...state, trainingData: action.data };
    }
    // case 'ADD_FETCHED_ITEM_TYPES': {
    //   return { ...state, types: action.data };
    // }
    default: {
      return state;
    }
  }
}

export default trainingReducer;
