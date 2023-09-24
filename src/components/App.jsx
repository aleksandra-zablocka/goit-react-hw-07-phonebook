import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations/operations';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  const { contacts, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // console.log('contacts:', contacts);

  return (
    <div className={css.container}>
      <div className={css.phoneBook}>
        <Form />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <pre>{JSON.stringify(contacts, null, 2)}</pre> <ContactList />
      </div>
    </div>
  );
}
