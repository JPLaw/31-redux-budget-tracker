import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as expenseActions from '../../action/action-expense';
import ExpenseForm from '../expense-form/expense-form';
import Expense from '../expense-item/expense-item';

class Landing extends React.Component {
  render() {
    const { expenses, expenseCreate } = this.props;
    return (
      <div>
        <ExpenseForm onComplete={expenseCreate} />
        {
          expenses.map((currentExpense, i) => <Expense expense={currentExpense} key={i}/>)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  expenses: PropTypes.array,
  expenseCreate: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    expenses: store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    expensesCreate: data => dispatch(expenseActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
