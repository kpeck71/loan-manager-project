import cuid from 'cuid';

export default function goalReducer(state = { goals: [] }, action) {

let goal;
  switch (action.type) {
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
