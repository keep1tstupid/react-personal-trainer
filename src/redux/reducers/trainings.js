import moment from 'moment';


const INITIAL_STATE = {
  trainingData: [],

};


const trainingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FETCHED_TRAININGS': {
      const trainingData = action.data.map(item => {
        return {
          date: moment(item.date).format('LLL'),
          duration: item.duration + ' min.',
          activity: item.activity,
          customerName: item.customer.firstname + " " + item.customer.lastname,
        }
      })
      return { ...state, trainingData, };
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
