import { deleteContact } from 'redux/operations/operations';
import css from './ContactEl.module.css';
import { useDispatch } from "react-redux";

const ContactEl = ({contact}) => {
const dispatch = useDispatch();

const handleDelete = () => {
  dispatch(deleteContact(contact.id))
}

return (
  <div className={css.contactEl}>
    <p>{contact.name}</p>
    <p>{contact.number}</p>
    <button className={css.removeBtn} onClick={handleDelete}>Remove</button>
  </div>
)
}

export default ContactEl;