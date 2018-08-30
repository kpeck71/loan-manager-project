import cuid from 'cuid';
import { createStore } from 'redux';

export default function manageGoals(state = { goals: [], budget: [] }, action) {

let goal;
  switch (action.type) {
    case 'FETCH_GOALS':
      return { ...state, goals: [...state.goals, ...action.payload] }

    case 'ADD_BUDGET':
    console.log('budget added', action.budget, state.budget)
    const budget = {
      income: action.budget.income,
      housing_cost: action.budget.housing_cost,
      food: action.budget.food,
      credit_cards: action.budget.credit_cards,
      personal_loan: action.budget.personal_loan,
      car_loan: action.budget.car_loan,
      savings: action.budget.savings,
      miscellaneous: action.budget.miscellaneous
    }
    return { ...state, budget: [...state.budget, budget] }

    case 'ADD_GOAL':
    console.log('adding goal', action.goal)

      goal = {
        id: cuid(),
        title: action.goal.title,
        total: action.goal.total,
        category: action.goal.category
      }
      return { ...state, goals: [...state.goals, goal] }
      console.log(state)

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
