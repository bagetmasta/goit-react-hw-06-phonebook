import { ContactForm } from './ContactForm/ContactForm';
import { Container } from './Container/Container';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { filterContact, getFilter } from 'redux/filterSlice';
import {
  addOneContact,
  deleteOneContact,
  getContacts,
} from 'redux/contactSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts).contacts;
  const filter = useSelector(getFilter);

  const addContact = ({ name, number }) => {
    const oneContact = {
      id: nanoid(),
      name,
      number,
    };

    checkForSameName(oneContact);
  };

  const checkForSameName = oneContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === oneContact.name.toLowerCase()
      )
    ) {
      alert(`${oneContact.name} is already in contacts`);

      return;
    }

    dispatch(addOneContact(oneContact));
  };

  const deleteContact = id => {
    dispatch(deleteOneContact(id));
  };

  const filterChange = value => {
    dispatch(filterContact(value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter onChange={filterChange} filter={filter} />
      <ContactsList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
