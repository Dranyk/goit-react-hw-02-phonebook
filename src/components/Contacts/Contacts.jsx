import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import ContactItem from './ContactItem/ContactItem';

const Contacts = ({ contactList, onDelete  }) => (
  <ul className={css.contacts}>
    {contactList.map(item => (
      <ContactItem key={item.id} contact={item}  onDelete={onDelete} />
    ))}
  </ul>
);

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  onDelete: PropTypes.func,
};

export default Contacts;