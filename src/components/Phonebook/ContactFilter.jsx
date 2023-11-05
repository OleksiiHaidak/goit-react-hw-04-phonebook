import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';

const ContactFilter = ({value, onChange}) => (
  <label className={css.formLabel}>
    <p className={css.labelTitle}>Find contacts by name</p>
    <input type="text" value={value} onChange={onChange} className={css.input} />
  </label>
);

export default ContactFilter;

