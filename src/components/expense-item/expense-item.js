import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/action-expense';

class Expense extends React.Component {
  render() {
    const {
      expense,
      key,
      expenseRemove,
      expenseUpdate,
    } = this.props;
    return (
      <div className="expense" key={key}>
        <h3> { expense.title }</h3>
        <p> Cost: {expense.cost} </p>
        <ExpenseForm expense={expense} onComplete={expenseUpdate}/>
        <button onClick={() => expenseRemove(expense)}>Delete</button>
      </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  key: PropTypes.number,
  expenseRemove: PropTypes.func,
  expenseUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    expenseRemove: data => dispatch(expenseActions.remove(data)),
    expenseUpdate: data => dispatch(expenseActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Expense);
