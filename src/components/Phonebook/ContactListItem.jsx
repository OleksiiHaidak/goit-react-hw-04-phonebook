import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  const handleDeleteClick = () => {onDeleteContact(contact.id)};

  return (
    <li key={contact.id} className={css.contactList}>
      {contact.name}: {contact.number}
      <button onClick={handleDeleteClick} className={css.delBtn}>Delete</button>
    </li>
  );
};

export default ContactListItem;