import cuid from 'cuid';

export default function budgetReducer(state = { budget: [] }, action) {

let budget;
  switch (action.type) {
  case 'ADD_BUDGET':
    console.log('budget added', action.newBudget)
    // const newBudget = {
    //   income: action.newBudget.income,
    //   expenses: [
    //     expense_name: action.newBudget.expense_name,
    //     expense_amount: action.newBudget.expense_amount,
    //     expense_category: action.newBudget.expense_category
    //   ]
    // }
    return { ...state, budget: [...state.budget, action.newBudget] }

    case 'ADD_EXPENSE':
    console.log('expense added', action.newExpense)
    const expense = {
      expense_name: action.newExpense.expense_name,
      expense_amount: action.newExpense.expense_amount,
      expense_category: action.newExpense.expense_category
    }

    return { ...state, budget: [...state.budget, expense] }

    default:
      return state
  }
};
