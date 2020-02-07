import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './ContactList.styled';

const Contact = ({ name, number, onDeleteContactFor }) => (
  <>
    <span>{`${name}: ${number}`}</span>
    <StyledButton type="button" onClick={onDeleteContactFor}>
      Delete
    </StyledButton>
  </>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContactFor: PropTypes.func.isRequired,
};

export default Contact;
