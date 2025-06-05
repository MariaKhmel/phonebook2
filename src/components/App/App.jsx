import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import initialContacts from "../../data/contacts";
import css from "./App.module.css";
import { useEffect, useState } from "react";
import { addContact, deleteContact } from "../../js/updateContacts";

const LS_KEY = "contacts";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filterValue, setFilterValue] = useState("");

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
    deleteContact(contactId, setContacts);
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
