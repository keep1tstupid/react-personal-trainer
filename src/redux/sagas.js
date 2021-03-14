import {call, put, takeEvery} from 'redux-saga/effects';
import http from "../http-common";
import {addFetchedCustomers, addFetchedTrainings, fetchAllCustomers as fetchAllCustomersAction} from './actions';

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

// saga to add new customer
function* addNewCustomer(action) {
  try {
    yield call(fetch, "https://customerrest.herokuapp.com/api/customers", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(action.data),
    });
    yield put(fetchAllCustomersAction());
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
    yield put(addFetchedTrainings(body.content));
  } catch (err) {
    // Handle error
    // yield put(showErrorPopup('SNAP!'));
    console.error(err);
  }
}





// MAIN SAGA

export default function* mainSaga() {
  yield takeEvery('FETCH_ALL_CUSTOMERS', fetchAllCustomers);
  yield takeEvery('ADD_NEW_CUSTOMER', addNewCustomer);
  // yield takeEvery('ADD_NEW_ITEM', addNewItem);
  // yield takeEvery('DELETE_ITEM', deleteItem);
  yield takeEvery('FETCH_ALL_TRAININGS', fetchAllTrainings);
}
