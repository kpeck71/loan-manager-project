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

// export function createGoal(newGoal) {
//     return(dispatch) => {
//       dispatch({type: 'LOADING_GOALS'});
//       return fetch('/api/v1/goals.json'), {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(newGoal),
//         }.then((response) => {return response.json()})
//         .then(goal => dispatch({type: 'ADD_GOAL', payload: goal}))
//     }
//   }
//
export function fetchGoals() {
  return(dispatch) => {
    dispatch({type: 'LOADING_GOALS'});
    return fetch('/api/v1/goals.json')
      .then(response => response.json())
      .then(goals => dispatch({ type: 'FETCH_GOALS', payload: goals }));
    };
  }
