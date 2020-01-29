import axios from 'axios';
import apiConstants from '@/constants/api';

const {
  ERRORS,
} = apiConstants;

async function loadData(request) {
  try {
    const response = await axios.get(request);
    return response;
  } catch (e) {
    throw (e);
  }
}

async function loadMultipleData(request) {
  try {
    const response = await axios.all(request.map(element => axios.get(element)));
    return response;
  } catch (e) {
    throw (e);
  }
}

function getRequestErrorMessage(error) {
  if (error.response === undefined) {
    return ERRORS.NOT_RESPONSE.MESSAGE;
  }
  if (error.response.status === ERRORS.NOT_FOUND.STATUS) {
    return ERRORS.NOT_FOUND.MESSAGE;
  }
  return error.message;
}

export default {
  loadData,
  loadMultipleData,
  getRequestErrorMessage,
};
