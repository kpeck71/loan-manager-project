import cuid from 'cuid';

export default function budgetReducer(state = { budget: [] }, action) {

let budget;
  switch (action.type) {

  case 'ADD_BUDGET':
    console.log('budget added', action.newBudget)
    const budget = {
      income: action.newBudget.income,
      housing_cost: action.newBudget.housing_cost,
      food: action.newBudget.food,
      credit_cards: action.newBudget.credit_cards,
      personal_loan: action.newBudget.personal_loan,
      car_loan: action.newBudget.car_loan,
      savings: action.newBudget.savings,
      miscellaneous: action.newBudget.miscellaneous
    }

    return { ...state, budget: [...state.budget, budget] }

    default:
      return state
  }
};
