import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContactsThunk } from '../redux/operations';
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);


  return (
    <div>
      <h1>Phone book</h1>
      <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
    </div>
  );
};
