export const addPayment = (payment) => {
  return {
    type: 'ADD_PAYMENT',
    payment
  };
};

export const addGoal = (goal) => {
  return {
    type: 'ADD_GOAL',
    goal
  };
};

export const addBudget = (budget) => {
  return {
    type: 'ADD_BUDGET',
    budget
  };
};

export const deleteGoal = goal => {
  return {
    type: 'DELETE_GOAL',
    goal
  }
}
export function createGoal(newGoal) {
  console.log('hi youre in createGoal', JSON.stringify(newGoal))
  return function(dispatch) {
    dispatch({type: 'ADD_GOAL', newGoal})
    return fetch('/api/v1/goals.json', {
        method: 'POST',
        body: JSON.stringify({goal: newGoal})
      }).then(response => response.json())
    }
  }

export function fetchGoals() {
  return(dispatch) => {
    dispatch({type: 'LOADING_GOALS'});
    return fetch('/api/v1/goals.json')
      .then(response => response.json())
      .then(goals => dispatch({ type: 'FETCH_GOALS', payload: goals }));
    };
}
