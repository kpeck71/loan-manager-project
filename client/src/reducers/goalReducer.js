export default function goalReducer(state = { goals: [] }, action) {

let goal;
  switch (action.type) {

    case 'FETCH_GOALS':
      return {...state, goals: action.payload, loading: false }

    case 'ADD_GOAL':
      goal = {
        title: action.newGoal.title,
        total: action.newGoal.total,
        category: action.newGoal.category,
        amount_paid: 0,
        amount_left: action.newGoal.total
      }

      return { ...state, goals: [...state.goals, goal] }

    case 'UPDATE_GOAL':
      return { ...state, goals: [...state.goals, action.goal] }

    case 'DELETE_GOAL':
      return { ...state, goals: state.goals.filter(goal => goal.id !== action.id )};


    default:
      return state
  }

};
