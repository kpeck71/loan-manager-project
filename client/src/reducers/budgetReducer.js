import cuid from 'cuid';

export default function budgetReducer(state = { income: '', expenses: [] }, action) {

let budget;
  switch (action.type) {
  case 'ADD_BUDGET':
    console.log('budget added', action.newBudget.income)

    return { ...state, income: action.newBudget.income }

  case 'ADD_EXPENSE':
  console.log('expense added', action.newExpense)
  const expense = {
    name: action.newExpense.name,
    amount: action.newExpense.amount,
    category: action.newExpense.category
  }

    return { ...state, expenses: [...state.expenses, expense] }

  case 'FETCH_BUDGET':
    let budget = action.payload
    let newIncome = budget.map((b) => b.income)
    console.log('newIncome is', newIncome)
    return {...state, income: newIncome}

  case 'FETCH_EXPENSES':
    let allExpenses = action.payload
    console.log('Expenses are', allExpenses)
    return {...state, expenses: allExpenses}


    default:
      return state
  }
};
