
const INITIAL_STATE = {
  trainingData: [],
  selected: null,
};


const trainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FETCHED_TRAININGS': {
      const trainingData = action.data.map(item => {
        return {
          date: item.date,
          duration: item.duration,
          activity: item.activity,
          customerName: item.customer.firstname + " " + item.customer.lastname,
          id: item.id,
        }
      })
      return { ...state, trainingData, };
    }
    case 'SET_SELECTED_TRAINING': {
      return { ...state, selected: action.data };
    }
    default: {
      return state;
    }
  }
}

export default trainingReducer;
