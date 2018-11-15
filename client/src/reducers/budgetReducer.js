// Reducers specify how the application's state changes in response to actions
// sent to the store. Remember that actions are only plain JS objects describing what happened,
// but don't describe how the application's state changes. The minimal representation of
// the change to the data

// let state = {count: 0};
// function changeState(state, action){
//     switch (action.type) {
//       case 'INCREASE_COUNT':
//         return {count: state.count + 1}
//       default:
//         return state;
//     }
//   }
//
// function dispatch(action){
//     state = changeState(state, action)
// }

// const initialState = {
//   loading: false,
//   error: false,
//   comic: null
// }
//const reducer = (state = initialState, action) => ....

// pure functions, take in previous state, an action, and returns the next state

export default function budgetReducer(state = { income: '', expenses: '', expenseTotal: '' }, action) {

let budget;
let expenseTotalSum;
  switch (action.type) {
  case 'UPDATE_BUDGET':

    return { ...state, income: action.newBudget.income }

  case 'ADD_EXPENSE':
    let expense = {
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
    let allExpenses = action.expenses
    expenseTotalSum = 0;
    allExpenses.map((expense) => expenseTotalSum += expense.amount)
    let funExpenses = allExpenses.filter((expense) => expense.category === "fun")
    let essentialExpenses = allExpenses.filter((expense) => expense.category === "essentials")
    let initialValue = 0
    let essentialTotals = essentialExpenses.reduce((acc, cv) => acc + cv.amount, initialValue)
    return {...state, expenses: allExpenses, expenseTotal: expenseTotalSum, essentialTotals: essentialTotals }

    default:
      return state
  }
};
