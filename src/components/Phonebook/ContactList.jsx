import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={css.contactsForm}>
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact}/>
      ))}
    </ul>
  </div>
);

export default ContactList;


