export const addPayment = (payment) => {
  return {
    type: 'ADD_PAYMENT',
    payment
  };
};

// export const fetchGoals = (fetchGoals) => {
//   return {
//     type: 'FETCH_GOALS',
//     fetchGoals
//   }
// }

export function fetchGoals() {
  return(dispatch) => {
    dispatch({type: 'LOADING_GOALS'});
    return fetch('/api/v1/goals.json')
      .then((response) => {return response.json()})
      .then(goals => dispatch({ type: 'FETCH_GOALS', payload: goals }));
    };
  }
