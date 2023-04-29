import { ListElem } from '../ListElem/ListElem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getValidContacts } from '../Redux/contacts/selectors';
import { fetchContacts } from 'components/Redux/contacts/operations';

export const ListContacts = () => {
  const contacts = useSelector(getContacts);
  const visibleContacts = useSelector(getValidContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (contacts.length !== 0) {
    return (
      <ul>
        {visibleContacts.map(contact => {
          return <ListElem key={contact.id} contact={contact} />;
        })}
      </ul>
    );
  }
};
