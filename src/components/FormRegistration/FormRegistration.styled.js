import styled from 'styled-components';
export const FormWrap = styled.form`
  width: 500px;
  margin-top: 30px;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
`;
export const Input = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #5b5b5b;
  padding-left: 10px;
`;
export const Label = styled.label`
  font-size: 18px;
`;
export const Button = styled.button`
  border: none;
  width: 140px;
  height: 40px;
  background-color: teal;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color ease 250ms;

  &:hover,
  :focus {
    background-color: #fff;
    border: 2px solid teal;
    color: teal;
  }
`;
