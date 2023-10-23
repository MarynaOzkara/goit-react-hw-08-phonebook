import { useDispatch } from 'react-redux';
import { FormWrap } from './FormRegistration/FormRegistration.styled';
import { logIn } from 'redux/authorization/operations';
import { Button, FormLabel, Input } from '@chakra-ui/react';

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
          Login
        </Button>
      </FormWrap>
    </>
  );
};
export default FormLogin;
