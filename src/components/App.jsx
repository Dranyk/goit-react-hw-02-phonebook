import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import Contacts from './Contacts/Contacts';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  isContactInState = ({ name, number }) =>
    !!this.state.contacts.filter(({ name: prevName, number: prevNumber }) => {
      return prevName === name && prevNumber === number;
    }).length;

  handleSubmitForm = ({ name, number }) => {
    if (this.isContactInState({ name, number })) {
      alert('Contact is in phonebook');
      return;
    }

    this.setState(({ contacts: prevContacts }) => ({
      contacts: [...prevContacts, { id: nanoid(), name, number }],
    }));
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterNormalize = filter => filter.toLowerCase();

  contactListToDisplay = (contacts, filter) =>
    contacts.filter(({ name }) => name.toLowerCase().includes(filter));


  handleDeleteContact = id => {
    this.setState(({ contacts: prevContacts }) => ({
      contacts: prevContacts.filter(({ id: contactId }) => contactId !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = this.filterNormalize(filter);
    const contactsToDisplay = this.contactListToDisplay(
      contacts,
      normalizedFilter
    );
    return (
      <div className={css.container}>
        <div>
          <h1>Phonebook</h1>
          <Phonebook onSubmitForm={this.handleSubmitForm} />

          <h2>Contacts</h2>
          <Filter filter={filter} onChange={this.handleFilterChange} />
          <Contacts
            contactList={contactsToDisplay}
            onDelete={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
