import {call, put, takeEvery} from 'redux-saga/effects';
import http from "../http-common";
import {addFetchedCustomers, addFetchedTrainings} from './actions';

// sagas for customers
function* fetchAllCustomers() {
  try {
    const result = yield call(fetch, 'https://customerrest.herokuapp.com/api/customers');
    const body = yield call([result, 'json']);
    yield put(addFetchedCustomers(body.content));
  } catch (err) {
    // Handle error
    // yield put(showErrorPopup('SNAP!'));
    console.error(err);
  }
}


// sagas for trainings
function* fetchAllTrainings() {
  try {
    const result = yield call(fetch, 'https://customerrest.herokuapp.com/gettrainings');
    const body = yield call([result, 'json']);
    yield put(addFetchedTrainings(body));
  } catch (err) {
    // Handle error
    // yield put(showErrorPopup('SNAP!'));
    console.error(err);
  }
}





// MAIN SAGA

export default function* mainSaga() {
  yield takeEvery('FETCH_ALL_CUSTOMERS', fetchAllCustomers);
  // yield takeEvery('FETCH_ALL_ITEM_TYPES', fetchAllItemTypes);
  // yield takeEvery('ADD_NEW_ITEM', addNewItem);
  // yield takeEvery('DELETE_ITEM', deleteItem);
  yield takeEvery('FETCH_ALL_TRAININGS', fetchAllTrainings);
}
