import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';
import Filter from 'components/Filter';
import ContactList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactsForm';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const length = contacts.length;
  return (
    <Box>
      <Text fontSize={32}>Your PhoneBook</Text>
      <ContactForm />
      <Text fontSize={24} mt="30px">
        Your Contacts
      </Text>
      {length > 0 ? (
        <Filter />
      ) : (
        <Text mt="10px">Contact list is empty! Add your first contact.</Text>
      )}
      {isLoading && !error && <Spinner color="teal" size="xl" />}
      {length > 0 && <ContactList />}
    </Box>
  );
};
export default ContactsPage;
