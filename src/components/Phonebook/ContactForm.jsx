import { useState } from "react";
import {nanoid} from 'nanoid';
import css from 'components/Phonebook/Phonebook.module.css';

const ContactForm = ({onAddContact, contacts}) => {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }};

  const handleSubmit = evt => {
    evt.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      return;
    };
    
    if (contacts.some(contact => contact.name === name)) {
      alert(`"${name}" is already in contacts`);
      return;
      };
      
    const contact = {
      id: nanoid(),
      name,
      number,
      };
      
    onAddContact(contact);
    setName("");
    setNumber("");
  };

    return (
      <form onSubmit={handleSubmit} className={css.contactsForm}>
        <label className={css.formLabel}>
          <p>Name</p>
            <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className={css.formLabel}>
          <p>Number</p>
            <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className={css.addBtn}>Add contact</button>
      </form>
    );
}

export default ContactForm;