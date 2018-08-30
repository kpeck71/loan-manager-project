import cuid from 'cuid';

export default function manageGoals(state = { goals: [], budget: [] }, action) {

let goal;
  switch (action.type) {
    case 'FETCH_GOALS':
      return { ...state, goals: [...state.goals, ...action.payload] }

    case 'ADD_BUDGET':
      // console.log('budget added', action.newBudget)
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

    case 'ADD_GOAL':
    console.log('adding goal', action.goal)

      goal = {
        id: cuid(),
        title: action.goal.title,
        total: action.goal.total,
        category: action.goal.category,
        amount_paid: 0,
        amount_left: action.goal.total
      }
      return { ...state, goals: [...state.goals, goal] }

    case 'ADD_PAYMENT':
    console.log('adding paymemt')
    console.log(state)
    console.log(action.payment.payment)
      goal = {
        goalId: action.payment.goalId,
        total: action.payment.goalTotal - action.payment.payment
      }

      return { ...state, goals: [...state.goals, goal] }

      default:
        return state
    }
};
