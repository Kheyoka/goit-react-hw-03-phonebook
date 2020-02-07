import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <>
    <h3>Find contacts by name</h3>
    <input value={value} onChange={onChangeFilter} />
  </>
);
Filter.defaultProps = {
  value: '',
};
Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
