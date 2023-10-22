import { List } from '@chakra-ui/react';
import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  console.log(filteredContacts);

  return (
    <List mt="30px">
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          click={() => dispatch(deleteContact(id))}
        />
      ))}
    </List>
  );
};

export default ContactList;
