import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  cost: 0,
  // titleCost: [],
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense || defaultState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const buttonText = this.props.expense ? 'Update' : 'Create';
    return (
      <form
        onSubmit={ this.handleSubmit }
        className="expense-form"
      >
      <input
      type="text"
      name="title"
      placeholder="title"
      value={this.state.value}
      onChange={this.handleChange}
      />
      <input
      type="number"
      min="0"
      name="cost"
      placeholder="cost"
      value={this.state.value}
      onChange={this.handleChange}
      />
      <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  expense: PropTypes.object,
};
