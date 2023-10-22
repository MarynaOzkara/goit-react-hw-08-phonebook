// import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  FormWrap,
  InputWrap,
  Label,
  Input,
  Button,
} from './FormRegistration/FormRegistration.styled';
import { logIn } from 'redux/authorization/operations';
const FormLogin = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // console.log(form.elements.email.value);
    // console.log(form.elements.password.value);
    form.reset();
  };
  return (
    <>
      <FormWrap onSubmit={handleSubmit} autoComplete="off">
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
        <Button type="submit">Login</Button>
      </FormWrap>
      {/* <FormControl isRequired mt="40px">
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Email" />

        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Password" />

        <Button colorScheme="teal" size="md" type="submit" mt="20px">
          Login
        </Button>
      </FormControl> */}
    </>
  );
};
export default FormLogin;
