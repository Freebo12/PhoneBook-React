import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { fetchContacts } from 'components/Redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { getState } from '../components/Redux/contacts/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <PhoneBook />
      <SearchFilter />
      {isLoading && <p>...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <ListContacts />}
    </>
  );
};
