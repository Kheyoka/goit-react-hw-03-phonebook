import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'short-id';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    onSubmitContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();

  numberInputId = shortid.generate();

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.label}>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            name="name"
            className={styles.input}
          />
        </label>
        <label htmlFor={this.numberInputId} className={styles.label}>
          Number
          <input
            type="tel"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
            name="number"
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}
