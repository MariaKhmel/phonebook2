import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import initialContacts from "../../data/contacts";
import css from "./App.module.css";
import { useEffect } from "react";
import { addContact, deleteContact } from "../../js/updateContacts";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilters } from "../../redux/selectors";
import { setFilter, setContacts } from "../../redux/actions";

const LS_KEY = "contacts";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilters);
  const setContactsList = (contacts) => dispatch(setContacts(contacts));

  const setFilterValue = (filter) => dispatch(setFilter(filter));

  useEffect(() => {
    const contacts = localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(contacts);
    parsedContacts ? setContacts(parsedContacts) : setContacts(initialContacts);
  }, []);

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem(LS_KEY, stringifiedContacts);
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLocaleLowerCase())
  );

  const handleAddContact = (contact) => {
    addContact(contact, setContacts);
  };
  const handleDeleteContact = (contactId) => {
    deleteContact(contactId, setContactsList);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox filterValue={filterValue} setFilterValue={setFilterValue} />
      <ContactList
        contacts={visibleContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
