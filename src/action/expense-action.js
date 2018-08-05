import uuid from 'uuid/v4';

export const createExpense = ({ categoryId, name, price }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    _id: uuid(),
    categoryId,
    name,
    price,
    createdOn: new Date(),
  },
});

export const updateExpense = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const deleteExpense = expense => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
});

export { createExpense, updateExpense, deleteExpense };
