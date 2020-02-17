import axios from 'axios';
import apiConstants from '@/constants/api';

const {
  ERRORS,
} = apiConstants;

/**
 * @description execute a get request using axios
 * @param {String} request the url to be requested
 * @returns {Object} information about the response of the server
 * @throws an exception when axios fails
 */
async function loadData(request) {
  try {
    const response = await axios.get(request);
    return response;
  } catch (e) {
    throw (e);
  }
}

/**
 * @description execute a list of multiple requests using axios
 * @param {Array<String>} request array with the list of urls to be requested
 * @returns {Object} information about the response of the server
 * @throws an exception if one of the requests fails
 */
async function loadMultipleData(request) {
  try {
    const response = await axios.all(request.map(element => axios.get(element)));
    return response;
  } catch (e) {
    throw (e);
  }
}

/**
 * @descriptionreturns a description for an error occurred executing a reques
 * @param {Object}error information of the error thrown by axios
 * @returns a string
 */
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
