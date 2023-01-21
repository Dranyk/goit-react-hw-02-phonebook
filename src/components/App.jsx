import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import Contacts from './Contacts/Contacts';
import Phonebook from './Phonebook/Phonebook';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    this.setState(({ contacts, name }) => {
      contacts.push({ id: nanoid(), name });
    });
    this.setState({ name: '' });
  };

  handleCanngeInput = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div className={css.container}>
        <div>
          <h1>Phonebook</h1>
          <Phonebook  name={name}
            onSubmit={this.handleSubmitForm}
            onChange={this.handleCanngeInput}/>

          <h2>Contacts</h2>
          <Contacts contactList={contacts} />
        </div>
      </div>
    );
  }
}

export default App;
