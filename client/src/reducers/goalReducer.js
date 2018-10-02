import cuid from 'cuid';

function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}

function updateGoalInArray(goals, goalId, updateGoalCallback) {
  const updatedGoals = goals.map((goal) => {
    if (goal.id === goalId) {
      return goal
    }
    const updatedGoal = updateGoalCallback(goal);
    return updatedGoal
  })
  return updatedGoals
}

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
    let goalToUpdate = action.goal
    const newGoals = updateGoalInArray(state.goals, goalToUpdate.id, goalToUpdate => {
      return updateObject(goalToUpdate, {action});
    });

    return updateObject(state, {goals: newGoals})

    case 'DELETE_GOAL':
      return { ...state, goals: state.goals.filter(goal => goal.id !== action.id )};

    default:
      return state
  }

};
