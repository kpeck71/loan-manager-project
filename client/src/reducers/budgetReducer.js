import cuid from 'cuid';

export default function budgetReducer(state = { budget: [], expenses: [] }, action) {

let budget;
  switch (action.type) {
  case 'ADD_BUDGET':
    console.log('budget added', action.newBudget)
    budget = {
      id: cuid(),
      income: action.newBudget.income
    }

    return { ...state, budget: [...state.budget, budget] }

    case 'ADD_EXPENSE':
    console.log('expense added', action.newExpense)
    const expense = {
      // budgetId: action.newExpense.budgetId
      expense_name: action.newExpense.expense_name,
      expense_amount: action.newExpense.expense_amount,
      expense_category: action.newExpense.expense_category
    }

    return { ...state, expenses: [...state.expenses, expense] }

    default:
      return state
  }
};
