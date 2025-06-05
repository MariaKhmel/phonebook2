const addContact = (contact, setContacts) => {
  setContacts((prevContacts) => [...prevContacts, contact]);
};

const deleteContact = (contactId, setContacts) => {
  setContacts((prevContacts) =>
    prevContacts.filter(({ id }) => id !== contactId)
  );
};

export { addContact, deleteContact };