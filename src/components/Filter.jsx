import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

import { Input, Text } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = ({ target: { value } }) => {
    const filterQuery = value.trim();
    console.log(filterQuery);
    dispatch(setFilter(filterQuery));
  };
  return (
    <>
      <Text mt="20px">Find contacts by name</Text>
      <Input size="md" type="text" value={filter} onChange={handleChange} />
    </>
  );
};

export default Filter;
