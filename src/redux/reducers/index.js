import { combineReducers } from 'redux';
import customers from './customers';
import trainings from './trainings';


export default combineReducers({ customers, trainings });
