import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

const Phonebook = ({name,onSubmit,onChange}) => {
  return (
    <form className={css.phonebook} onSubmit={onSubmit}>
    <label>
      <p>Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onChange}
      />
      </label>
      <button className={css.button} type="submit">Add contact</button>
      </form>
  );
};

export default Phonebook;

Phonebook.propTypes = {
    name:PropTypes.string,
}
