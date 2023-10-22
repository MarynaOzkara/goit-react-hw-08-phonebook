// import {
//   Button,
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   Input,
// } from '@chakra-ui/react';
// import { useState } from 'react';
import {
  FormWrap,
  InputWrap,
  Label,
  Input,
  Button,
} from './FormRegistration.styled';
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
        <InputWrap>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please add your real email"
            required
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="Password should compleat from leters, numbers, simbols"
            required
          />
        </InputWrap>
        <Button type="submit">Register</Button>
      </FormWrap>

      {/* <FormControl isRequired mt="40px" onSubmit={handleSubmit}>
        <FormLabel>First name</FormLabel>
        <Input name="name" type="text" id="name" placeholder="First name" />
        <FormLabel>Email</FormLabel>
        <Input name="email" type="email" id="email" placeholder="Email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="password"
          id="password"
          placeholder="Password"
        />

        <Button colorScheme="teal" size="md" type="submit" mt="20px">
          Register
        </Button>
      </FormControl> */}
    </>
  );
};
export default FormRegistration;
