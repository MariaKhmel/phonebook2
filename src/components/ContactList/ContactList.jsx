import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            contact={contact}
            handleDeleteContact={handleDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
