import { PhoneIcon } from '@chakra-ui/icons';
import { Button, ListIcon, ListItem } from '@chakra-ui/react';

const ContactItem = ({ name, number, click }) => {
  return (
    <ListItem>
      <ListIcon as={PhoneIcon} color="teal" />
      {name}:{number}
      <Button ml="10px" bgColor="teal" color="white" size="xs" onClick={click}>
        Delete
      </Button>
    </ListItem>
  );
};
export default ContactItem;
