import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from 'redux/contactsSlice';

axios.defaults.baseURL = 'https://650f129654d18aabfe99ce67.mockapi.io/contacts';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
    console.log('Response data:', response.data);
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
