// import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ contactList }) => {
  return (
    <div className={css.contacts}>
      <ul>
        {contactList.map(({ id, name }) => (
          <li key={id}>
            <p>
              {name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
