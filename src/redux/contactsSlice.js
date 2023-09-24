import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    addContact: {
      reducer(state, action) {
        const { name, number } = action.payload;
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        state.contacts.push(newContact);
      },
    },
    removeContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
