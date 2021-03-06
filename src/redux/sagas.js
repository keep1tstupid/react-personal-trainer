import {call, put, takeEvery} from 'redux-saga/effects';
import {
  addFetchedCustomers,
  addFetchedTrainings,
  fetchAllCustomers as fetchAllCustomersAction,
  fetchAllTrainings as fetchAllTrainingsAction,
}
  from './actions';

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

// saga to edit customer
function* editCustomer(action) {
  try {
    yield call(fetch, action.data.links[0].href, {
      method: "PUT",
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

// saga to delete customer
function* deleteCustomer(action) {
  try {
    yield call(fetch, action.data.links[0].href, {
      method: "DELETE",
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
    yield put(addFetchedTrainings(body));
  } catch (err) {
    console.error(err);
  }
}

// add new training
function* addNewTraining(action) {
  try {
    yield call(fetch, "https://customerrest.herokuapp.com/api/trainings", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(action.data),
    });
    yield put(fetchAllTrainingsAction());
  } catch (err) {
    console.error(err);
  }
}

// delete training
function* deleteTraining(action) {
  try {
    const url = "https://customerrest.herokuapp.com/api/trainings/" + action.data.id;
    yield call(fetch, url, {
      method: "DELETE",
    });
    yield put(fetchAllTrainingsAction());
  } catch (err) {
    console.error(err);
  }
}

// MAIN SAGA
export default function* mainSaga() {
  yield takeEvery('FETCH_ALL_CUSTOMERS', fetchAllCustomers);
  yield takeEvery('ADD_NEW_CUSTOMER', addNewCustomer);
  yield takeEvery('EDIT_CUSTOMER', editCustomer);
  yield takeEvery('DELETE_CUSTOMER', deleteCustomer);
  yield takeEvery('FETCH_ALL_TRAININGS', fetchAllTrainings);
  yield takeEvery('ADD_NEW_TRAINING', addNewTraining);
  yield takeEvery('DELETE_TRAINING', deleteTraining);
}
