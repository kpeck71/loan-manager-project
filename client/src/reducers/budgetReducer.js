// import cuid from 'cuid';

// Reducers specify how the application's state changes in response to actions
// sent to the store. Remember that actions only describe what happened, but don't
// describe how the application's state changes.

export default function budgetReducer(state = { income: '', expenses: [], expenseTotal: '' }, action) {

let budget;
let expenseTotalSum;
  switch (action.type) {
  case 'UPDATE_BUDGET':
    return { ...state, income: action.newBudget.income }

  case 'ADD_EXPENSE':
    let expense = {
      // id: cuid(),
      name: action.newExpense.name,
      amount: action.newExpense.amount,
      category: action.newExpense.category
    }
    expenseTotalSum = parseFloat(state.expenseTotal) + parseFloat(expense.amount);

    return { ...state, expenses: [...state.expenses, expense], expenseTotal: expenseTotalSum }

  case 'DELETE_EXPENSE':
    expenseTotalSum = parseFloat(state.expenseTotal) - parseFloat(action.expense.amount);

    return { ...state, expenses: state.expenses.filter(expense => expense.id !== action.expense.id), expenseTotal: expenseTotalSum };


  case 'FETCH_BUDGET':
    let budget = action.payload
    let newIncome = budget.map((b) => b.income)
    return {...state, income: newIncome}

  case 'FETCH_EXPENSES':
    let allExpenses = action.payload
    expenseTotalSum = 0
    allExpenses.map((expense) => expenseTotalSum += expense.amount)
    return {...state, expenses: allExpenses, expenseTotal: expenseTotalSum}

    default:
      return state
  }
};
