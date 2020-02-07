import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import { List, ListItem } from './ContactList.styled';

const ContactList = ({ items, onDeleteContact }) =>
  items.length > 0 && (
    <List>
      {items.map(contact => (
        <ListItem key={contact.id}>
          <Contact
            {...contact}
            onDeleteContactFor={() => onDeleteContact(contact.id)}
          />
        </ListItem>
      ))}
    </List>
  );

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
