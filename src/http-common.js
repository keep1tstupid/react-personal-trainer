import axios from 'axios';

export default axios.create({
  baseURL: 'https://customerrest.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});
