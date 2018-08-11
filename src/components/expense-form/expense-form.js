import React from 'react';
import PropTypes from 'prop-types';
import './expense-form.scss';

const defaultState = {
  name: '',
  cost: 0,
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense || defaultState;
  } 

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const categoryId = this.props.category._id;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(defaultState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';
    const formText = expense ? `Update ${expense.name} Expense` : 'Create Expense';
    
    return (
      <form
        className="expense-form"
        data-cy="expense-form"
        onSubmit={ this.handleSubmit }
      >
        <label htmlFor="name">{ formText }</label>
        <input 
          type="text"
          name="name"
          placeholder="New Expense"
          value={ this.state.name }
          onChange={ this.handleChange }
        />
        <label htmlFor="cost">{ formText }</label>
        <input 
          type="number"
          name="cost"
          min="0"
          value={ this.state.cost }
          onChange={ this.handleChange }
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  expense: PropTypes.object,
  category: PropTypes.object,
};
