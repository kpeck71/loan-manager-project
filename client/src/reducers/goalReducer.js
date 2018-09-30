import cuid from 'cuid';

export default function goalReducer(state = { goals: [] }, action) {

let goal;
  switch (action.type) {

    case 'LOADING':
      return { ...state, loading: true }

    case 'FETCH_GOALS':
      return {...state, goals: action.payload, loading: false }

    case 'ADD_GOAL':
    debugger
      goal = {
        title: action.newGoal.title,
        total: action.newGoal.total,
        category: action.newGoal.category,
        amount_paid: 0,
        amount_left: action.newGoal.total
      }

      return { ...state, goals: [...state.goals, goal] }

    case 'DELETE_GOAL':
      return { ...state, goals: state.goals.filter(goal => goal.id !== action.id )};

    case 'ADD_PAYMENT':
      goal = {
        goalId: action.payment.goalId,
        total: action.payment.goalTotal - action.payment.payment
      }

      return { ...state, goals: [...state.goals, goal] }

    default:
      return state
  }

};
