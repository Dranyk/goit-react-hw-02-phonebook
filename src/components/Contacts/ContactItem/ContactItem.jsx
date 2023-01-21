import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number }, onDelete }) => {

    const handleClick = () => onDelete(id);

    return (
      <li className={css.li}>
        <p>
          {name}: {number}
        </p>
        <button className={css.button} type="button" onClick={handleClick}>
          Delete
        </button>
      </li>
    );
  };
  
  ContactItem.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  };

  export default ContactItem;