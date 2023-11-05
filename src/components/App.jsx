import { useState, useEffect } from "react";
import css from 'components/Phonebook/Phonebook.module.css';
import ContactForm from "components/Phonebook/ContactForm";
import ContactList from "components/Phonebook/ContactList";
import ContactFilter from "components/Phonebook/ContactFilter";

const contactsData = [];

const App = () => {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contactlst");
    const parsedContacts = JSON.parse(savedContacts) ?? contactsData;
    return parsedContacts;
  });
  
  const [filter, setFilter] = useState("")

  useEffect(() => { 
    const stringifyContacts = JSON.stringify(contacts);
    localStorage.setItem("contactlst", stringifyContacts);
  }, [contacts]);


  const handleAddContact = contact => {
    setContacts([...contacts, contact]);
  };


  const handleDeleteContact = (id) => {
  setContacts(prevState => prevState.filter(contact => contact.id !== id));
};

  
  const handleFilterChange = evt => {
    const {value} = evt.target;
    setFilter(value);
  };

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div className={css.phonebookForm}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={handleAddContact} />
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      </div>
    )
};
    
export default App;