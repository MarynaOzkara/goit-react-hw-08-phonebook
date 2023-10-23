import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormWrap } from './FormRegistration/FormRegistration.styled';
import { Button, FormLabel, Input } from '@chakra-ui/react';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const userAlreadyExist = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (userAlreadyExist) {
      //   Notify.warning('Contact is alresdy exist!');
      return;
    }
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <FormLabel>Name</FormLabel>
      <Input
        onChange={handleChange}
        value={name}
        type="text"
        required
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore"
      />
      <FormLabel mt="10px">Number</FormLabel>
      <Input
        onChange={handleChange}
        value={number}
        type="tel"
        required
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button color="white" bgColor="teal" mt="20px" type="submit">
        Add contact
      </Button>
    </FormWrap>
  );
};
export default ContactForm;
