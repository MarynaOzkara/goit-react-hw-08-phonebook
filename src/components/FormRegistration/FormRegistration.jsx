import { Button, FormLabel, Input } from '@chakra-ui/react';
import { FormWrap } from './FormRegistration.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authorization/operations';

const FormRegistration = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // console.log(form.elements.name.value);
    // console.log(form.elements.email.value);
    // console.log(form.elements.password.value);
    form.reset();
  };
  return (
    <>
      <FormWrap onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormLabel mt="10px">Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please add your real email"
          required
        />
        <FormLabel mt="10px">Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Password should compleat from leters, numbers, simbols"
          required
        />
        <Button color="white" bgColor="teal" mt="20px" type="submit">
          Register
        </Button>
      </FormWrap>
    </>
  );
};
export default FormRegistration;
