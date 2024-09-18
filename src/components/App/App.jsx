import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { fetchContacts } from "../../redux/contatctsOps";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loader = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && <div>loading</div>}
      {error && <div>error message</div>}
      <ContactList />
    </div>
  );
}
