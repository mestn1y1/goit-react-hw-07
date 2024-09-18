import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filtersSlice.js";
import { selectContacts } from "../../redux/contactsSlice.js";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.container}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
